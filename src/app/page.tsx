
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Hero Section with Image */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-48 h-48  overflow-hidden flex-shrink-0">
            <Image
              src="./Hyppolite.png"
              alt="Image of Hyppolite"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Description */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Software Engineer and Believer
            </h1>
            <p className="text-lg text-gray-600">
            The future is brighter with Technology. 
            I fell in love with Software Engineering when I started the course called Introduction to Programming. 
            Although new and challenging for me at the beginning, I set a goal to improve myself and I knew that I would be able to feel comfortable coding one day. 
            Now I am having fun coding and it is so cool for me, and I know that it is the same for every Software Engineer.
            </p>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center gap-4 mb-6">
            <p className="text-xl font-semibold text-gray-800">
              Stay Updated when I push new codes
            </p>
            <div className="relative w-12 h-12">
              <Image
                src="./email.png"
                alt="gmail-symbole"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
