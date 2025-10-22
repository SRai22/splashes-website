import Image from "next/image";
import React from "react";

type Props = {
  imageSrc: string;
  alt: string;
  href: string;
  fullBleed?: boolean;
};

export default function CtaBanner({ imageSrc, alt, href, fullBleed }: Props) {
  const Wrapper: React.ElementType = fullBleed ? "div" : "div";
  return (
    <Wrapper className={fullBleed ? "w-full" : "mx-auto max-w-5xl"}>
      <a href={href} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500">
        <Image
          src={imageSrc}
          alt={alt}
          width={1600}
          height={320}
          className={`h-auto w-full ${fullBleed ? "" : "rounded-md"}`}
          sizes={fullBleed ? "100vw" : "(max-width: 1200px) 90vw, 1100px"}
          priority={false}
        />
      </a>
    </Wrapper>
  );
}
