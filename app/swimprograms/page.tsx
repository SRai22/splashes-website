// app/swimprograms/page.tsx 
// author - Md Rakeen Murtaza, m.murtaza.4942@westcliff.edu
import React from "react";
import "./swimprograms.css";
import BrandFooter from "@/app/components/BrandFooter";

export const metadata = {
    title: "Swim Programs | Splashes",
    description:
        "Summer Swim Camps information and locations at Splashes Aquatics.",
};

export default function Page() {
    return (
        <main className="programs-page"> {/* route scoping & light mode */}
            {/* HERO */}
            <section
                className="programs-hero"
                style={{
                    backgroundImage: "url('/Images/summer-swim-camps.jpeg')",
                }}
            >
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white text-shadow-lg font-display font-bold text-3xl md:text-5xl lg:text-6xl text-center">
                        Summer Swim Camps
                    </h1>
                </div>
            </section>

            {/* TITLE BAND */}
            <section className="title-band">
                <h2 className="section-title">Building Swimming Skills All Summer Long</h2>
            </section>

            {/* BODY CONTENT */}
            <section className="content-wrap">
                <p className="body-copy">
                    If your child is between the ages of 5 to 14 and can swim two lengths across a 25 yard pool
                    unassisted, consider enrolling them in our summer swim camps. Splashes summer swim camps are held
                    weekly throughout the summer. Discounts are also available for students who enroll in three sessions
                    or more.
                </p>

                <p className="body-copy">
                    During the day, students will work with our highly qualified instructors on stroke technique,
                    breathing, starts and turns, along with speed work. In the middle of the day, we provide students
                    with a snack and beverage. Swim games will be run during the last 30–45 minutes of each daily
                    session for the children to enjoy our rafts and pool toys.
                </p>

                <h3 className="locations-heading">Find a Splashes swim camp location near you</h3>

                <ul className="locations-list">
                    <li><a href="#" className="link-inline">Irvine</a></li>
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
