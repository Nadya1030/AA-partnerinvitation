import Button from './Button';
import Reveal from './Reveal';
import BohemianDivider from './BohemianDivider';
import { Mail, CalendarCheck } from 'lucide-react';

export default function Kehadiran() {
  return (
    <section id="kehadiran" className="py-20 px-4 md:px-8 text-center bg-sand relative overflow-hidden">
      
      {/* DEKORASI BACKGROUND BOTANIKAL BOHO (TIPIS & ESTETIK) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-terracotta/5 rounded-full blur-3xl pointer-events-none" />

      <Reveal>
        <p className="font-script text-4xl md:text-5xl text-terracotta">
          Kindly Confirm Your Attendance
        </p>
        <BohemianDivider />
      </Reveal>

      {/* CARD ARCH BOHO (BENTUK MELENGKUNG DI ATAS) */}
      <Reveal delay={150}>
        <div className="max-w-lg mx-auto bg-[#FAF7F2] rounded-t-[100px] rounded-b-3xl p-8 md:p-12 border border-terracotta/20 shadow-[0_15px_35px_-5px_rgba(74,59,50,0.12)] relative z-10 mt-6">
          
          {/* BORDER DALAM TIPE EMBOSSED / VINTAGE FRAME */}
          <div className="border border-dashed border-terracotta/30 rounded-t-[85px] rounded-b-2xl p-6 md:p-8">
            
            {/* IKON SURAT BOHO */}
            <div className="w-12 h-12 bg-sand rounded-full flex items-center justify-center mx-auto mb-6 text-terracotta border border-terracotta/20 shadow-xs">
              <Mail size={22} />
            </div>

            {/* TEKS SEMI-FORMAL */}
            <p className="font-serif text-base md:text-lg text-brown leading-relaxed mb-8">
              Your presence would mean so much to us as we gather to celebrate the journey we have shared, the connections we have built, and the impact we have created together.
            </p>

            {/* TOMBOL RSVP DENGAN BOHO GLOW */}
            <div className="inline-block relative group mb-6">
              <div className="absolute -inset-1 bg-terracotta/20 rounded-full blur-sm group-hover:bg-terracotta/40 transition-all duration-300" />
              <div className="relative">
                <Button href="https://forms.gle/GANTI_DENGAN_LINK_GFORM_KAMU" target="_blank">
                  Count Me In!
                </Button>
              </div>
            </div>


          </div>
        </div>
      </Reveal>
    </section>
  );
}