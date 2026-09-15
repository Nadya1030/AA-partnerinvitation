import Reveal from './Reveal';
import BohemianDivider from './BohemianDivider';

export default function DressCode() {
  return (
    <section id="dresscode" className="py-20 px-8 text-center bg-sand">
      <Reveal>
        <p className="font-script text-4xl text-terracotta">Dress Code</p>
        <p className="font-serif text-xl text-brown mt-1">Bohemian</p>
        <BohemianDivider />
      </Reveal>

      <Reveal delay={150}>
        <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
          <img
            src="/images/dresscode-1.jpg"
            alt="Contoh dresscode bohemian 1"
            className="w-full h-48 object-cover rounded-xl border-2 border-white shadow-sm"
          />
          <img
            src="/images/dresscode-2.jpg"
            alt="Contoh dresscode bohemian 2"
            className="w-full h-48 object-cover rounded-xl border-2 border-white shadow-sm"
          />
        </div>
      </Reveal>

      <Reveal delay={300}>
        <p className="font-body text-sm text-brown/70 mt-6 max-w-xs mx-auto">
          Warna earthy seperti terracotta, sage, dan cream sangat disarankan.
        </p>
      </Reveal>
    </section>
  );
}