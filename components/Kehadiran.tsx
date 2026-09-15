import Button from './Button';
import Reveal from './Reveal';
import BohemianDivider from './BohemianDivider';

export default function Kehadiran() {
  return (
    <section id="kehadiran" className="py-20 px-8 text-center bg-sandDark">
      <Reveal>
        <p className="font-script text-4xl text-terracotta">Kindly Confirm</p>
        <BohemianDivider />
      </Reveal>

      <Reveal delay={150}>
        <p className="font-body text-sm text-brown/80 mb-8 max-w-xs mx-auto">
          Kehadiran Anda akan menjadi kebahagiaan tersendiri bagi kami.
        </p>
        <Button href="https://forms.gle/GANTI_DENGAN_LINK_GFORM_KAMU" target="_blank">
          RSVP
        </Button>
      </Reveal>
    </section>
  );
}