import Hero from "@/app/home/Hero";
import CtaBanner from "@/app/home/CtaBanner";
import Teaching from "@/app/home/Teaching";
import LocationsBand from "@/app/home/LocationsBand";
import Awards from "@/app/components/Awards";
import BrandFooter from "@/app/components/BrandFooter";

import { HERO, REGISTER_BANNER, HIRING_BANNER, TEACHING, LOCATIONS } from "@/app/home/contents";

export default function HomePage() {
  return (
    <main>
      <Hero {...HERO} />

      {/* Banners stack */}
      <section className="px-0 py-6 sm:py-8">
        <CtaBanner {...REGISTER_BANNER} />
        <div className="mx-auto mt-4 max-w-[1100px] px-4">
          <CtaBanner {...HIRING_BANNER} />
        </div>
      </section>

      <Teaching {...TEACHING} />

      <LocationsBand {...LOCATIONS} />

      <Awards /> 
      <BrandFooter />
    </main>
  );
}
