'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  // Gestion du menu responsive
  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Ferme le menu lors du clic sur un lien en mode mobile
  const closeNavbar = () => {
    if (!isCollapsed && window.innerWidth < 992) {
      setIsCollapsed(true);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <Link href="/" className="navbar-brand js-scroll-trigger">
        <span className="d-none d-lg-block">
          <Image
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src="/assets/img/pdp.jpg"
            alt="photo de profil"
            width={160}
            height={160}
            priority
          />
        </span>
      </Link>
      
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNavbar}
        aria-controls="navbarResponsive"
        aria-expanded={!isCollapsed}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarResponsive">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/" className="nav-link js-scroll-trigger" onClick={closeNavbar}>
              A propos
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/skills" className="nav-link js-scroll-trigger" onClick={closeNavbar}>
              Mes connaissances
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/projects" className="nav-link js-scroll-trigger" onClick={closeNavbar}>
              Mes projets
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/resume" className="nav-link js-scroll-trigger" onClick={closeNavbar}>
              Mon CV
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}