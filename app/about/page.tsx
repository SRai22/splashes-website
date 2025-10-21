// app/about/page.tsx
import Image from "next/image";
import "./about.css";

const awards = [
    "/Images/awards/bay-area-parent-2019.jpeg",
    "/Images/awards/bay-area-parent-gold2020.png",
    "/Images/awards/best-colorado-community-media-2021.jpeg",
    "/Images/awards/best-of-la-kids-winner.jpeg",
    "/Images/awards/best-of-the-best-2018.jpeg",
    "/Images/awards/colorado-parenting-family-fav2019.jpeg",
    "/Images/awards/colorado-parenting-family-fav2020.png",
    "/Images/awards/colorado-parenting-family-fav2021.png",
    "/Images/awards/gold-daisy-award-finalist-2018.jpeg",
    "/Images/awards/mla-swim-lessons-winner-2020-250x250.png",
    "/Images/awards/website-parenting-oc-2019.jpeg"
];

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
                <div className="about-hero__overlay">
                    <h1 className="about-hero__title">About Splashes</h1>
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

            {/* Awards We’ve Won */}
            <section className="section-band section-band--awards py-10 sm:py-12 lg:py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                    <h2 className="section-title text-center mb-8 sm:mb-10">Awards We’ve Won</h2>
                    <ul
                        className="
                        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                        gap-y-4 sm:gap-y-6 lg:gap-y-6
                        gap-x-6 sm:gap-x-8 lg:gap-x-10
                        max-w-[860px] sm:max-w-[900px] lg:max-w-[940px]
                        mx-auto place-items-center
                        ">
                        {awards.map((src, i) => (
                            <li key={i} className="award">
                                <Image
                                    src={src}
                                    alt="Award badge"
                                    width={180}
                                    height={180}
                                    className="award-img"
                                    sizes="(min-width: 1024px) 180px, (min-width: 640px) 150px, 120px"
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    );
}
