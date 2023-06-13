import { useState } from 'react';

const ClickablePicture = ({ img, imgClicked }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClicked = () => {
    setIsClicked(!isClicked);
  };
  return <img src={isClicked ? imgClicked : img} onClick={handleClicked} />;
};

export default ClickablePicture;
