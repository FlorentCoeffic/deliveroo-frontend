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
    setIsLoading(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <h2>{data.restaurant.name}</h2>
  );
}

export default App;
