export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-white text-black">
      <div className="relative w-10 h-10 mb-4">
        <div className="absolute inset-0 rounded-full border-2 border-[#e6e8ee]" />
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#0047ff] animate-spin" />
      </div>
      <p className="text-xs font-mono text-[#5b6170] tracking-wider uppercase">Loading…</p>
    </div>
  );
}
