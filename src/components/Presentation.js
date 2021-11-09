const Presentation = ({ restaurant }) => {
  return (
    <div className="presentation container">
      <div className="text-presentation">
        <h2>{restaurant.name}</h2>
        <p>{restaurant.description} </p>
      </div>
    </div>
  );
};

export default Presentation;
