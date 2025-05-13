'use client';

import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default function SocialIcons() {
  return (
    <div className="social-icons">
      <a 
        className="social-icon" 
        href="https://www.linkedin.com/in/emmanuel-mbengo/" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn />
      </a>
      <a 
        className="social-icon" 
        href="https://github.com/mvnu6" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
    </div>
  );
}