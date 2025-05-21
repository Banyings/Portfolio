import React from "react";
import Image from "next/image";

export default function About() {
  const skills = [
    { name: 'HTML', image: '/html.png', percentage: '95%' },
    { name: 'CSS', image: '/css.png', percentage: '90%' },
    { name: 'JavaScript', image: '/JavaScript.png', percentage: '90%' },
    { name: 'Java', image: '/java.png', percentage: '90%' },
    { name: 'Python', image: '/python.png', percentage: '90%' },
    { name: 'React', image: '/reactjs.png', percentage: '90%' },
    { name: 'Next.js', image: '/nextjs.png', percentage: '90%' },
    { name: 'Quarkus', image: '/quarkus.png', percentage: '90%' },
    { name: 'SpringBoot', image: '/springboot.png', percentage: '85%' },
    { name: 'Tailwind CSS', image: '/tailwind.png', percentage: '90%' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="mx-auto space-y-12 ml-4 mr-4 sm:ml-6 sm:mr-6 md:ml-12 md:mr-12">
        
        {/* Introduction Card */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 border border-gray-300">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            I am Hyppolite Banyingela. I live in Salt Lake City Utah, where I develop the future.
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            I&apos;m currently pursuing an Associate degree and a Certificate in Software Engineering at Ensign College, with a focus on [specific areas of interest]. 
            Throughout my studies, I&apos;ve gained solid foundational knowledge in web development, algorithms, and databases, applying these concepts in various projects, 
            including BanyingsBarber and My Portfolio.
          </p>
        </div>

        {/* Skills Card */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 border border-gray-300">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Skills</h2>
          <p className="text-gray-600 mb-4 sm:mb-8">
            My journey in frontend development has equipped me with a robust set of skills, honed through hands-on experience with cutting-edge frameworks such as React and Next.js.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center">
                <Image
                  src={skill.image}
                  alt={`${skill.name} ${skill.percentage}`}
                  width={48}
                  height={48}
                  className="w-10 h-10 sm:w-12 sm:h-12 mb-2"
                  unoptimized
                />
                <span className="text-sm font-medium text-gray-900">{skill.name}</span>
                <span className="text-sm text-gray-500">{skill.percentage}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Internship Experience Card */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 border border-gray-300">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Professional Experience</h2>
          <div className="flex flex-col md:flex-row items-start gap-4 sm:gap-8">
            <div className="flex-shrink-0">
              <Image
                src="/jumuiya-logo.png" 
                alt="International Jumuiya"
                width={80}
                height={80}
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                unoptimized
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Frontend Development Intern</h3>
              <p className="text-sm text-gray-500 mb-2">International Jumuiya Website Development | January - March 2025</p>
              <p className="text-gray-600 mb-3">
                Contributed to the development of a modern, responsive website for International Jumuiya, focusing on 
                creating an intuitive user interface that effectively communicates the organization&apos;s mission and values.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-gray-700"><span className="font-medium">Key Achievements:</span></p>
                <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                  <li>Developed responsive home page and about page using React and Tailwind CSS</li>
                  <li>Created modular, reusable components following best practices</li>
                  <li>Implemented responsive design principles ensuring cross-browser compatibility</li>
                  <li>Optimized performance for various device sizes while maintaining design consistency</li>
                </ul>
                <p className="text-sm text-gray-700 mt-3">
                  <span className="font-medium">Technologies used:</span> React.js, Next.js, Tailwind CSS, Git
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Education Card */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Education</h2>
          <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-8">
            <Image
              src="/ensign.png"
              alt="Ensign College"
              width={80}
              height={80}
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
              unoptimized
            />
            <div>
              <p className="text-gray-600 mb-4 sm:mb-6">
                I am pursuing an Associate of Science degree and a certificate in Software Engineering. 
                Initially, I was unsure about programming, but I discovered I can do it.
              </p>
              <h3 className="text-md sm:text-lg font-semibold text-gray-900">Associate of Science 2023-2025</h3>
              <h3 className="text-md sm:text-lg font-semibold text-gray-900">Certificate of Software Engineering 2023-2025</h3>
            </div>
          </div>
        </div>

        {/* Continued Learning Card */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Continued Learning</h2>
          <p className="text-gray-600 mb-4 sm:mb-6">
            I believe in continuous learning and actively seek opportunities to expand my knowledge.
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-8">
            <a 
              href="https://www.coursera.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Coursera
            </a>
            <a 
              href="https://www.udemy.com/home/my-courses/learning/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Udemy
            </a>
            <a 
              href="https://www.sololearn.com/en/learn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Sololearn
            </a>
            <a 
              href="https://www.linkedin.com/learning/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              LinkedIn Learning
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}