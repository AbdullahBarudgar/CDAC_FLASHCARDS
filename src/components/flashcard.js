import React from 'react';
import PropTypes from 'prop-types';
import '../styles/flashcard.css';

const FlipCard = ({ card, isFlipped, noAnimation }) => {
  return (
    <div className="flashcard-container " role="button" aria-pressed={isFlipped}>
      <div className={`flashcard w-72 h-96 relative transform-style-3d transition-transform duration-500 ${isFlipped ? 'flipped' : ''} ${noAnimation ? 'no-animation' : ''}`}>
        {/* Front of the card */}
        <div className="front absolute inset-0 flex items-center justify-center p-6 rounded-lg shadow-lg">
          <div className="text-center">
            <h2 className="text-2xl font-semibold">{card.front}</h2>
          </div>
        </div>

        {/* Back of the card */}
        <div className="back absolute inset-0 flex items-center justify-center p-6 rounded-lg shadow-lg">
          <div className="text-center">
            <h2 className="text-2xl font-semibold">{card.back}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

FlipCard.propTypes = {
  card: PropTypes.shape({
    front: PropTypes.string.isRequired,
    back: PropTypes.string.isRequired,
  }).isRequired,
  isFlipped: PropTypes.bool.isRequired,
  noAnimation: PropTypes.bool.isRequired,
};

export default FlipCard;