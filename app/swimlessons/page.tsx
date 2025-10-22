// app/swimlessons/page.tsx  
// author - Md Rakeen Murtaza, m.murtaza.4942@westcliff.edu
import React from "react";
import "./swimlessons.css";
import Image from "next/image";
import BrandFooter from "@/app/components/BrandFooter";

export const metadata = {
    title: "Swimming Lessons | Splashes",
    description:
        "Private, Semi-Private, Parent & Me, Stroke Clinic, and Adult Swim Lessons at Splashes.",
};

export default function Page() {
    return (
        <main className="lessons-page">
            {/* HERO */}
            <section
                className="lessons-hero"
                style={{
                    backgroundImage: "url('/Images/which-lesson-is-best.jpeg')",
                }}
            >
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white text-shadow-lg font-display font-bold text-3xl md:text-5xl lg:text-6xl text-center">Which Lesson is Best?</h1>
                </div>
            </section>

            {/* SECTION TITLE */}
            <section className="title-band">
                <h2 className="section-title">Our Lesson Types</h2>
            </section>

            {/* CONTENT */}
            <section className="content-wrap">
                {/* Private Swim Lessons */}
                <h3 className="lesson-heading">Private Swim Lessons</h3>
                <p className="body-copy">
                    Our <a href="#" className="link-inline">private swim lessons</a> provide one-on-one instruction for students
                    ages three months through adult. Private swim lessons are the best option for accelerated learning. Each
                    lesson will allow our instructors to build on the momentum and skills taught in the previous lesson with
                    minimal downtime. From the basics of putting your face into the water to refining your stroke technique,
                    private lessons will offer the highest rate of progress.
                </p>
                <p className="body-copy link-row">
                    <a href="#" className="link-inline">Learn more here!</a>
                </p>

                {/* Semi-Private Swim Lessons */}
                <h3 className="lesson-heading">Semi-Private Swim Lessons</h3>
                <p className="body-copy">
                    At Splashes, our <a href="#" className="link-inline">semi-private swim lessons</a> offer students ages 2.5 to 13
                    the opportunity to interact with another student of a similar age and ability while still receiving personal
                    attention. Whether you would like us to pair your child with another student of similar age and ability or
                    would like to take lessons with a friend or sibling, our semi-private lessons are a cost effective option.
                    Students also have the opportunity to observe one another in the lesson.
                </p>
                <p className="body-copy link-row">
                    <a href="#" className="link-inline">Learn more here!</a>
                </p>

                {/* Parent & Me Lessons */}
                <h3 className="lesson-heading">Parent &amp; Me Lessons</h3>
                <p className="body-copy">
                    Our <a href="#" className="link-inline">Parent and Me swimming lessons</a> (also known as “Mommy and Me” or
                    “Daddy and Me” classes) gives parents the opportunity to be hands-on with their little one while our
                    instructors facilitate the learning process between you and your child. These lessons provide a fun and
                    relaxed environment for you and your child in the water. Children ages 3 months through 3 years of age can
                    participate. However, we encourage children ages 2.5 and older to participate in private or semi-private swim
                    lessons.
                </p>
                <p className="body-copy link-row">
                    <a href="#" className="link-inline">Learn more here!</a>
                </p>

                {/* Stroke Clinic */}
                <h3 className="lesson-heading">Stroke Clinic</h3>
                <p className="body-copy">
                    Splashes <a href="#" className="link-inline">Stroke Clinics</a> give students the opportunity to advance their
                    swimming techniques while in a group setting. Our Stroke Clinic classes place emphasis on proper technique
                    over speed and prepare students for swim team. Swimmers ages 5 and older who are level 8 or higher can benefit
                    from participating in these 40 minute classes. A strong technical foundation will ensure that students’
                    progress much faster when the time comes for them to work on speed. Our stroke clinics are exciting and fast
                    paced, where each student will receive a great workout.
                </p>
                <p className="body-copy link-row">
                    <a href="#" className="link-inline">Learn more here!</a>
                </p>

                {/* Adult Swim Lessons */}
                <h3 className="lesson-heading">Adult Swim Lessons</h3>
                <p className="body-copy">
                    It is never too late to learn how to swim! Whether you are looking to learn the basics or improve your
                    technique to use swimming as a form of exercise, our trained instructors will tailor each lesson to fit your
                    individual needs. At Splashes, our adult lessons are geared for swimmers ages 13 and older. From beginners to
                    advanced, our <a href="#" className="link-inline">adult swimming lessons</a> are a great option for those looking
                    to conquer their fear of the water or who are looking to become stronger swimmers.
                </p>
                <p className="body-copy link-row">
                    <a href="#" className="link-inline">Learn more here!</a>
                </p>
            </section>
            {/* Footer band */}
            <BrandFooter />
        </main>
    );
}
