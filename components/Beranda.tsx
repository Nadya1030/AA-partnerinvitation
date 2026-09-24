import Reveal from './Reveal';

export default function Beranda() {
  return (
    <section 
      id="beranda" 
      className="relative overflow-hidden bg-cream py-16 px-6 md:px-12 rounded-3xl border border-brown/10 max-w-6xl mx-auto my-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
        
        {/* SISI KIRI: KONTEN TEKS */}
        <div className="text-left space-y-4">
          <Reveal>
            <p className="font-script text-5xl md:text-6xl text-terracotta leading-tight">
              A little note for you
            </p>
          </Reveal>

          <Reveal delay={150}>
            <p className="font-serif text-lg md:text-xl leading-relaxed text-brown font-semibold">
              Dear Alumni, Probies, and Current Members,
            </p>
          </Reveal>

          <Reveal delay={300}>
            <p className="font-body text-sm md:text-base leading-relaxed text-brown/80">
              With grateful hearts, we invite you to celebrate 13 years of journeys, connections, and growth together.
              This is more than a celebration. It is a moment to come together, reconnect with the people who have been part of the journey, and look back at the memories, lessons, and impact we have created along the way.
            </p>
          </Reveal>
        </div>

        {/* SISI KANAN: GAMBAR DENGAN BINGKAI */}
        <div className="relative flex justify-center items-center py-6 w-full">
          
          {/* Ornamen / Bingkai Belakang */}
          <div className="absolute w-full max-w-md h-64 md:max-w-lg md:h-80 rounded-2xl border-2 border-terracotta/30 rotate-2 translate-x-1 transition-transform duration-500 hover:rotate-1" />
          <div className="absolute w-full max-w-md h-64 md:max-w-lg md:h-80 rounded-2xl bg-terracotta/10 -rotate-2 -translate-x-1" />

          {/* Container Main Photo & Bingkai Utama */}
          <div className="relative w-full max-w-md h-64 md:max-w-lg md:h-80 rounded-2xl overflow-hidden border-2 border-white/80 bg-terracotta/50 group z-10">
              
            {/* Foto Utama */}
            <img
              src="/images/gallery/foto4.JPG" 
              alt="Anniversary Moment"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out relative z-0"
            />

            {/* Gradasi Tipis Hanya di Bagian Dasar Gambar (Bukan Seluruh Area) */}
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-green/80 via-terracotta/20 to-transparent z-10 pointer-events-none" />
            
            {/* Detail Border Halus di Dalam Bingkai */}
            <div className="absolute inset-0 border border-white/30 rounded-2xl pointer-events-none z-20" />
          </div>

        </div>

      </div>

      {/* Ornamen Latar Belakang (Glow) */}
      <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-terracotta/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-10 -left-10 w-60 h-60 bg-brown/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}