import { Fragment } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const MAX_RATING = 5;

type RatingProps = {
  score: number;
};

function StarRating({ score }: RatingProps) {
  const roundedScore = Math.round(score * 2) / 2;
  const filledStars = Math.floor(score);
  const hasHalfStar = roundedScore - filledStars >= 0.5;
  const remainingStars = MAX_RATING - filledStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex">
      {/* Filled stars */}
      {[...Array(filledStars)].map((_, index) => (
        <FaStar key={index} />
      ))}

      {/* Half star */}
      {hasHalfStar && (
        <Fragment>
          <FaStarHalfAlt />
        </Fragment>
      )}

      {/* Empty stars */}
      {[...Array(remainingStars)].map((_, index) => (
        <FaRegStar key={index} />
      ))}
    </div>
  );
}

export default StarRating;
