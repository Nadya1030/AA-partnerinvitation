import { Calendar, Clock, MapPin } from 'lucide-react';
import Button from './Button';
import Reveal from './Reveal';

export default function EventDetail() {
  const timelineEvents = [
    { time: '13:30 - 14:30', title: 'Registration' },
    { time: '14:30 - 16:20', title: 'Main Ceremony & Speeches' },
    { time: '16:20 - 20:20', title: 'Bonding & Networking Session' },
    { time: '20:20 - 21:00', title: 'Closing' },
  ];

  return (
    <section id="acara" className="py-24 px-4 md:px-12 bg-sand relative">
      <Reveal>
        <div className="text-center mb-10">
          <p className="font-script text-7xl md:text-8xl text-terracotta">Event Details</p>
        </div>
      </Reveal>

      {/* Grid 2 Kolom */}
      <div className="max-w-4xl mx-auto grid grid-cols-2 gap-4 md:gap-14 relative items-center">
        
        {/* GARIS PEMBATAS VERTIKAL TENGAH */}
        <div className="absolute left-1/2 top-4 bottom-2 -translate-x-1/2 w-px bg-terracotta/30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-terracotta rounded-full border-2 border-sandDark" />
        </div>

        {/* SISI KIRI: WAKTU & LOKASI (RATA KANAN) */}
        <div className="pr-4 md:pr-10 space-y-8 text-right flex flex-col items-end">
          
          {/* TANGGAL & JAM */}
          <Reveal delay={100}>
            <div className="flex items-start justify-end gap-3 md:gap-4">
              <div>
                <p className="font-serif text-lg md:text-2xl text-brown font-semibold leading-tight">
                  Minggu, 25 Oktober 2026
                </p>
                <p className="font-body text-xs md:text-base text-brown/75 flex items-center justify-end gap-1.5 mt-1.5 font-medium">
                  13:30 – 21:00 WIB <Clock size={16} className="text-terracotta shrink-0" />
                </p>
              </div>
              <div className="p-2.5 md:p-3 bg-terracotta/10 rounded-xl text-terracotta shrink-0 mt-0.5">
                <Calendar size={22} className="md:w-6 md:h-6" />
              </div>
            </div>
          </Reveal>

          {/* LOKASI */}
          <Reveal delay={200}>
            <div className="flex items-start justify-end gap-3 md:gap-4">
              <div>
                <p className="font-serif text-lg md:text-2xl text-brown font-semibold leading-tight">
                  Hotel Maestro Pontianak
                </p>
                <p className="font-body text-xs md:text-base text-brown/75 mb-4 mt-1.5 leading-relaxed">
                  Jl. Sultan Abdurrahman No.72-74, Pontianak
                </p>
                <div className="flex justify-end">
                  <Button href="https://maps.app.goo.gl/uFk8URK7gpi57zBS9" target="_blank">
                    View Map
                  </Button>
                </div>
              </div>
              <div className="p-2.5 md:p-3 bg-terracotta/10 rounded-xl text-terracotta shrink-0 mt-0.5">
                <MapPin size={22} className="md:w-6 md:h-6" />
              </div>
            </div>
          </Reveal>
        </div>

        {/* SISI KANAN: RUNDOWN (RATA KIRI) */}
        <div className="pl-4 md:pl-10 text-left space-y-5 md:space-y-6">
          {timelineEvents.map((item, index) => (
            <Reveal key={index} delay={150 + index * 50}>
              <div>
                <p className="font-body text-xs md:text-sm font-bold tracking-wider text-terracotta uppercase">
                  {item.time}
                </p>
                <p className="font-serif text-base md:text-xl text-brown font-semibold leading-snug mt-0.5">
                  {item.title}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}