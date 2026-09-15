'use client';
import { useEffect, useState } from 'react';

const sections = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'tentang', label: 'Tentang Acara' },
  { id: 'rundown', label: 'Rundown' },
  { id: 'galeri', label: 'Galeri' },
  { id: 'testimoni', label: 'Testimoni' },
  { id: 'kehadiran', label: 'Kehadiran' },
  { id: 'kontak', label: 'Kontak' },
];

export default function DotNav() {
  const [active, setActive] = useState('beranda');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {sections.map((s) => (
        <button
          key={s.id}
          onClick={() => scrollTo(s.id)}
          className="group relative flex items-center justify-end"
          aria-label={s.label}
        >
          <span className="mr-2 hidden group-hover:block text-xs bg-black text-white px-2 py-1 rounded whitespace-nowrap">
            {s.label}
          </span>
          <span
            className={`w-2.5 h-2.5 rounded-full transition ${
              active === s.id ? 'bg-black scale-125' : 'bg-gray-300'
            }`}
          />
        </button>
      ))}
    </div>
  );
}