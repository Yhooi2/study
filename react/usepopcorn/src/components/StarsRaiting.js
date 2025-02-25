import { useState } from "react";
import { Star } from "./Star";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const startsContainerStyle = {
  display: "flex",
  gap: "4px",
};

export default function StarsRaiting({
  maxStars = 5,
  color = "#fcc419",
  size = 48,
  className = "",
  messages = [],
  defaultRating = 0,
  onSetRating,
}) {
  const textStyle = {
    lineHight: "1",
    margin: "0",
    color: color,
    fontSize: size / 1.5,
  };

  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  function handleRating(rating) {
    setRating(rating);
    onSetRating(rating);
  }
  function handleTempRating(rating) {
    setTempRating(rating);
  }
  return (
    <div style={containerStyle} className={className}>
      <div style={startsContainerStyle}>
        {Array.from({ length: maxStars }, (_, i) => (
          <Star
            key={i + 1}
            onClick={() => handleRating(i + 1)}
            onHoverIn={() => handleTempRating(i + 1)}
            onHoverOut={() => handleTempRating(0)}
            fullStar={tempRating ? i < tempRating : i < rating}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>
        {" "}
        {messages.length === maxStars
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}{" "}
      </p>
    </div>
  );
}
