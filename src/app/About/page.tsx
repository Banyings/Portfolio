
/* eslint-disable @next/next/no-img-element */
export default function About() {
  const skills = [
    { name: 'HTML', image: './html.png', percentage: '95%' },
    { name: 'CSS', image: './css.png', percentage: '90%' },
    { name: 'JavaScript', image: './JavaScript.png', percentage: '90%' },
    { name: 'Java', image: './java.png', percentage: '90%' },
    { name: 'Python', image: './python.png', percentage: '90%' },
    { name: 'React', image: './reactjs.png', percentage: '90%' },
    { name: 'Next.js', image: './nextjs.png', percentage: '90%' },
    { name: 'Quarkus', image: './quarkus.png', percentage: '90%' },
    { name: 'SpringBoot', image: './springboot.png', percentage: '85%' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-4xl mx-auto space-y-12 ">
        {/* Introduction Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-300">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            I am Hyppolite Banyingela. I live in Salt Lake City Utah, where I develop the future.
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            I’m currently pursuing an Associate degree and a Certificate in Software Engineering at Ensign College, with a focus on [specific areas of interest like software development, data analysis, etc.]. 
            Throughout my studies, I’ve gained solid foundational knowledge in [mention relevant subjects, like web development, algorithms, databases, etc.], and I have actively applied these concepts in various projects, 
            including [mention specific projects, like BanyingsBarber or My Portfolio].I’m now seeking an internship where I can further hone my skills and contribute to real-world projects in a collaborative environment. I’m eager to learn from experienced professionals, expand my technical expertise, and grow both as a developer and as a team player. With a strong foundation in [mention any specific tools or technologies like React, JavaScript, Python, etc.], I am excited to take the next step in my career and bring value to a forward-thinking organization.
          </p>
        </div>

        {/* Skills Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-300">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border border-gray-300">Skills</h2>
          <p className="text-gray-600 mb-8">
            My journey in frontend development has equipped me with a robust set of skills, 
            honed through hands-on experience with cutting-edge frameworks such as React and Next.js. 
            Below, I showcase some of the key competencies I have mastered along the way.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center">
                <img
                  src={skill.image}
                  alt={`${skill.name} ${skill.percentage}`}
                  className="w-12 h-12 mb-2"
                />
                <span className="text-sm font-medium text-gray-900">{skill.name}</span>
                <span className="text-sm text-gray-500">{skill.percentage}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Education Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-300">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border border-gray-200">Education</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="./ensign.png"
              alt="Ensign College"
              className="w-20 h-20 y-1 object-contain"
            />
            <div>
              <p className="text-gray-600 mb-6">
                I am pursuing an Associate of Science degree and a certificate in Software Engineering. 
                At first, I was unsure if it would be a suitable field for me because I was intimidated 
                by programming. However, after giving it a try, I discovered that I can indeed do it.
              </p>
              <h3 className="text-lg font-semibold text-gray-900">Associate of Science 2023-2025</h3>
              <h3 className="text-lg font-semibold text-gray-900">Certificate of Software Engineering 2023-2025</h3>
            </div>
          </div>
        </div>

        {/* Continued Learning Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-300">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border border-gray-200">Continued Learning</h2>
          <p className="text-gray-600 mb-6">
            I believe in continuous learning and actively seek opportunities to expand my knowledge and skills. Here are two platforms where I engage in online courses to stay updated and improve my expertise:
          </p>
          <div className="flex gap-8">
            <a 
              href="https://www.coursera.org/" 
              target="_blank" 
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Coursera
            </a>
            <a 
              href="https://www.udemy.com/home/my-courses/learning/" 
              target="_blank" 
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Udemy
            </a>
            <a 
              href="https://www.sololearn.com/en/learn" 
              target="_blank" 
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Sololearn
            </a>
            <a 
              href="https://www.sololearn.com/en/learn" 
              target="_blank" 
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
             LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
