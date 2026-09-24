import Reveal from './Reveal';
import BohemianDivider from './BohemianDivider';

export default function Bridging() {
  return (
    // Padding vertikal dibuat tinggi (py-40 md:py-60) agar containernya panjang
    <section className="py-40 md:py-60 px-6 md:px-12 bg-sand text-center relative overflow-hidden flex flex-col items-center justify-center min-h-[80vh]">
      
      {/* GARIS PENJEMBATAN ATAS */}
      <Reveal>
        <div className="flex flex-col items-center mb-12">
          <div className="w-2 h-2 rounded-full bg-terracotta/60 mb-2" />
          <div className="w-[1px] h-24 md:h-36 bg-gradient-to-b from-terracotta/60 to-transparent" />
        </div>
      </Reveal>

      {/* KONTEN UTAMA DENGAN SPACING RENGGANG */}
      <div className="max-w-3xl mx-auto space-y-12 md:space-y-16">
        
        <Reveal>
          <p className="font-body text-xs md:text-sm uppercase tracking-[0.3em] text-brown/60 font-medium">
            A Journey of 13 Years
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="font-script text-5xl md:text-7xl lg:text-8xl text-terracotta leading-tight">
            Let's Take A look, Shall we?
          </h2>
        </Reveal>

      </div>

      {/* GARIS PENJEMBATAN BAWAH (SANGAT PANJANG) */}
      <Reveal delay={250}>
        <div className="pt-16 md:pt-24 flex flex-col items-center space-y-4">
          <div className="w-[1px] h-28 md:h-44 bg-gradient-to-b from-transparent via-terracotta/50 to-terracotta" />
          <div className="w-2.5 h-2.5 rounded-full bg-terracotta animate-bounce" />
        </div>
      </Reveal>

    </section>
  );
}