import { useRef } from 'react';
import Reveal from './Reveal';
import BohemianDivider from './BohemianDivider';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Jesika Tan',
    role: 'Alumni',
    quote: 'Acara ini selalu jadi momen paling berkesan tiap tahunnya. Kebersamaan dan kehangatannya selalu kerasa banget!',
    avatar: '/images/testi-jesika.jpg',
  },
  {
    name: 'Risky Andrean',
    role: 'Current Member',
    quote: 'Seru banget bisa kumpul lagi sama alumni dan teman-teman magang. Banyak insight baru yang didapet!',
    avatar: '/images/testi-risky.jpg',
  },
  {
    name: 'Amanda Putri',
    role: 'Alumni',
    quote: 'Networking dan suasana acaranya bener-bener dapet banget. Gak pernah nyesel buat hadir tiap tahun!',
    avatar: '/images/testi-amanda.jpg',
  },
  {
    name: 'Bima Santoso',
    role: 'Current Member',
    quote: 'Konsep bohemian tahun ini keren banget! Dekorasi sama rundown acaranya disiapin matang.',
    avatar: '/images/testi-bima.jpg',
  },
];

export default function Testimoni() {
  // 1. Menambahkan tipe HTMLDivElement pada useRef
  const scrollRef = useRef<HTMLDivElement>(null);

  // 2. Menambahkan tipe data pada parameter direction ('left' | 'right')
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="testimoni" className="py-20 px-4 md:px-12 bg-sand overflow-hidden">
      <Reveal>
        <div className="text-center mb-12">
          <p className="font-script text-4xl md:text-5xl text-terracotta">Words From Them</p>
          <BohemianDivider />
        </div>
      </Reveal>

      {/* Container Utama */}
      <div className="max-w-6xl mx-auto relative px-2 md:px-8">
        
        {/* TOMBOL PANAH KIRI */}
        <button
          onClick={() => scroll('left')}
          className="hidden md:flex absolute -left-4 lg:-left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 items-center justify-center rounded-full bg-sand border border-brown/20 text-brown shadow-lg hover:bg-terracotta hover:text-white hover:scale-105 transition-all cursor-pointer"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={22} />
        </button>

        {/* TOMBOL PANAH KANAN */}
        <button
          onClick={() => scroll('right')}
          className="hidden md:flex absolute -right-4 lg:-right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 items-center justify-center rounded-full bg-sand border border-brown/20 text-brown shadow-lg hover:bg-terracotta hover:text-white hover:scale-105 transition-all cursor-pointer"
          aria-label="Next testimonial"
        >
          <ChevronRight size={22} />
        </button>

        {/* AREA CAROUSEL HORIZONTAL */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none py-6 px-4 touch-pan-x"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch' 
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="snap-center shrink-0 w-[82%] sm:w-[320px] md:w-[350px] relative pt-10"
            >
              {/* FOTO PROFIL LINGKARAN */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
                <div className="w-20 h-20 rounded-full p-1 bg-sandDark">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-full h-full object-cover rounded-full border-2 border-white shadow-md"
                  />
                </div>
              </div>

              {/* CARD TESTIMONI */}
              <div className="bg-[#FAF7F2] rounded-3xl pt-12 pb-8 px-6 shadow-[0_12px_28px_-6px_rgba(74,59,50,0.1)] border border-white/80 text-center relative z-10 h-full flex flex-col justify-between">
                
                <div>
                  {/* RATING BINTANG */}
                  <div className="flex justify-center gap-1 text-terracotta/80 mb-3">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} size={15} fill="currentColor" stroke="none" />
                    ))}
                  </div>

                  {/* TEKS QUOTE */}
                  <p className="font-serif italic text-base text-brown/90 leading-relaxed px-1">
                    "{t.quote}"
                  </p>
                </div>

                <div>
                  {/* GARIS PEMISAH */}
                  <div className="w-12 h-px bg-brown/15 mx-auto my-4" />

                  {/* NAMA & ROLE */}
                  <p className="font-serif font-semibold text-lg text-brown">{t.name}</p>
                  <p className="font-body text-xs tracking-widest text-terracotta uppercase mt-0.5">
                    {t.role}
                  </p>
                </div>

                {/* HIASAN IKON QUOTE */}
                <Quote size={22} className="absolute bottom-4 right-5 text-brown/10 -rotate-12" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}