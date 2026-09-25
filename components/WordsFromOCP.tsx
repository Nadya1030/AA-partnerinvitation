import Reveal from './Reveal';
import ArchPhoto from './ArchPhoto';

const messages = [
  {
    name: 'Organizing Committee President of AA 13th',
    quote:
      'Dengan penuh syukur, kami dari Organizing Committee Panitia mengucapkan terima kasih atas kepercayaan dan dukungan selama proses persiapan acara ini. Semoga momen kebersamaan ini menjadi kenangan berharga bagi kita semua.',
  },
];

export default function WordsFromOCP() {
  return (
    // Wrapper luar menggunakan background putih
    <div className="bg-white py-12 px-4">
      <section
        id="WordsFromOCP"
        className="relative overflow-hidden bg-cream py-16 px-6 md:px-12 rounded-3xl shadow-2xl border border-brown/10 max-w-6xl mx-auto text-center"
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
                <ArchPhoto src="/images/DSC01746.JPG" alt="Azda" />
              </div>

              {/* Teks kanan, tanpa container/background internal */}
              <div className="w-full md:w-4/5 text-left">
                <p className="font-script text-5xl text-terracotta mb-4">Say Hi to Azda!</p>
                <div className="w-16 h-[2px] bg-green mb-6" />

                {messages.map((m) => (
                  <div key={m.name}>
                    <p className="font-body text-sm leading-relaxed text-terracotta/90">
                      {m.quote}
                    </p>
                    <p className="font-inter text-sm text-terracotta mt-4">— {m.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}