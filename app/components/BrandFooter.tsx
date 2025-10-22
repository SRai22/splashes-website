// components/BrandFooter.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaTwitter, FaYelp, FaFacebook, FaYoutube } from 'react-icons/fa';

const regions = [
  { name: 'Orange County', telHref: 'tel:+19494500777', telText: '(949) 450-0777' },
  { name: 'San Diego County', telHref: 'tel:+17606039400', telText: '(760) 603-9400' },
  { name: 'Los Angeles County', telHref: 'tel:+16268361200', telText: '(626) 836-1200' },
  { name: 'Northern California', telHref: 'tel:+14082791700', telText: '(408) 279-1700' },
  { name: 'Denver', telHref: 'tel:+17203447700', telText: '(720) 344-7700' },
];

export default function BrandFooter() {
  return (
    <section aria-labelledby="brandFooterHeading" className="bg-[url('/Images/footer-bg.jpeg')] bg-cover bg-center">
      <div className="backdrop-brightness-100">
        <div className="px-4 md:px-6 lg:px-8 py-10 md:py-12 lg:py-16">
          <h2 id="brandFooterHeading" className="sr-only">Splashes footer</h2>

          {/* Logo */}
          <div className="flex items-center justify-center">
            <Image
              src="/Graphics/footer-logo-wave-small.png"
              alt="Splashes"
              width={220}
              height={80}
              priority={false}
            />
          </div>

          {/* Utility links */}
          <nav aria-label="Footer" className="mt-6">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-slate-700 font-semibold">
              <li>
                <Link href="/about" className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded">
                  About
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/signin" className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded">
                  Register / Sign In
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded">
                  Careers
                </Link>
              </li>
            </ul>
          </nav>

          {/* Social icons */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
               className="rounded-full p-2 ring-1 ring-slate-200 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 text-slate-700 hover:text-brand-600 transition">
              <FaLinkedin size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
               className="rounded-full p-2 ring-1 ring-slate-200 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 text-slate-700 hover:text-brand-600 transition">
              <FaInstagram size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"
               className="rounded-full p-2 ring-1 ring-slate-200 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 text-slate-700 hover:text-brand-600 transition">
              <FaTwitter size={24} />
            </a>
            <a href="https://yelp.com" target="_blank" rel="noopener noreferrer" aria-label="Yelp"
               className="rounded-full p-2 ring-1 ring-slate-200 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 text-slate-700 hover:text-brand-600 transition">
              <FaYelp size={24} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
               className="rounded-full p-2 ring-1 ring-slate-200 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 text-slate-700 hover:text-brand-600 transition">
              <FaFacebook size={24} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
               className="rounded-full p-2 ring-1 ring-slate-200 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 text-slate-700 hover:text-brand-600 transition">
              <FaYoutube size={24} />
            </a>
          </div>

          {/* Regions */}
          <div className="mt-10">
            <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
              {regions.map((r) => (
                <div key={r.name}>
                  <div className="font-semibold text-slate-800">{r.name}</div>
                  <a href={r.telHref} className="text-slate-700 underline underline-offset-4">{r.telText}</a>
                </div>
              ))}
            </div>
          </div>

          {/* Sponsors */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            {['sponsors/footer-usssa-logo-2.png','sponsors/footer-ndpa-logo.png','sponsors/footer-member-issa-logo.png','sponsors/footer-stop-drowning-now-logo.png'].map((src) => (
              <Image key={src} src={`/Images/${src}`} alt={src.split('/').pop()!.replace('.png','') } width={120} height={60} loading="lazy" />
            ))}
          </div>

          {/* Legal */}
          <div className="mt-8 border-t border-slate-200 pt-4 text-center text-sm text-slate-600">
            © {new Date().getFullYear()} Splashes. All Rights Reserved
          </div>
        </div>
      </div>
    </section>
  );
}
