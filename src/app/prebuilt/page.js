'use client'; // Required for client-side rendering in Next.js
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Dashboard() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    fetch('/api/decks')
      .then(response => response.json())
      .then(data => setDecks(data))
      .catch(error => console.error('Error fetching decks:', error));
  }, []);

  return (
    <div className="min-h-screen p-8 bg-gradient-to-b from-blue-50 via-purple-50 to-blue-100 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-blue-700">PG Diploma In Advanced Computing (PG-DAC)</h1>
        <h2 className="text-lg mb-10 text-center text-gray-600">
          PG-DAC is the most popular PG Diploma course of C-DAC...
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {decks.map(deck => (
            <div 
              key={deck.id} 
              className="h-[35vh] bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">{deck.title}</h2>
              {deck.description && (
                <p className="text-gray-700 mb-6">{deck.description}</p>
              )}
              <Link 
              passHref={true}
              legacyBehavior={true}
                href={`/decks/${deck.id}`} 
                as={`/decks/${deck.id}`}
                className="inline-block px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-600 transition-all duration-300 ease-in-out"
              >
                Start Deck
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
