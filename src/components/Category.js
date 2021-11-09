import Meal from "./Meal";

const Category = ({ category }) => {
  return (
    <div className="container ">
      <h2>{category.name}</h2>
      <div className="meals">
        {category.meals.map((meal, index) => {
          return <Meal meal={meal} key={meal.id} />;
        })}
      </div>
    </div>
  );
};

export default Category;
