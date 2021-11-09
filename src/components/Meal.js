import { useState } from "react";

const Meal = ({ meal }) => {
  const [add, setAdd] = useState([0]);

  const addMeal = () => {
    const newAdd = [...add];
    newAdd.push(meal.id);
    setAdd(newAdd);
  };
  return (
    <div className="meal" onClick={addMeal}>
      <div className="mealDescription">
        <h3>{meal.title}</h3>
        <p className=" mealTextDescription">{meal.description}</p>
        <div className="bottomDescription">
          <span className="price">{meal.price} € </span>
          <span className="popular">
            {meal.popular && (
              <div>
                <span>
                  <i class="fas fa-star"></i>
                </span>
                <span> Populaire</span>
              </div>
            )}
          </span>
        </div>
      </div>

      {meal.picture && (
        <img className="mealPic" src={meal.picture} alt="meal.pic" />
      )}
    </div>
  );
};

export default Meal;
