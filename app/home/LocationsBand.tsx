import Image from "next/image";

type Props = {
  bg: string;
  map: string;
  heading: string;
  subheading: string;
  bodyCopy: string;
  button: { label: string; href: string };
};

export default function LocationsBand({ bg, map, heading, subheading, bodyCopy, button }: Props) {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background pool photo (full-bleed) */}
      <Image
        src={bg}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority={false}
      />

      {/* Dark scrim overlay */}
      <div className="absolute inset-0 bg-black/45 z-0" aria-hidden />

      {/* Right decorative map - occupies full section height, hidden on mobile */}
      <div className="absolute inset-y-0 right-0 hidden w-[42%] xl:w-[45%] md:block z-[5]">
        <div className="relative w-full h-full">
          <Image
            src={map}
            alt="Map of locations"
            fill
            sizes="(min-width: 1200px) 45vw, (min-width: 768px) 42vw, 0px"
            className="object-contain object-right pointer-events-none select-none"
          />
        </div>
      </div>

      {/* Content container */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-4 py-14 md:py-16 xl:py-24">
        {/* Left content stack */}
        <div className="relative max-w-md">
          {/* H1 - Bodoni Moda, multi-line */}
          <h1 className="font-serif font-semibold text-white text-4xl md:text-5xl xl:text-6xl leading-tight whitespace-pre-line">
            {heading}
          </h1>

          {/* H3 - Bodoni Moda, subtitle */}
          <h3 className="font-serif text-white text-2xl md:text-3xl mt-4 whitespace-pre-line">
            {subheading}
          </h3>

          {/* Body copy - Open Sans */}
          <p className="text-white/90 mt-5 max-w-[34ch] leading-relaxed">
            {bodyCopy}
          </p>

          {/* Primary CTA pill button */}
          <a
            href={button.href}
            className="mt-6 inline-block rounded-full bg-sky-600 hover:bg-sky-500 text-white px-6 py-2 font-semibold shadow transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            {button.label}
          </a>
        </div>
      </div>
    </section>
  );
}
