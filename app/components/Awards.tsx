// app/components/Awards.tsx
import Image from "next/image";

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

export default function Awards() {
    return (
        <section className="section-band section-band--awards py-10 sm:py-12 lg:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                <h2 className="section-title text-center mb-8 sm:mb-10">Awards We've Won</h2>
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
    );
}
