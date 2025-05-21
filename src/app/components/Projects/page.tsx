'use client';

import React from 'react';
import Image from 'next/image';

export default function ProjectsPage() {
  const projects = [
    {
      name: 'BanyingsBarber',
      description: 'A barber booking app with an interactive user interface and real-time booking features.',
      image: '../nextjs.png', 
      link: 'https://banyings-barber-pd6jshcbw-hyppolite-banyingelas-projects.vercel.app/',
    },
    {
      name: 'My Porfolio',
      description: 'A frontend development project focused on building a responsive Navbar and page navigation.',
      image: '../nextjs.png', 
      link: 'https://banyings.github.io/Portfolio/',
    },
    {
      name: 'RandomSelector',
      description: 'A frontend development project focused on helping people make an automatic/random selection.',
      image: '../nextjs.png',
      link: 'https://banyings.github.io/Randomselector/',
    },
    {
      name: 'Utah French Choir',
      description: 'Building a web App for the Utah French Choir commingup soon. The web App is fullstack',
      image: '../nextjs.png', 
      link: 'https://utahfrenchchoir-2jtluvm8h-hyppolite-banyingelas-projects.vercel.app/',
    },

  ];

  return (
    <div className=" bg-gray-50 mt-0 mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center ">Things I have made trying to put my dent in the universe.</h1>
      <p className="text-base mb-8 ml-4 mr-4 sm:ml-10 sm:mr-10 md:ml-20 md:mr-20">
                Here are some of the projects I have worked on and am still working on. I try to come up with new ideas to improve every day. I am eager to learn more from others and move forward. I am in love with software engineering, and I believe that the future is brighter with technology. Please visit my projects and give me some constructive feedback so I can improve, since there is no perfection in humans.
                </p>
      <div className="flex flex-wrap gap-6 justify-center items-center">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="border border-gray-300 p-6 rounded-lg max-w-sm w-full md:w-[300px] shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative w-full h-[150px] mb-4">
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-lg object-cover"
                priority={index === 0}
              />
            </div>
            <h2 className="text-xl font-semibold mb-3 text-center">{project.name}</h2>
            <p className="text-gray-600 mb-4 text-center">{project.description}</p>
            <div className="text-center">
              <a 
                href={project.link} 
                className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit {project.name}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}