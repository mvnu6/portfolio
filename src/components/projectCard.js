'use client';

import Image from 'next/image';
import { useEffect } from 'react';

export default function ProjectCard({ title, description, imageSrc, githubLink }) {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
      <div className="flex-grow-1">
        <h3 className="mb-5">
          <div className="project" data-aos="zoom-in" style={{ textAlign: 'center' }}>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <div className="container">
                <Image 
                  src={imageSrc} 
                  alt={title} 
                  className="image" 
                  width={800}
                  height={450}
                />
                <div className="middle">
                  <div className="text">Voir le projet</div>
                </div>
              </div>
            </a>
          </div>
        </h3>
        <div className="subheading mb-3" style={{ textAlign: 'center' }}>
          {title}
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}