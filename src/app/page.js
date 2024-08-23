import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Main Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Flashcards for CDAC students
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            CDAC Flashcards is an interactive study tool with pre-built and
            custom flashcards. Go digital, reduce your carbon footprint, and
            study sustainably for the CDAC Examination
          </p>
          <div className="flex justify-center">
            {/* Example button for register (uncomment and style as needed) */}
            {/* <Link href="/register">
              <a className="btn">Register</a>
            </Link> */}
          </div>
        </div>
      </div>

      {/* Second Header Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-gray-900 text-3xl font-bold text-center mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-gray-900 text-xl font-semibold mb-4">
                Prebuilt Cards
              </h3>
              <p className="text-gray-600 mb-4">
                Your most cherished flashcards, handpicked and readily
                available. Keep your top study aids just a click away, so you
                can quickly review the content that matters most to you.
              </p>
              <Link href="/prebuilt" className="text-indigo-600 hover:text-indigo-800">
                  Learn More
                
              </Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-gray-900 text-xl font-semibold mb-4">
                Custom Cards
              </h3>
              <p className="text-gray-600 mb-4">
                Store and organize your flashcards for future use. Whether you
                mastered them or just want to keep them handy, your archived
                sets are safely stashed away, ready for when you need them.
              </p>
              <Link href="/customcard" className="text-indigo-600 hover:text-indigo-800">
                  Learn More
                
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Third Header Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-gray-900 text-3xl font-bold text-center mb-12">
            Our Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-gray-900 text-xl font-semibold mb-4">
                Power Up Your Learning
              </h3>
              <p className="text-gray-600">
                Research shows that digital flashcards supercharge retention and
                performance, making your CDAC CCEE exam prep more effective than
                ever.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-gray-900 text-xl font-semibold mb-4">
                Study Smart, Anytime, Anywhere
              </h3>
              <p className="text-gray-600">
                Students love the convenience of digital flashcards. Our
                platform is designed to keep you engaged and on track, wherever
                you are.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-gray-900 text-xl font-semibold mb-4">
                Go Green, Study Clean
              </h3>
              <p className="text-gray-600">
                Ditch the paper and embrace sustainability. Our digital
                flashcards offer an eco-friendly way to master your studies
                without harming the environment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
