"use client"; // This ensures the component is treated as a client component

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/clerk-react';
import axios from 'axios';

export default function CustomCardPage() {
  const { user } = useUser();
  const [decks, setDecks] = useState([]);
  const [newDeckTitle, setNewDeckTitle] = useState('');
  const [newCards, setNewCards] = useState([{ front: '', back: '' }]);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/sign-in'); // Redirect to sign-in if not logged in
      return;
    }
  }, []);

  const handleAddCard = () => {
    setNewCards([...newCards, { front: '', back: '' }]);
  };

  const handleCardChange = (index, field, value) => {
    const updatedCards = [...newCards];
    updatedCards[index][field] = value;
    setNewCards(updatedCards);
  };

  const handleSubmit = () => {
    if (!user) return;

    const data = {
      title: newDeckTitle,
      type: "CUSTOM",
      cards: newCards
    };

    axios.post('/api/userdecks', data)
      .then(response => {
        setDecks([...decks, response.data]);
        setNewDeckTitle('');
        setNewCards([{ front: '', back: '' }]);
        console.log("the new deck installed", decks);
      })
      .catch(error => {
        console.error('Error saving deck:', error);
      });
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 via-purple-50 to-blue-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-12">Your Custom Decks</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {decks.map(deck => (
            <div
              key={deck.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-700 mb-4">{deck.title}</h3>
              <Link href={`/decks/${deck.id}`} className="text-indigo-500 hover:text-indigo-700 font-medium">
                View Deck
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl font-semibold text-gray-800 mb-8 text-center">Add a New Deck</h2>
          <div className="mb-8 text-gray-600">
            <input
              type="text"
              placeholder="Deck Title"
              value={newDeckTitle}
              onChange={(e) => setNewDeckTitle(e.target.value)}
              className="w-full border border-gray-300 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
            />
          </div>
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">Cards</h3>
          {newCards.map((card, index) => (
            <div key={index} className="mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  text-gray-600">
                <input
                  type="text"
                  placeholder="Front"
                  value={card.front}
                  onChange={(e) => handleCardChange(index, 'front', e.target.value)}
                  className="border border-gray-300 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="text"
                  placeholder="Back"
                  value={card.back}
                  onChange={(e) => handleCardChange(index, 'back', e.target.value)}
                  className="border border-gray-300 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          ))}
          <div className="flex items-center justify-center">
            <button
              onClick={handleAddCard}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md shadow-md transition-colors duration-200"
            >
              Add Another Card
            </button>
            <button
              onClick={handleSubmit}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md shadow-md transition-colors duration-200 ml-4"
            >
              Submit Deck
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
