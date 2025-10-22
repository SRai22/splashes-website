// app/contact/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import type { SVGProps } from 'react';
import {
  IconQuestion,
  IconParty,
  IconConcern,
  IconPool,
  IconChecklist,
  IconRibbon,
  IconClipboard,
  IconBaby
} from '@/app/components/ContactIcons';

import BrandFooter from '@/app/components/BrandFooter';

type ContactTile = {
  id: string;
  title: string;
  href: string; // route or mailto
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
};

const tiles: ContactTile[] = [
  { id: 'new-customer', title: 'New Customer Inquiries', href: '/contact/new-customer', Icon: IconQuestion },
  { id: 'party-coordinator', title: 'Contact Party Coordinator', href: '/contact/party-coordinator', Icon: IconParty },
  { id: 'concern', title: 'Voice a Concern', href: '/contact/concern', Icon: IconConcern },
  { id: 'pool-rental', title: 'Pool Rental', href: '/contact/pool-rental', Icon: IconPool },
  { id: 'suggestion', title: 'Give a Suggestion', href: '/contact/suggestion', Icon: IconChecklist },
  { id: 'compliment', title: 'Share a Compliment', href: '/contact/compliment', Icon: IconRibbon },
  { id: 'safety', title: 'Water Safety Presentation Inquiry', href: '/contact/water-safety', Icon: IconClipboard },
  { id: 'parent-me', title: 'Parent & Me Lesson Interest', href: '/contact/parent-me', Icon: IconBaby },
];

export const metadata = {
  title: 'Contact Us | Splashes',
  description: 'Send us an email using one of the buttons below and a representative will get back to you as soon as possible.'
};

export default function ContactPage() {
  return (
    <main id="main" className="isolate">
      {/* Hero */}
      <section className="relative w-full">
        <div className="relative h-[220px] md:h-[320px] lg:h-[420px]">
          <Image
            src="/Images/contact-hero.jpeg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-shadow-lg font-display font-bold text-3xl md:text-5xl lg:text-6xl">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Intro copy */}
      <section aria-labelledby="contactHelpHeading" className="px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[840px] text-center py-8 md:py-10">
          <h2 id="contactHelpHeading" className="sr-only">Get help</h2>
          <p className="text-slate-600 leading-relaxed">
            We’d love to help. Send us an email using one of the buttons below and a representative will get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Icon tiles */}
      <section className="px-4 md:px-6 lg:px-8 pb-12 md:pb-16 lg:pb-20">
        <ul
          role="list"
          className="mx-auto max-w-[1100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6 md:gap-x-10 lg:gap-x-12"
        >
          {tiles.map((t) => (
            <li key={t.id}>
              <Link
                href={t.href}
                aria-label={t.title}
                className="group block rounded-2xl border border-slate-200 bg-white p-5 md:p-6 lg:p-8 shadow-card transition
                           hover:shadow-cardHover hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2
                           focus-visible:ring-brand-500"
              >
                <div className="mx-auto flex h-24 w-24 items-center justify-center md:h-28 md:w-28 lg:h-32 lg:w-32">
                  <t.Icon
                    className="h-full w-full stroke-slate-800 transition group-hover:stroke-brand-600"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-4 text-center">
                  <span className="text-[15px] md:text-base font-semibold text-slate-800 underline-offset-4 group-hover:underline">
                    {t.title}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Footer band */}
      <BrandFooter />
    </main>
  );
}

