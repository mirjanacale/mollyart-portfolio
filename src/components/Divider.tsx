import { useId } from 'react';

/**
 * Decorative section break: a tapering gold rule with a seed motif at the
 * centre. Purely ornamental, so it's hidden from assistive tech.
 */
export function Divider() {
  // Gradient ids must be unique per instance or the second divider would
  // reference the first one's gradients. Colons are stripped so the ids stay
  // safe inside url(#...).
  const uid = useId().replace(/:/g, '');

  return (
    <div className="divider" aria-hidden="true">
      <svg width="240" height="40" viewBox="0 0 240 40" fill="none" focusable="false">
        <defs>
          <linearGradient id={`${uid}-l`} gradientUnits="userSpaceOnUse" x1="4" x2="99">
            <stop offset="0" stopColor="#C9A227" stopOpacity="0" />
            <stop offset="1" stopColor="#C9A227" />
          </linearGradient>
          <linearGradient id={`${uid}-r`} gradientUnits="userSpaceOnUse" x1="141" x2="236">
            <stop offset="0" stopColor="#C9A227" />
            <stop offset="1" stopColor="#C9A227" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M4 20H99" stroke={`url(#${uid}-l)`} />
        <path d="M141 20H236" stroke={`url(#${uid}-r)`} />
        <circle cx="120" cy="20" r="10" stroke="#C9A227" />
        <circle cx="120" cy="20" r="4.5" fill="#C9A227" fillOpacity=".5" stroke="#C9A227" strokeWidth=".7" />
        <circle cx="120" cy="5.5" r="1.5" fill="#C9A227" />
        <circle cx="120" cy="34.5" r="1.5" fill="#C9A227" />
        <circle cx="105" cy="20" r="1.5" fill="#C9A227" />
        <circle cx="135" cy="20" r="1.5" fill="#C9A227" />
      </svg>
    </div>
  );
}
