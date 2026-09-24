import { useState } from 'react';
import Reveal from './Reveal';
import BohemianDivider from './BohemianDivider';
import { X } from 'lucide-react';

const photos = [
  { src: '/images/gallery/foto1.JPG', alt: 'Kenangan 1', span: 'col-span-1 md:col-span-1 row-span-2' },
  { src: '/images/gallery/foto2.JPG', alt: 'Kenangan 2', span: 'col-span-1 md:col-span-1 row-span-1' },
  { src: '/images/gallery/foto3.JPG', alt: 'Kenangan 3', span: 'col-span-1 md:col-span-2 row-span-1' },
  { src: '/images/gallery/foto4.JPG', alt: 'Kenangan 4', span: 'col-span-1 md:col-span-1 row-span-1' },
  { src: '/images/gallery/foto5.JPG', alt: 'Kenangan 5', span: 'col-span-1 md:col-span-1 row-span-2' },
  { src: '/images/gallery/foto6.JPG', alt: 'Kenangan 6', span: 'col-span-1 md:col-span-1 row-span-1' },
  { src: '/images/gallery/foto7.JPG', alt: 'Kenangan 7', span: 'col-span-1 md:col-span-2 row-span-1' },
  { src: '/images/gallery/foto8.JPG', alt: 'Kenangan 8', span: 'col-span-1 md:col-span-1 row-span-1' },
  { src: '/images/gallery/foto9.JPG', alt: 'Kenangan 9', span: 'col-span-1 md:col-span-1 row-span-1' },
  { src: '/images/gallery/foto10.JPG', alt: 'Kenangan 10', span: 'col-span-1 md:col-span-1 row-span-2' },
  { src: '/images/gallery/foto11.JPG', alt: 'Kenangan 11', span: 'col-span-1 md:col-span-1 row-span-1' },
  { src: '/images/gallery/foto12.JPG', alt: 'Kenangan 12', span: 'col-span-1 md:col-span-2 row-span-1' },
  { src: '/images/gallery/foto13.JPG', alt: 'Kenangan 13', span: 'col-span-1 md:col-span-1 row-span-1' },
  { src: '/images/gallery/foto14.JPG', alt: 'Kenangan 14', span: 'col-span-1 md:col-span-1 row-span-1' },
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [visibleCount, setVisibleCount] = useState(8); // Dinaikkan ke 8 agar pas dengan grid 4 kolom

  return (
    <section id="galeri" className="py-24 px-4 md:px-8 text-center bg-sand">
      <Reveal>
        <p className="font-script text-6xl md:text-7xl text-terracotta">Let's Throwback</p>
        <p className="font-body text-sm md:text-base text-brown/70 mt-2">
          From one celebration to another, here’s a little glimpse of the memories we’ve created together.
        </p>
        <BohemianDivider />
      </Reveal>

      {/* GRID KONTAN DENGAN grid-flow-dense AGAR TIDAK ADA BOLONG */}
      <Reveal delay={150}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[220px] md:auto-rows-[260px] gap-4 grid-flow-dense mt-10">
          {photos.slice(0, visibleCount).map((photo, i) => (
            <div
              key={i}
              onClick={() => setSelectedImg(photo.src)}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer border-2 border-white/80 transition-all duration-300 ${photo.span}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-terracotta/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-body text-xs font-medium tracking-wider bg-black/40 px-4 py-1.5 rounded-full backdrop-blur-xs">
                  Zoom
                </span>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* TOMBOL SHOW MORE / SHOW LESS */}
      {photos.length > 8 && (
        <Reveal delay={200}>
          <div className="mt-12">
            <button
              onClick={() => setVisibleCount(visibleCount >= photos.length ? 8 : photos.length)}
              className="font-body text-xs md:text-sm tracking-wider uppercase font-semibold text-brown border border-brown/30 px-8 py-3 rounded-full hover:bg-terracotta hover:text-white hover:border-terracotta transition-all duration-300 cursor-pointer"
            >
              {visibleCount >= photos.length ? 'Lihat Sedikit' : 'Lihat Foto Lainnya'}
            </button>
          </div>
        </Reveal>
      )}

      {/* MODAL POP-UP / LIGHTBOX */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-6"
          onClick={() => setSelectedImg(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[95vh] flex justify-center items-center">
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute -top-12 right-2 text-white hover:text-terracotta transition-colors p-2 cursor-pointer"
              aria-label="Close"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImg}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain rounded-2xl border-2 border-white/20"
            />
          </div>
        </div>
      )}
    </section>
  );
}