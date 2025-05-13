'use client';

import Image from 'next/image';
import { useEffect } from 'react';

export default function SkillSection({ title, icons }) {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
      <div className="flex-grow-1">
        <h3 className="mb-5">{title}</h3>
        <div data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine">
          {icons?.map((icon, index) => (
            <div key={index} style={{ display: 'inline-block', marginRight: '50px' }}>
              {icon.type === 'fa' ? (
                <i className={`fa-brands ${icon.name} fa-4x`}></i>
              ) : (
                <Image 
                  src={icon.src} 
                  alt={icon.alt} 
                  width={icon.width || 80} 
                  height={icon.height || 80}
                />
              )}
            </div>
          ))}
          <div className="subheading mb-3"></div>
        </div>
      </div>
    </div>
  );
}