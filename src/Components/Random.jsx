const Random = ({ min, max }) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div>
      Random value between {min} and {max} <span>{'=>'}</span> {randomNumber}
    </div>
  );
};

export default Random;
