// src/app/resume/page.js
"use client";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Resume() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="resume-section" id="CV">
      <div className="resume-section-content">
        <h2 className="mb-5" data-aos="fade-right">Téléchargez mon CV !</h2>
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="text-center">
          <a 
            href="assets/cv-alternance.pdf" 
            download="CV emmanuel mbengo.pdf" 
            target="_blank" 
            className="cv-download-link"
            rel="noopener noreferrer"
          >
            <button className="cv-download-button">
              <i className="fa-solid fa-download fa-2x me-2"></i>
              Télécharger mon CV
            </button>
          </a>
          
          <div className="mt-5 education-section">
            <h3 className="mb-4" data-aos="fade-up">Formation</h3>
            <div className="education-item" data-aos="fade-up" data-aos-delay="100">
              <div className="d-flex flex-column flex-md-row justify-content-between mb-4">
                <div>
                  <h4>EFREI Paris</h4>
                  <div className="subheading">Bachelor en Développement Web et Applications</div>
                  <p>Formation axée sur les langages de programmation, le développement web front-end et back-end, ainsi que le développement d'applications mobiles.</p>
                </div>
                <div className="education-date">2023 - Présent</div>
              </div>
            </div>
          </div>
          
          <div className="mt-5 experience-section">
            <h3 className="mb-4" data-aos="fade-up">Expérience professionnelle</h3>
            <div className="experience-item" data-aos="fade-up" data-aos-delay="100">
              <div className="d-flex flex-column flex-md-row justify-content-between mb-4">
                <div>
                  <h4>En recherche d'alternance</h4>
                  <div className="subheading">Développeur Web Full Stack</div>
                  <p>À la recherche d'une opportunité d'alternance à partir de septembre 2025 pour mettre en pratique mes compétences en développement web et applications.</p>
                </div>
                <div className="experience-date">À partir de Sept. 2025</div>
              </div>
            </div>
          </div>
          
          <div className="mt-5 certification-section">
            <h3 className="mb-4" data-aos="fade-up">Certifications</h3>
            <ul className="list-unstyled">
              <li className="mb-2" data-aos="fade-up" data-aos-delay="100">
                <div className="d-flex align-items-center">
                  <i className="fa-solid fa-certificate me-3 text-primary"></i>
                  <span>Certification en HTML5 et CSS3</span>
                </div>
              </li>
              <li className="mb-2" data-aos="fade-up" data-aos-delay="150">
                <div className="d-flex align-items-center">
                  <i className="fa-solid fa-certificate me-3 text-primary"></i>
                  <span>Certification JavaScript Avancé</span>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="mt-5 languages-section">
            <h3 className="mb-4" data-aos="fade-up">Langues</h3>
            <ul className="list-unstyled">
              <li className="mb-2" data-aos="fade-up" data-aos-delay="100">
                <div className="d-flex align-items-center">
                  <i className="fa-solid fa-language me-3 text-primary"></i>
                  <span>Français - Langue maternelle</span>
                </div>
              </li>
              <li className="mb-2" data-aos="fade-up" data-aos-delay="150">
                <div className="d-flex align-items-center">
                  <i className="fa-solid fa-language me-3 text-primary"></i>
                  <span>Anglais - Niveau professionnel</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}