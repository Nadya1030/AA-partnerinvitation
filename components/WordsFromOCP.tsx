import Reveal from './Reveal';
import ArchPhoto from './ArchPhoto';

const messages = [
  {
    name: 'Panitia OCP',
    quote:
      'Dengan penuh syukur, kami dari Organizing Committee Panitia mengucapkan terima kasih atas kepercayaan dan dukungan selama proses persiapan acara ini. Semoga momen kebersamaan ini menjadi kenangan berharga bagi kita semua.',
  },
];

export default function WordsFromOCP() {
  return (
    <section
      id="WordsFromOCP"
      className="py-20 px-8 text-center relative"
      style={{
        backgroundImage: "url('/images/background.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >

      <div className="relative z-10">
        <Reveal>
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Foto kiri, pakai bingkai floral */}
            <div className="w-full md:w-2/5 shrink-0">
              <ArchPhoto src="/images/DSC01746.JPG" alt="Panitia OCP" />
            </div>

            {/* Teks kanan, tanpa container/background */}
            <div className="w-full md:w-3/5 text-left">
              <p className="font-script text-6xl text-terracotta mb-2">Say Hi to OCP of AA 13th</p>
              <div className="w-16 h-[2px] bg-terracotta mb-6" />

              {messages.map((m) => (
                <div key={m.name}>
                  <p className="font-body text-sm leading-relaxed text-terracotta/90">
                    {m.quote}
                  </p>
                  <p className="font-serif text-sm text-terracotta mt-4">— {m.name}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}