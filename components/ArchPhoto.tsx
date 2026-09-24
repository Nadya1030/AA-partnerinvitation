export default function ArchPhoto({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mx-auto w-full max-w-[280px]">
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-terracotta text-xl z-10">
        ✦
      </div>
      <img
        src={src}
        alt={alt}
        className="w-full h-[400px] object-cover border-2 border-terracotta/60"
        style={{
          borderRadius: '140px 140px 0 0',
        }}
      />
    </div>
  );
}