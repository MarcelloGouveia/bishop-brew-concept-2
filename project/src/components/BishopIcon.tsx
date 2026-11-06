type BishopIconProps = {
  className?: string;
};

export default function BishopIcon({ className }: BishopIconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M32 8c4 4 7 8 7 13 0 4-3 6-3 9 4 2 8 6 8 12 0 4-4 7-4 7H24s-4-3-4-7c0-6 4-10 8-12 0-3-3-5-3-9 0-5 3-9 7-13Z" />
      <path d="M29 22l6 6" />
      <path d="M24 49h16" />
      <path d="M26 52h12" />
      <rect x="16" y="54" width="32" height="5" rx="1.5" />
    </svg>
  );
}
