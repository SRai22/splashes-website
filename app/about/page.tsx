// app/about/page.tsx
import Image from "next/image";
import "./about.css";
import BrandFooter from "@/app/components/BrandFooter";
import Awards from "@/app/components/Awards";

export const metadata = { title: "About | Splashes" };

export default function AboutPage() {
    return (
        <main className="about-page">
            {/* Hero */}
            <section className="about-hero relative">
                <Image
                    src="/Images/about-us-hero.jpeg"
                    alt="Indoor pool with lanes"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white text-shadow-lg font-display font-bold text-3xl md:text-5xl lg:text-6xl text-center">About Splashes</h1>
                </div>
            </section>

            {/* Our Philosophy */}
            <section className="section-band section-band--sunrise">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
                    <h2 className="section-title">Our Philosophy</h2>

                    <p className="body-copy">
                        Our mission is to educate and motivate individuals to be safer and learn proper swimming technique.
                    </p>
                    <p className="body-copy">
                        We have chosen to share our love of swimming with children and believe there is a swimmer in every child.
                        We pride ourselves on teaching the necessary skills needed to become a comfortable, proficient swimmer
                        right from the beginning.
                    </p>
                </div>
            </section>

            {/* We Do A Pretty Good Job */}
            <section className="section-band section-band--trophy">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
                    <h2 className="section-title">We Do A Pretty Good Job</h2>
                    <p className="body-copy">
                        Experience excellence through Splashes’ award-winning programs where safety, fast progress, and a fun
                        environment come first. Join the swim school that loves what they do and it shows.
                    </p>
                    <a href="#" className="inline-block link-inline mt-3">
                        Hear What Families Are Saying About Us
                    </a>
                </div>
            </section>

            {/* Awards We've Won */}
            <Awards />
            {/* Footer band */}
            <BrandFooter />
        </main>
    );
}
