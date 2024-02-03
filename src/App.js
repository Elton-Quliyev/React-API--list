import React, { useEffect, useState } from "react";
import './App.css';
import axios from 'axios';

const App = () => {
  const API_KEY = "https://jsonplaceholder.typicode.com/users";
  const [info, setInfo] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios(API_KEY);
      setInfo(response.data);
    } catch (error) {
      console.log("bir sehvin var", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  
  const mixFunction = () =>{

    return info.map((element)=>(
      <div key={element.id}>
        <h1>Adiniz : {element.name}</h1>
        <h1>Soyadiniz : {element.username}</h1>
      </div>
    ))
  }


  return (
    <>

      {mixFunction()}

    </>
  )
};

export default App;
