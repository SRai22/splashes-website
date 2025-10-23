// app/adultprograms/page.tsx
// author - Md Rakeen Murtaza, m.murtaza.4942@westcliff.edu
import React from "react";
import BrandFooter from "@/app/components/BrandFooter";
import "./adultprograms.css";

export const metadata = {
    title: "Adult Programs | Splashes",
    description: "Adult Lap Swimming – schedules, details, and locations.",
};

export default function Page() {
    return (
        <main className="adults-page"> {/* route scope & light palette */}
            {/* HERO */}
            <section
                className="adults-hero"
                style={{ backgroundImage: "url('/Images/lap-swimming.jpeg')" }}
            >
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white text-shadow-lg font-display font-bold text-3xl md:text-5xl lg:text-6xl text-center">
                        Adult Lap Swimming
                    </h1>
                </div>
            </section>

            {/* TITLE BAND */}
            <section className="title-band">
                <h2 className="section-title">
                    Get Fit &amp; Stay Fit With Daily Lap Swimming
                </h2>
            </section>

            {/* BODY CONTENT */}
            <section className="content-wrap">
                <p className="body-copy">
                    Adult lap swimming provides a full-body workout that targets the core, arms, back, and legs. It also
                    provides swimmers with access to various training methods including strength training, aerobic training,
                    and low-impact training.
                </p>

                <p className="body-copy">
                    If you are looking to improve your workout routine, be sure to stop by a Splashes location to learn more
                    about adult lap swimming. Swimmers will find that there are times throughout the week that will work with
                    your schedule.
                </p>

                <p className="body-copy">
                    Each lane will have up to two lap swimmers. Children under the age of 14 must be accompanied by their
                    parent and able to swim 200 yards of the pool on their own. Lanes are limited during shared pool usage.
                    No private swim instruction or coaching is permitted. No Lifeguard on duty. <strong>**NOTE: If you would
                        like to reserve the entire lane for yourself, and not have to share with another swimmer, you may reserve
                        both A and B slots for your selected lane/time.**</strong>
                </p>

                <h3 className="locations-heading">Find Lap Swimming Near You</h3>
                <ul className="locations-list">
                    <li><a href="#" className="link-inline">Irvine</a></li>
                    <li><a href="#" className="link-inline">Huntington Beach</a></li>
                    <li><a href="#" className="link-inline">Carlsbad</a></li>
                    <li><a href="#" className="link-inline">Pasadena</a></li>
                    <li><a href="#" className="link-inline">San Jose</a></li>
                    <li><a href="#" className="link-inline">Denver/Highlands Ranch</a></li>
                </ul>
            </section>
            {/* Footer band */}
            <BrandFooter />
        </main>
    );
}
