'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import FlipCard from '@/components/flashcard';

export default function DeckPage({ params }) {
  const router = useRouter();
  const { id } = params;
  const [deck, setDeck] = useState(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [noAnimation, setNoAnimation] = useState(false);
  const [loading, setLoading] = useState(true);
  const cardContainerRef = useRef(null);
  const [dragStartX, setDragStartX] = useState(null);

  useEffect(() => {
    fetch(`/api/decks/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Deck not found');
        }
      })
      .then((data) => {
        setDeck(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        router.push('/'); // Redirect to home if deck not found
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex bg-white justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!deck) {
    return <div className="text-center text-red-500">Deck not found</div>;
  }

  const handleSwipe = (direction) => {
    setNoAnimation(true);
    if (direction === 'right' && currentCardIndex < deck.cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else if (direction === 'left' && currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
    setIsFlipped(false); // Reset flip state on swipe
    setTimeout(() => setNoAnimation(false), 0); // Re-enable animation after state update
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleDragStart = (e) => {
    setDragStartX(e.clientX || e.touches[0].clientX);
  };

  const handleDragEnd = (e) => {
    const dragEndX = e.clientX || e.changedTouches[0].clientX;
    const dragDistance = dragEndX - dragStartX;

    if (dragDistance > 100) {
      handleSwipe('left');
    } else if (dragDistance < -100) {
      handleSwipe('right');
    }
    setDragStartX(null);
  };

  return (
    <div className="text-center bg-gradient-to-b from-blue-100 to-purple-100 flex flex-col items-center p-5 h-min-screen">
      <div className="progress-bar bg-gray-200 rounded-full h-2.5 mb-5 w-full fixed top-0 left-0">
        <div
          className="bg-blue-500 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${((currentCardIndex) / deck.cards.length) * 100}%` }}
        ></div>
      </div>
      <h1 className="text-4xl mb-4 font-bold text-gray-800 mt-10">{deck.title}</h1>
      <div className="progress-indicator text-gray-600 text-lg mb-5">
        Card {currentCardIndex + 1} of {deck.cards.length}
      </div>
      <div
        className={`card-container inline-block cursor-pointer mb-7 transition-transform transform ${
          noAnimation ? '' : 'transition-all duration-300'
        } hover:scale-105`}
        onClick={handleCardClick}
        ref={cardContainerRef}
        onMouseDown={handleDragStart}
        onMouseMove={dragStartX !== null ? handleDragEnd : null}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={dragStartX !== null ? handleDragEnd : null}
        onTouchEnd={handleDragEnd}
      >
        <FlipCard card={deck.cards[currentCardIndex]} isFlipped={isFlipped} noAnimation={noAnimation} />
      </div>
      <div className="navigation-buttons flex justify-center gap-4">
        <button
          className={`nav-button px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:shadow-lg transition-transform transform hover:scale-105 ${
            currentCardIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={() => handleSwipe('left')}
          disabled={currentCardIndex === 0}
        >
          Previous
        </button>
        <button
          className={`nav-button px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:shadow-lg transition-transform transform hover:scale-105 ${
            currentCardIndex === deck.cards.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={() => handleSwipe('right')}
          disabled={currentCardIndex === deck.cards.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}
