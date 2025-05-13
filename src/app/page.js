import SocialIcons from '../components/socialIcons';

export default function Home() {
  return (
    <section className="resume-section" id="about">
      <div className="resume-section-content">
        <h1 className="mb-5">
          Emmanuel
          <span className="text-primary"> Mbengo Mayemba</span>
        </h1>
        <div className="subheading mb-5">
          Paris · 07 71 93 66 88 ·
          <a href="mailto:emmanuel.mbengo-mayemba@efrei.net"> emmanuel.mbengo-mayemba@efrei.net</a>
        </div>
        <p className="lead mb-5">
          Hello ! Je m&apos;appelle Emmanuel Mbengo Mayemba et je suis actuellement en deuxième année 
          de développement web et application à l&apos;EFREI Paris. Passionné par la programmation, 
          je m&apos;intéresse particulièrement à la création de sites web et d&apos;applications. 
          Mon objectif est de continuer à développer mes compétences techniques tout en contribuant 
          à des projets concrets.
        </p>
        <p className="lead mb-5">
          Je suis en ce moment à la recherche d&apos;une alternance à partir de fin septembre 2025 
          dans le domaine du développement web et application. Je souhaite mettre à profit mes 
          compétences tout en évoluant dans un environnement professionnel stimulant et enrichissant.
        </p>
        <p className="lead mb-5">N&apos;hésitez pas à me contacter !</p>

        <SocialIcons />
      </div>
    </section>
  );
}