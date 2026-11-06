import BishopIcon from '@/components/BishopIcon';

type DiagonalDividerProps = {
  tone?: 'light' | 'dark';
};

export default function DiagonalDivider({ tone = 'light' }: DiagonalDividerProps) {
  const lineClass = tone === 'dark' ? 'bg-gold-500/40' : 'bg-onyx-900/15';
  const iconClass = tone === 'dark' ? 'text-gold-400' : 'text-cheddar-600';

  return (
    <div className="relative flex h-16 items-center justify-center overflow-hidden" aria-hidden="true">
      <div className={`absolute left-0 right-1/2 top-1/2 h-px -translate-y-1/2 origin-left -rotate-6 ${lineClass}`} />
      <div className={`absolute left-1/2 right-0 top-1/2 h-px -translate-y-1/2 origin-right rotate-6 ${lineClass}`} />
      <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-current bg-brie-100 text-cheddar-600">
        <BishopIcon className={`h-5 w-5 ${iconClass}`} />
      </div>
    </div>
  );
}
