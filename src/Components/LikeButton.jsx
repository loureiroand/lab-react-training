import { useState } from 'react';

const LikeButton = () => {
  const [count, setCount] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const handleClick = () => {
    setCount(count + 1);
    setColorIndex((colorIndex + 1) % colors.length);
  };

  const buttonStyle = {
    backgroundColor: colors[colorIndex],
    color: 'white',
    padding: '12px',
    borderRadius: '2px',
    width: '120px',
    cursor: 'pointer',
  };

  return (
    <button className="likeButton" style={buttonStyle} onClick={handleClick}>
      {count} Likes
    </button>
  );
};

export default LikeButton;
