'use client';
import Button from './Button';

export default function Opening({ onOpen }: { onOpen: () => void }) {
  return (
    <div
      className="h-screen flex flex-col items-center justify-center text-center px-6 relative"
      style={{
        backgroundImage: "url('/images/Background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/35" />
      <div className="relative z-10 text-white">
        <p className="font-serif tracking-[0.3em] text-xs uppercase mb-3">You're Invited</p>
        <h1 className="font-script text-6xl md:text-7xl mb-2">Aktjaya</h1>
        <p className="font-serif text-base mb-10">13th Anniversary Celebration</p>
        <Button onClick={onOpen} className="border-white text-white hover:bg-white hover:text-brown">
          Open Invitation
        </Button>
      </div>
    </div>
  );
}