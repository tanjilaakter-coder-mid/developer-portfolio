import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="group relative flex items-center justify-center">
      <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full blur-md opacity-60 group-hover:opacity-100 transition duration-500"></div>
      
      <div className="relative w-12 h-12 rounded-full bg-blue-950/70 dark:bg-black/80 backdrop-blur-xl border border-blue-400/50 dark:border-cyan-500/50 flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.3)]">
        <div className="flex items-baseline">
          <span className="text-xl font-black text-white tracking-tighter">T</span>
          <span className="text-xl font-black text-cyan-400 tracking-tighter">N</span>
        </div>
        <div className="absolute bottom-1 right-2 w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]"></div>
      </div>
    </Link>
  );
}