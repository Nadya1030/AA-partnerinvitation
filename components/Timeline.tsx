const rundown = [
  { time: '15:30', activity: 'Registrasi Tamu' },
  { time: '16:00', activity: 'Pembukaan & Sambutan' },
  { time: '16:20', activity: 'Penampilan & Apresiasi' },
  { time: '16:50', activity: 'Sesi Foto Bersama' },
  { time: '17:25', activity: 'Penutupan' },
];

export default function Timeline() {
  return (
    <section
      id="rundown"
      className="snap-section flex flex-col items-center justify-center bg-gray-50 px-6"
    >
      <h2 className="text-2xl font-bold mb-8 text-center">Rundown Acara</h2>
      <div className="max-w-sm w-full space-y-4">
        {rundown.map((item) => (
          <div key={item.time} className="flex gap-4 items-start">
            <span className="font-semibold w-14 shrink-0">{item.time}</span>
            <span className="text-gray-700">{item.activity}</span>
          </div>
        ))}
      </div>
    </section>
  );
}