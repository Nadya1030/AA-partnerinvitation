import Reveal from './Reveal';
import BohemianDivider from './BohemianDivider';

export default function Beranda() {
  return (
    <section id="beranda" className="py-24 px-8 text-center bg-sand">
      <Reveal>
        <p className="font-script text-4xl text-terracotta">A little note for you</p>
        <BohemianDivider />
      </Reveal>

      <Reveal delay={150}>
        <p className="font-serif text-lg leading-relaxed max-w-md mx-auto text-brown">
          Dear Alumni, Probies, and Current Members,
        </p>
      </Reveal>

      <Reveal delay={300}>
        <p className="font-body text-sm leading-relaxed max-w-md mx-auto mt-4 text-brown/80">
          Dengan penuh syukur, kami mengundang Anda untuk hadir dalam perayaan
          13 tahun perjalanan kami. Sebuah momen untuk kembali berkumpul,
          mengenang kembali kebersamaan, dan merayakan pertumbuhan yang telah
          kita lalui bersama.
        </p>
      </Reveal>
    </section>
  );
}