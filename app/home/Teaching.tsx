import Image from "next/image";
import styles from "./TeachingWave.module.css";

type Props = {
  heading: string;
  copy: string;
  bullets: { text: string; href: string }[];
  button: { label: string; href: string };
  decoImageSrc: string;
};

export default function Teaching({ heading, copy, bullets, button, decoImageSrc }: Props) {
  return (
    <section className="relative mx-auto max-w-[1100px] px-4 py-12 sm:py-16 xl:py-20">
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-12">
        <div className="xl:col-span-6">
          <h2 className="font-serif text-2xl sm:text-3xl text-slate-900">{heading}</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">{copy}</p>

          <div className="mt-5">
            <p className="font-semibold text-slate-900">Splashes Offers:</p>
            <ul className="mt-2 space-y-2">
              {bullets.map((b) => (
                <li key={b.text} className="list-disc pl-5 marker:text-sky-600">
                  <a href={b.href} className="text-sky-700 hover:underline">
                    {b.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <a
              href={button.href}
              className="inline-block rounded-full bg-sky-700 px-5 py-2 text-white shadow hover:bg-sky-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            >
              {button.label}
            </a>
          </div>
        </div>

        {/* spacer column to make room for decorative wave @ xl */}
        <div className="relative xl:col-span-6">
          {/* purely decorative wave-masked image */}
          <div className={`${styles.waveWrap}`}>
            <Image
              src={decoImageSrc}
              alt=""
              width={900}
              height={900}
              className={`${styles.waveMask} h-auto w-full object-cover`}
              sizes="(min-width: 1200px) 38vw, 0px"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
