import Image from "next/image";

type Props = {
  bg: string;
  map: string;
  heading: string;
  subheading: string;
  button: { label: string; href: string };
};

export default function LocationsBand({ bg, map, heading, subheading, button }: Props) {
  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src={bg}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority={false}
      />
      <div className="absolute inset-0 bg-black/35" aria-hidden />

      <div className="relative z-10 mx-auto flex max-w-[1200px] items-center px-4 py-14 sm:py-16 xl:py-24">
        <div className="max-w-md rounded-lg bg-slate-900/55 p-6 text-white backdrop-blur">
          <h2 className="font-serif text-2xl sm:text-3xl">{heading}</h2>
          <p className="mt-2 font-semibold">{subheading}</p>
          <a
            href={button.href}
            className="mt-5 inline-block rounded-full bg-sky-600 px-5 py-2 text-white shadow hover:bg-sky-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            {button.label}
          </a>
        </div>

        <div className="relative ml-auto hidden w-[42%] md:block">
          <Image
            src={map}
            alt="Map of locations"
            width={800}
            height={600}
            className="pointer-events-none select-none"
            sizes="(min-width: 768px) 42vw, 0px"
          />
        </div>
      </div>
    </section>
  );
}
