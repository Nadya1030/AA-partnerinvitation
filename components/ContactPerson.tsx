import Reveal from './Reveal';

type Contact = { name: string; role: string; email: string; whatsapp: string; photo: string };

const contacts: Contact[] = [
  { name: 'Nadya Aulia', role: 'Liaison Officer', email: 'nadyaauliatiaranii@gmail.com', whatsapp: '6285811363347', photo: '/images/Nadya.JPG' },
  { name: 'Halifah Novia Rahmah', role: 'Liaison Officer', email: 'halifanoviaaa@gmail.com', whatsapp: '08291291', photo: '/images/rizal.png' },
];

export default function ReachUs() {
  return (
    <section id="kontak" className="py-16 px-8 text-center bg-sandDark">
      <Reveal>
        <p className="font-script text-3xl text-terracotta mb-6">Reach Us for More Info</p>
      </Reveal>

      <div className="space-y-3 max-w-xs mx-auto">
        {contacts.map((c, i) => (
          <Reveal key={c.whatsapp} delay={150 * (i + 1)}>
            <div className="flex items-center gap-3 bg-sand/60 rounded-xl px-3 py-2 text-left">
              <img src={c.photo} alt={c.name} className="w-10 h-10 rounded-full object-cover shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-serif text-sm text-brown truncate">{c.name}</p>
                <p className="font-body text-[11px] text-brown/60 truncate">{c.role} - {c.email}</p>
              </div>
              
                href={`https://wa.me/${c.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] border border-terracotta text-terracotta px-2.5 py-1 rounded-full hover:bg-terracotta hover:text-sand transition shrink-0"
                WA
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}