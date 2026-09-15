'use client';
import { useEffect, useState } from 'react';
import Reveal from './Reveal';

const EVENT_DATE = new Date('2026-10-25T13:30:00+07:00');

function getTimeLeft() {
  const diff = EVENT_DATE.getTime() - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Closing() {
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { label: 'Hari', value: time.days },
    { label: 'Jam', value: time.hours },
    { label: 'Menit', value: time.minutes },
    { label: 'Detik', value: time.seconds },
  ];

  return (
    <section id="countdown" className="py-20 px-8 text-center bg-sand">
      <Reveal>
        <div className="flex gap-3 justify-center mb-10">
          {units.map((u) => (
            <div key={u.label} className="bg-white/70 rounded-lg px-4 py-3 min-w-[60px]">
              <p className="font-serif text-2xl font-semibold text-terracotta">{u.value}</p>
              <p className="font-body text-[10px] uppercase tracking-wide text-brown/60">{u.label}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={150}>
        <p className="font-script text-4xl text-terracotta">See You Soon, Aktjaya!</p>
      </Reveal>
    </section>
  );
}