import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import logo from "./asset/img/logo.svg";
import Presentation from "./components/Presentation";
import Category from "./components/Category";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://deliveroo-backend-flo.herokuapp.com/"
        );

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div>
      <div className="header">
        <div className=" container">
          <img className="logo" src={logo} alt="logo" />
          <Presentation restaurant={data.restaurant} />
        </div>
        <img
          className="img-presentation"
          src={data.restaurant.picture}
          alt="pain-quotidien "
        />
      </div>
      <div className="body">
        {data.categories.map((category, index) => {
          return (
            category.meals.length > 0 && (
              <Category category={category} key={index} />
            )
          );
        })}
      </div>
    </div>
  );
}

export default App;
