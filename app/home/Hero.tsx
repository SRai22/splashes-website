"use client";
import Image from "next/image";
import React from "react";
type Props = {
  title: string;
  ctas: { label: string; href: string }[];
  image: string;
};

export default function Hero({ title, ctas, image }: Props) {
  return (
    <section className="relative min-h-[52vh] sm:min-h-[60vh] lg:min-h-[68vh]">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[50%_40%]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/40" aria-hidden />
      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center justify-center px-4 text-center">
        <div>
          <h1 className="whitespace-pre-line font-serif text-white [text-shadow:0_2px_4px_rgba(0,0,0,.45)] text-2xl sm:text-3xl lg:text-5xl font-semibold">
            {title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            {ctas.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-slate-800 shadow hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
