import { useEffect, useRef, useState } from 'react';
import type { CSSProperties, PointerEvent as ReactPointerEvent } from 'react';
import type { Painting } from '../data/paintings';
import { useAutoRotate } from '../hooks/useAutoRotate';

interface GalleryWallProps {
  paintings: Painting[];
  onOpen: (painting: Painting) => void;
}

/** Move further than this during a press and it was a rotation, not a click. */
const DRAG_SLOP = 6;

interface WallPaintingProps {
  painting: Painting;
  className: string;
  style?: CSSProperties;
  onOpen: () => void;
  onFocus?: () => void;
}

function WallPainting({ painting, className, style, onOpen, onFocus }: WallPaintingProps) {
  const [failed, setFailed] = useState(false);

  return (
    <button
      type="button"
      className={className}
      style={style}
      onClick={onOpen}
      onFocus={onFocus}
      aria-label={`Open ${painting.title}`}
    >
      {failed ? (
        <span className="wall-fallback">{painting.title}</span>
      ) : (
        // No aspect-ratio here: the frame is a fixed square and the painting
        // is contained inside it, matted by the frame's parchment ground.
        <img
          src={painting.src}
          alt={painting.title}
          draggable={false}
          onError={() => {
            setFailed(true);
            if (import.meta.env.DEV) {
              console.error(`Wall image failed to load: ${painting.src}`);
            }
          }}
        />
      )}
    </button>
  );
}

export function GalleryWall({ paintings, onOpen }: GalleryWallProps) {
  const step = 360 / paintings.length;
  const [angle, setAngle] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [snapping, setSnapping] = useState(false);

  const stageRef = useRef<HTMLDivElement>(null);
  const drag = useRef<{ lastX: number; moved: number; degreesPerPixel: number } | null>(null);
  const suppressClick = useRef(false);

  const { reducedMotion, pause, resume } = useAutoRotate((delta) =>
    setAngle((current) => current + delta),
  );

  // Listeners live on the window so a drag that leaves the stage — or the
  // browser entirely — still ends cleanly and restarts the idle rotation.
  useEffect(() => {
    if (!dragging) return;

    const onMove = (e: PointerEvent) => {
      const state = drag.current;
      if (!state) return;
      const dx = e.clientX - state.lastX;
      state.lastX = e.clientX;
      state.moved += Math.abs(dx);
      setAngle((current) => current + dx * state.degreesPerPixel);
    };

    const onUp = () => {
      suppressClick.current = (drag.current?.moved ?? 0) > DRAG_SLOP;
      drag.current = null;
      setDragging(false);
      resume();
    };

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    window.addEventListener('pointercancel', onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointercancel', onUp);
    };
  }, [dragging, resume]);

  if (reducedMotion) {
    return (
      <div className="hero-wall">
        <div
          className="wall-static"
          role="region"
          aria-label="Featured paintings. Scroll sideways to see them all."
        >
          {paintings.map((painting) => (
            <WallPainting
              key={painting.id}
              painting={painting}
              className="wall-plane"
              onOpen={() => onOpen(painting)}
            />
          ))}
        </div>
        <p className="wall-hint">Scroll sideways to see the collection</p>
      </div>
    );
  }

  const count = paintings.length;
  const frontIndex = ((Math.round(-angle / step) % count) + count) % count;

  const handlePointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    suppressClick.current = false;
    setSnapping(false);
    pause();
    drag.current = {
      lastX: e.clientX,
      moved: 0,
      // A drag the full width of the stage turns the wall right around.
      degreesPerPixel: 360 / (stageRef.current?.offsetWidth || 600),
    };
    setDragging(true);
  };

  // Tab lands on paintings that may be facing away, so bring the focused one
  // round to the front — by the shortest route, not a full spin.
  const bringToFront = (index: number) => {
    const target = -index * step;
    setAngle((current) => target + Math.round((current - target) / 360) * 360);
  };

  return (
    <div className="hero-wall">
      <div
        ref={stageRef}
        className={`wall-stage${dragging ? ' is-dragging' : ''}`}
        role="region"
        aria-label="Featured paintings. Drag or swipe sideways to rotate the wall."
        onPointerDown={handlePointerDown}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
            setSnapping(false);
            resume();
          }
        }}
      >
        <div
          className={`wall-ring${snapping ? ' is-snapping' : ''}`}
          style={{ '--wall-angle': `${angle}deg` } as CSSProperties}
        >
          {paintings.map((painting, i) => (
            <WallPainting
              key={painting.id}
              painting={painting}
              className={`wall-plane${i === frontIndex ? ' is-front' : ''}`}
              style={{ '--plane-angle': `${i * step}deg` } as CSSProperties}
              onOpen={() => {
                if (suppressClick.current) {
                  suppressClick.current = false;
                  return;
                }
                onOpen(painting);
              }}
              onFocus={() => {
                pause();
                setSnapping(true);
                bringToFront(i);
              }}
            />
          ))}
        </div>
      </div>
      <p className="wall-hint">Drag or swipe to rotate the wall</p>
    </div>
  );
}
