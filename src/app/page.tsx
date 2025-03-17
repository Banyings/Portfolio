'use client'

import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen mt-0 py-24 px-4 sm:px-6 lg:px-8 bg-animation">
      {/* Animated gradient background overlay */}
      <div className="gradient-overlay"></div>
      
      <div className="max-w-4xl mx-auto space-y-12 mt-0 relative z-10">
        {/* Hero Section with Image */}
        <div className="flex flex-col md:flex-row items-center gap-8 backdrop-blur-sm bg-white/30 p-6 rounded-xl shadow-lg">
          <div className="profile-image-container relative w-48 h-48 overflow-hidden flex-shrink-0 rounded-full border-4 border-white shadow-xl">
            <Image
              src="./Hyppolite.png"
              alt="Image of Hyppolite"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          
          {/* Description */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Software Engineer and Believer
            </h1>
            <p className="text-lg text-gray-800">
              The future is brighter with Technology. 
              I fell in love with Software Engineering when I started the course called Introduction to Programming. 
              Although new and challenging for me at the beginning, I set a goal to improve myself and I knew that I would be able to feel comfortable coding one day. 
              Now I am having fun coding and it is so cool for me, and I know that it is the same for every Software Engineer.
            </p>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 border border-gray-300 transition-all hover:bg-white/90">
          <div className="flex items-center gap-4 mb-6">
            <p className="text-xl font-semibold text-gray-800">
              Stay Updated when I push new codes
            </p>
            <div className="relative w-12 h-12 pulse-animation">
              <Image
                src="./email.png"
                alt="gmail-symbole"
                width={48}
                height={48}
                className="object-contain"
                unoptimized
              />
            </div>
          </div>

          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/90"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
      {/* Add this style tag for the background animation */}
      <style jsx global>{`
        .bg-animation {
          position: relative;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          overflow: hidden;
        }
        
        .gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, 
            rgba(65, 88, 208, 0.15) 0%, 
            rgba(200, 80, 192, 0.15) 50%, 
            rgba(255, 204, 112, 0.15) 100%);
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
          z-index: 1;
        }
        
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .profile-image-container {
          opacity: 1;
          animation: fadeIn 1.2s ease-out forwards;
        }
        
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .pulse-animation {
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}