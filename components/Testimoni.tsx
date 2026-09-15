import Reveal from './Reveal';
import BohemianDivider from './BohemianDivider';

const testimonials = [
  { name: 'Jesika Tan', role: 'Alumni', quote: 'Acara ini selalu jadi momen paling berkesan tiap tahunnya.' },
  { name: 'Risky Andrean', role: 'Current Member', quote: 'Seru banget bisa kumpul lagi sama alumni dan teman-teman magang.' },
];

export default function Testimoni() {
  return (
    <section id="testimoni" className="py-20 px-8 text-center bg-sandDark">
      <Reveal>
        <p className="font-script text-4xl text-terracotta">Words From Them</p>
        <BohemianDivider />
      </Reveal>

      <div className="space-y-10 max-w-sm mx-auto">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={150 * (i + 1)}>
            <p className="font-serif italic text-lg text-brown leading-relaxed">"{t.quote}"</p>
            <p className="font-body text-sm text-brown/70 mt-3">{t.name} — {t.role}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}