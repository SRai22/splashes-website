import Image from "next/image";
import styles from "./TeachingWave.module.css";

type Props = {
  heading: string;
  copy: string;
  bullets: { text: string; href: string }[];
  additionalText: string;
  callToAction: string;
  button: { label: string; href: string };
  decoImageSrc: string;
};

export default function Teaching({ heading, copy, bullets, additionalText, callToAction, button, decoImageSrc }: Props) {
  return (
    <section className={styles.teachingSection}>
      {/* Background Image */}
      <Image
        src={decoImageSrc}
        alt=""
        fill
        className={styles.backgroundImage}
        sizes="100vw"
        priority={false}
      />

      {/* Content Overlay - White Box on Left */}
      <div className={styles.contentContainer}>
        <div className={styles.contentBox}>
          {/* Heading - Bodoni Moda Bold */}
          <h2 className={styles.heading}>{heading}</h2>

          {/* Body Text - Open Sans Regular */}
          <p className={styles.bodyText}>{copy}</p>

          {/* Splashes Offers - Bold Subheading */}
          <div className="mt-5">
            <p className={styles.subheading}>Splashes Offers:</p>
            <ul className="mt-2 space-y-2">
              {bullets.map((b) => (
                <li key={b.text} className={styles.listItem}>
                  <a href={b.href} className={styles.link}>
                    {b.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Text */}
          <p className={styles.additionalText}>{additionalText}</p>

          {/* Call to Action */}
          <p className={styles.callToAction}>{callToAction}</p>

          {/* Register Button */}
          <div className="mt-4">
            <a
              href={button.href}
              className={styles.registerButton}
            >
              {button.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
