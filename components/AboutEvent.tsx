import { Calendar, Clock, MapPin } from 'lucide-react';
import Button from './Button';
import BohemianDivider from './BohemianDivider';
import Reveal from './Reveal';

export default function EventDetail() {
  return (
    <section id="acara" className="py-20 px-8 text-center bg-sand">
      <Reveal>
        <p className="font-script text-4xl text-terracotta">Event Details</p>
        <BohemianDivider />
      </Reveal>

      <div className="space-y-8 max-w-sm mx-auto">
        <Reveal delay={100}>
          <div className="flex items-start gap-3 text-left">
            <Calendar className="text-terracotta shrink-0 mt-1" size={22} />
            <div>
              <p className="font-serif text-lg text-brown">Minggu, 25 Oktober 2026</p>
              <p className="font-body text-sm text-brown/70 flex items-center gap-1">
                <Clock size={14} /> 12:30 – 20:25 WIB
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="flex items-start gap-3 text-left">
            <MapPin className="text-terracotta shrink-0 mt-1" size={22} />
            <div>
              <p className="font-serif text-lg text-brown">Hotel Transera Pontianak</p>
              <p className="font-body text-sm text-brown/70 mb-2">Jl. Gajah Mada No. 21</p>
              <Button href="https://maps.app.goo.gl/b9QTFopw3vzDWkCo8" target="_blank">
                View Map
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}