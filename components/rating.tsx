'use client';

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const STARS_COUNT = 5;
const stars = Array.from({ length: STARS_COUNT });

const rating = 5;

function Rating() {
  return (
    <div className="flex">
      {stars.map((star, index) => (
        <AiOutlineStar key={index} className="" />
      ))}
    </div>
  );
}

export default Rating;
