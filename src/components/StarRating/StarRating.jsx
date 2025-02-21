import { Star } from "lucide-react";
import "./StarRating.scss";
const StarRating = ({ rating }) => {
  const maxStars = 5;
  return (
    <div className="stars">
      {[...Array(maxStars)].map((_, index) => (
        <Star
          key={index}
          size={18}
          fill={index < rating ? "#F3BE00" : "#BFBFBF"}
          stroke="none"
        />
      ))}
    </div>
  );
};

export default StarRating;
