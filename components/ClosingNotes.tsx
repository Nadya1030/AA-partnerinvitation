import Reveal from './Reveal';
import BohemianDivider from './BohemianDivider';

export default function ClosingNote() {
  return (
    <section className="py-28 px-6 bg-sand text-center relative overflow-hidden flex flex-col items-center justify-center">
      <div className="max-w-2xl mx-auto space-y-6">
        
        <Reveal>
          <p className="font-script text-6xl md:text-7xl text-terracotta">
            Thank you for being part of the journey.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <BohemianDivider />
        </Reveal>

        <Reveal delay={150}>
          <p className="font-serif text-lg md:text-2xl text-brown/90 italic leading-relaxed px-4">
            Here’s to the journey we’ve shared, and to all that is yet to come.
          </p>
        </Reveal>
      </div>
    </section>
  );
}