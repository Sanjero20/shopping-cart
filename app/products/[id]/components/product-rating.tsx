import StarRating from '@/components/star-rating';
import { Rating } from '@/lib/types';

type Props = {
  rating: Rating;
};

function ProductRating({ rating }: Props) {
  return (
    <div className="flex items-center gap-1">
      <StarRating score={rating.rate} />
      <p>{rating.count}</p>
    </div>
  );
}

export default ProductRating;
