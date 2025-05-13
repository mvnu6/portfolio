// src/app/skills/page.js
"use client";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SkillSection from '../../components/skillSection';

export default function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const skillCategories = [
    {
      title: "Développement Front-End",
      skills: [
        { icon: "fa-brands fa-html5 fa-4x", margin: true },
        { icon: "fa-brands fa-css3-alt fa-4x" }
      ]
    },
    {
      title: "Langages de programmation",
      skills: [
        { icon: "fa-brands fa-php fa-4x", margin: true },
        { icon: "fa-brands fa-js fa-4x", margin: true },
        { icon: "fa-brands fa-python fa-4x", margin: true },
        { icon: "fa-brands fa-java fa-4x", margin: true },
        { image: "assets/img/C_Programming_Language.svg.png", width: 70 }
      ]
    },
    {
      title: "Base de données",
      skills: [
        { image: "assets/img/mysql.png", width: 80 },
        { image: "assets/img/Postgresql_elephant.svg.png", width: 80 },
        { image: "assets/img/mongodb.png", width: 180 }
      ]
    },
    {
      title: "Frameworks & Librairies",
      skills: [
        { icon: "fa-brands fa-symfony fa-4x", margin: true },
        { icon: "fa-brands fa-vuejs fa-4x", margin: true },
        { icon: "fa-brands fa-node-js fa-4x", margin: true },
        { image: "assets/img/alpine.png", width: 80 }
      ]
    },
    {
      title: "Développement Mobile",
      skills: [
        { icon: "fa-brands fa-java fa-4x", margin: true },
        { image: "assets/img/kotlin.png", width: 200 }
      ]
    }
  ];

  return (
    <section className="resume-section" id="connaissances">
      <div className="resume-section-content">
        <h2 className="mb-5" data-aos="fade-right">Mes connaissances</h2>
        
        {skillCategories.map((category, index) => (
          <SkillSection 
            key={index}
            title={category.title}
            skills={category.skills}
            delay={index * 100}
          />
        ))}
      </div>
    </section>
  );
}