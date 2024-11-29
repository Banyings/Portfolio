import React from 'react';
import { Laptop, Code, Palette, Zap } from 'lucide-react';

const Uses = () => {
  const sections = [
    {
      title: "Workstation",
      icon: <Laptop className="w-6 h-6 " />,
      description: "My workspace is thoughtfully equipped with powerful hardware that enables me to handle complex development tasks and multitask efficiently. The combination of the MacBook Air's portability and the HP Monitor's expansive display creates an ideal setup for both mobile and stationary work.",
      items: [
        {
          name: "MacBook Air",
          description: "My primary machine for development work, offering the perfect balance of power and portability. Its impressive battery life and M1 chip performance make it ideal for both on-the-go coding and resource-intensive tasks."
        },
        {
          name: "HP Monitor 32-inch",
          description: "This expansive display provides the screen real estate I need for efficient multitasking. Perfect for having multiple windows open simultaneously - code editor, browser, and documentation side by side."
        }
      ]
    },
    {
      title: "Development Tools",
      icon: <Code className="w-6 h-6" />,
      description: "I rely on a modern tech stack that emphasizes efficiency and scalability. These tools allow me to build robust web applications while maintaining clean, maintainable code bases.",
      items: [
        {
          name: "React.js",
          description: "My go-to framework for building dynamic user interfaces. Its component-based architecture and vast ecosystem make it perfect for creating scalable front-end applications."
        },
        {
          name: "Next.js",
          description: "Built on top of React, Next.js is my choice for full-stack applications. Its built-in features like server-side rendering and API routes streamline the development process."
        },
        {
          name: "Quarkus",
          description: "For backend development, I use Quarkus to build high-performance, cloud-native applications. Its supersonic development experience and excellent Java support make it invaluable."
        }
      ]
    },
    {
      title: "Design",
      icon: <Palette className="w-6 h-6" />,
      description: "Design tools are crucial for translating ideas into visual concepts. These applications help me create intuitive user interfaces and maintain consistent design systems across projects.",
      items: [
        {
          name: "Figma",
          description: "My primary design tool for creating user interfaces and prototypes. Its collaborative features and powerful design capabilities make it essential for both solo work and team projects."
        },
        {
          name: "Whimsical",
          description: "Perfect for quick wireframes and flowcharts. I use it extensively for planning project architecture and creating visual documentation that communicates ideas effectively."
        }
      ]
    },
    {
      title: "Productivity",
      icon: <Zap className="w-6 h-6" />,
      description: "Staying organized and maintaining high productivity requires the right tools. These applications help me manage tasks efficiently and write better code faster.",
      items: [
        {
          name: "VS Code",
          description: "My code editor of choice, enhanced with carefully selected extensions. Its customizability and integrated features make it perfect for all my development needs."
        },
        {
          name: "Jira",
          description: "Essential for project management and tracking development progress. Helps me stay organized with sprints and maintain a clear overview of project timelines."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <header className="mb-16">
          <h1 className="text-4xl font-bold mb-6">
            Software I use, gadgets I love, and other things I recommend.
          </h1>
          
          <p className="text-xl text-gray-600">
            As a web developer and designer, I&apos;ve carefully curated my toolkit to maximize productivity 
            and creativity. Here&apos;s a comprehensive look at the hardware, software, and tools that power 
            my daily workflow, enabling me to create efficient and user-friendly web experiences.
          </p>
        </header>

        <div className="space-y-12">
          {sections.map((section, index) => (
            <section key={index} className="space-y-6 ">
              <div className="flex items-center gap-3 mb-4">
                {section.icon}
                <h2 className="text-2xl font-semibold">{section.title}</h2>
              </div>
              
              <p className="text-gray-600 mb-6">
                {section.description}
              </p>

              <div className="grid md:grid-cols-2 gap-6 ">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-4">{item.name}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
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