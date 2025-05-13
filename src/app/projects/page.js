// src/app/projects/page.js
"use client";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectCard from '../../components/projectCard';

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const projects = [
    {
      title: "🛠️ Garage Auto – Site Vitrine avec Symfony",
      description: "Garage Auto est un site vitrine moderne développé avec Symfony pour présenter les services d'un garage automobile. Le site offre une section dédiée aux services tels que la réparation, la mécanique, l'entretien, et la vente de voitures d'occasion. Une autre section permet aux visiteurs de consulter les voitures d'occasion disponibles, avec des informations détaillées (photos, prix, année, kilométrage). Les horaires d'ouverture sont également clairement spécifiés. Toutes ces sections sont entièrement modifiables via une page d'administration, permettant une gestion facile et dynamique du contenu.",
      image: "assets/img/garage.png",
      alt: "Garage",
      link: "https://github.com/Kaiizer26/Garage-V.Parrot"
    },
    {
      title: "🎮 Extraplay – Plateforme Web de Jeux Vidéo",
      description: "Extraplay est une application web dédiée aux passionnés de jeux vidéo, développée en PHP natif et PostgreSQL. Elle permet aux utilisateurs de consulter, jouer, et de laisser des avis et commentaires sur les jeux. Avec un CRUD complet pour une gestion dynamique du contenu, Extraplay propose une interface moderne construite avec Bootstrap et Alpine.js. La gestion des données est assurée par PostgreSQL, et l'application est facilement déployable grâce à Docker et Docker Compose, offrant ainsi une solution flexible et performante pour les développeurs et les utilisateurs.",
      image: "assets/img/extraplay.png",
      alt: "ExtraPlay",
      link: "https://github.com/mvnu6/ExtraPlay"
    },
    {
      title: "📊 LP-TRACKER – Suivi des Performances de Jeu avec API Express",
      description: "LP-TRACKER est une application web de suivi des performances de jeu, permettant aux utilisateurs de suivre leur compte ou celui de leurs amis. Grâce à une API Express, les utilisateurs peuvent consulter leurs parties, ranks, statistiques, et historique de matchs. L'application offre également des informations détaillées sur les performances par champion, permettant ainsi aux joueurs de mieux comprendre leurs points forts et leurs axes d'amélioration. Conçu pour aider à progresser dans le jeu, LP-TRACKER offre une expérience complète d'analyse et de suivi.",
      image: "assets/img/LP-TRACKER.png",
      alt: "LP-Tracker",
      link: "https://github.com/Kaiizer26/LP-Tracker.git"
    },
    {
      title: "📌 Boardify – Gestion collaborative de tâches (Clone de Trello)",
      description: "Boardify est une application web de gestion de projets, inspirée de Trello, développée avec Vue.js et Firebase dans le cadre du projet fil rouge de 2ᵉ année à EFREI Paris. Elle permet aux utilisateurs de créer des tableaux, d'organiser leurs tâches sous forme de cartes et de listes, et de collaborer efficacement grâce à des fonctionnalités comme le glisser-déposer, l'authentification, et la recherche rapide. Pensée pour la productivité et l'expérience utilisateur, Boardify allie performance, simplicité et collaboration en temps réel.",
      image: "assets/img/Boardify.png",
      alt: "Petit Reve",
      link: "https://github.com/mvnu6/Petit_Reve.git"
    }
  ];

  return (
    <section className="resume-section" id="projets">
      <div className="resume-section-content">
        <h2 className="mb-5" data-aos="fade-right">Mes projets</h2>
        
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            alt={project.alt}
            link={project.link}
            delay={index * 100}
          />
        ))}
      </div>
    </section>
  );
}