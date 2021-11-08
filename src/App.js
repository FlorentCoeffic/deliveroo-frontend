import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "https://deliveroo-backend-flo.herokuapp.com/"
    );

    console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div>
      <h2>{data.restaurant.name}</h2>
      <p>{data.restaurant.description} </p>
      <div>
        <img
          className="img-presentation"
          src={data.restaurant.picture}
          alt="pain-quotidien "
        />
      </div>
      {data.categories.map((elem, index) => {
        return <div key={index}> {elem.name} </div>;
      })}
      {data.categories.map((elem, index) => {
        return (
          <div>
            <span>{elem}</span>
          </div>
        );
      })}
    </div>
  );
}

export default App;
