import Reveal from './Reveal';
import BohemianDivider from './BohemianDivider';

const photos = [
  '/images/gallery/foto1.jpg',
  '/images/gallery/foto2.jpg',
  '/images/gallery/foto3.jpg',
  '/images/gallery/foto4.jpg',
];

export default function Gallery() {
  return (
    <section id="galeri" className="py-20 px-8 text-center bg-sand">
      <Reveal>
        <p className="font-script text-4xl text-terracotta">Moments</p>
        <p className="font-body text-sm text-brown/70">Kenangan tahun lalu</p>
        <BohemianDivider />
      </Reveal>

      <Reveal delay={150}>
        <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
          {photos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Kenangan ${i + 1}`}
              className="w-full h-40 object-cover rounded-lg border-2 border-white shadow-sm"
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}