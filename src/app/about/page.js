// src/app/about/page.js
"use client";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SocialIcons from '../socialIcons';

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="resume-section" id="about">
      <div className="resume-section-content">
        <h1 className="mb-5" data-aos="fade-right">
          Emmanuel
          <span className="text-primary"> Mbengo Mayemba</span>
        </h1>
        <div className="subheading mb-5" data-aos="fade-right" data-aos-delay="200">
          Paris · 07 71 93 66 88 ·
          <a href="mailto:emmanuel.mbengo-mayemba@efrei.net"> emmanuel.mbengo-mayemba@efrei.net</a>
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
          <p className="lead mb-5">
            Hello ! Je m'appelle Emmanuel Mbengo Mayemba et je suis actuellement en deuxième année de développement web et application à l'EFREI Paris. Passionné par la programmation, je m'intéresse particulièrement à la création de sites web et d'applications. Mon objectif est de continuer à développer mes compétences techniques tout en contribuant à des projets concrets.
          </p>
          <p className="lead mb-5">
            Je suis en ce moment à la recherche d'une alternance à partir de fin septembre 2025 dans le domaine du développement web et application. Je souhaite mettre à profit mes compétences tout en évoluant dans un environnement professionnel stimulant et enrichissant.
          </p>
          <p className="lead mb-5">N'hésitez pas à me contacter !</p>
        </div>

        <div data-aos="fade-up" data-aos-delay="400">
          <SocialIcons />
        </div>
      </div>
    </section>
  );
}