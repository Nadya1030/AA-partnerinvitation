import Reveal from './Reveal';
import BohemianDivider from './BohemianDivider';

export default function DressCode() {
  // Palet warna bohemian (Cream, Beige, Terracotta, Sage, Olive, Dark Brown)
  const colorPalette = [
    '#F7F2E9', // Cream / Ivory
    '#D9C3B0', // Beige / Warm Sand
    '#C86D51', // Terracotta
    '#A3B18A', // Sage Green
    '#588157', // Olive Green
    '#4A3B32', // Deep Brown
  ];

  return (
    <section id="dresscode" className="py-24 px-6 md:px-12 text-center bg-[#F3F4F7]">
      {/* JUDUL UTAMA */}
      <Reveal>
        <p className="font-script text-7xl md:text-8xl text-terracotta">Dress Code</p>
        <p className="font-serif text-2xl md:text-3xl text-brown font-semibold mt-2 tracking-wide">
          Bohemian Chic
        </p>
        <BohemianDivider />
      </Reveal>

      {/* PALET WARNA BULAT-BULAT (DIPERBESAR) */}
      <Reveal delay={150}>
        <div className="flex justify-center items-center gap-4 my-8">
          {colorPalette.map((color, index) => (
            <div
              key={index}
              className="w-9 h-9 md:w-12 md:h-12 rounded-full shadow-md border-2 border-white/80 transition-transform hover:scale-115 cursor-pointer"
              style={{ backgroundColor: color }}
              title={`Color palette ${index + 1}`}
            />
          ))}
        </div>
      </Reveal>

      {/* FOTO DRESSCODE (CONTAINER & TINGGI DIPERBESAR) */}
      <Reveal delay={300}>
        <div className="grid grid-cols-2 gap-5 md:gap-8 max-w-md md:max-w-xl mx-auto">
          <img
            src="/images/dresscode-1.jpg"
            alt="Contoh dresscode bohemian 1"
            className="w-full h-64 md:h-80 object-cover rounded-2xl border-2 border-white shadow-md hover:shadow-lg transition-shadow duration-300"
          />
          <img
            src="/images/dresscode-2.jpg"
            alt="Contoh dresscode bohemian 2"
            className="w-full h-64 md:h-80 object-cover rounded-2xl border-2 border-white shadow-md hover:shadow-lg transition-shadow duration-300"
          />
        </div>
      </Reveal>
    </section>
  );
}