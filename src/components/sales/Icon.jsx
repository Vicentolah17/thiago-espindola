/**
 * Conjunto de icones de linha, desenhados no mesmo tom geometrico do hub:
 * traco fino, cantos arredondados, sempre em currentColor.
 * Sem biblioteca de icones, tudo inline.
 */

const PATHS = {
  minus: <path d="M6 12h12" />,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  arrow: <path d="M5 12h13m-5-5l5 5-5 5" />,
  person: (
    <>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5 19.5c1.4-3.2 4-4.8 7-4.8s5.6 1.6 7 4.8" />
    </>
  ),
  script: (
    <>
      <rect x="4.5" y="3.5" width="15" height="17" rx="2.5" />
      <path d="M8.5 9h7M8.5 13h7M8.5 17h4" />
    </>
  ),
  pulse: <path d="M3 12h4l2.5-6 4 12L16 12h5" />,
  play: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M10.5 9l5 3-5 3z" />
    </>
  ),
  magnet: (
    <>
      <path d="M6 4v8a6 6 0 0 0 12 0V4" />
      <path d="M6 9h4M14 9h4" />
    </>
  ),
  blocks: (
    <>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.6" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.6" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.6" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.6" />
    </>
  ),
  layers: <path d="M12 3.5l8.5 4.5L12 12.5 3.5 8l8.5-4.5zM3.5 13l8.5 4.5L20.5 13" />,
  link: (
    <>
      <path d="M10 14a4 4 0 0 0 5.7 0l2.8-2.8a4 4 0 0 0-5.7-5.7L11.5 6.8" />
      <path d="M14 10a4 4 0 0 0-5.7 0L5.5 12.8a4 4 0 0 0 5.7 5.7l1.3-1.3" />
    </>
  ),
  hidden: (
    <>
      <path d="M3 12s3.5-6 9-6c1.5 0 2.9.4 4 1.1M21 12s-3.5 6-9 6c-1.6 0-3-.4-4.1-1.2" />
      <path d="M4 4l16 16" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 2.8v5.4c0 4.2-2.8 7.8-7 9.8-4.2-2-7-5.6-7-9.8V5.8L12 3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  gift: (
    <>
      <rect x="3.5" y="8.5" width="17" height="12" rx="2" />
      <path d="M3.5 13h17M12 8.5v12" />
      <path d="M12 8.5C10.5 5 8.5 3.5 7 4.5S6.5 8.5 12 8.5zM12 8.5c1.5-3.5 3.5-5 5-4s.5 4-5 4z" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8.5" r="3" />
      <path d="M3 19c1.2-2.8 3.4-4.2 6-4.2S13.8 16.2 15 19" />
      <path d="M16 6.2a3 3 0 0 1 0 5.6M17.5 14.9c1.6.7 2.8 2 3.5 4.1" />
    </>
  ),
  refresh: (
    <>
      <path d="M20 12a8 8 0 1 1-2.6-5.9" />
      <path d="M20 4v4.5h-4.5" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M15.2 8.8l-1.7 4.7-4.7 1.7 1.7-4.7z" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
};

export default function Icon({ name, size = 20, className }) {
  const path = PATHS[name];
  if (!path) return null;

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {path}
    </svg>
  );
}
