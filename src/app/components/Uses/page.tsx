import React from 'react';
import { Laptop, Code, Palette, Zap } from 'lucide-react';

const Uses = () => {
  const sections = [
    {
      title: "Workstation",
      icon: <Laptop className="w-6 h-6" />,
      description: "My workspace is thoughtfully equipped with powerful hardware that enables me to handle complex development tasks and multitask efficiently.",
      items: [
        { name: "MacBook Air", description: "My primary machine for development work, offering the perfect balance of power and portability." },
        { name: "HP Monitor 32-inch", description: "This expansive display provides the screen real estate I need for efficient multitasking." }
      ]
    },
    {
      title: "Development Tools",
      icon: <Code className="w-6 h-6" />,
      description: "I rely on a modern tech stack that emphasizes efficiency and scalability.",
      items: [
        { name: "React.js", description: "My go-to framework for building dynamic user interfaces." },
        { name: "Next.js", description: "Built on top of React, Next.js is my choice for full-stack applications." },
        { name: "Quarkus", description: "For backend development, I use Quarkus to build high-performance, cloud-native applications." }
      ]
    },
    {
      title: "Design",
      icon: <Palette className="w-6 h-6" />,
      description: "Design tools are crucial for translating ideas into visual concepts.",
      items: [
        { name: "Figma", description: "My primary design tool for creating user interfaces and prototypes." },
        { name: "Whimsical", description: "Perfect for quick wireframes and flowcharts." }
      ]
    },
    {
      title: "Productivity",
      icon: <Zap className="w-6 h-6" />,
      description: "Staying organized and maintaining high productivity requires the right tools.",
      items: [
        { name: "VS Code", description: "My code editor of choice, enhanced with carefully selected extensions." },
        { name: "Jira", description: "Essential for project management and tracking development progress." }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-12">
          <h1 className="text-4xl sm:text-3xl text-2xl font-bold mb-6">
            Software I use, gadgets I love, and other things I recommend.
          </h1>
          <p className="text-lg sm:text-base text-gray-600">
            As a web developer and designer, I&apos;ve carefully curated my toolkit to maximize productivity and creativity.
          </p>
        </header>

        <div className="space-y-12">
          {sections.map((section, index) => (
            <section key={index} className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                {section.icon}
                <h2 className="text-2xl font-semibold">{section.title}</h2>
              </div>
              
              <p className="text-gray-600 mb-6">{section.description}</p>

              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
                {section.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex} 
                    className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-300 p-6"
                  >
                    <h3 className="text-xl font-semibold mb-4">{item.name}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Uses;
