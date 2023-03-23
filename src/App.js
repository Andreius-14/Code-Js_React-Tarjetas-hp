import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar";
import Characters from "./components/characters";

function App() {
  const [characters, setCharacters] = useState([]);
  // const url = "https://www.dnd5eapi.co/api/monsters";
  const url = "https://harry-potter-api.onrender.com/personajes";

  const fetchCharacters = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // setCharacters(data.results);
        setCharacters(data);

      })
      .catch((error) => {
        console.log(error);
      });
  };

  // [■■■ UseEffect ■■■]
  useEffect(() => {
    fetchCharacters(url);
  }, []);

  return (
    <>
      <Navbar title="DnD Mounstruos" />

      <div className="container">
        <div className="row p-4">

          {characters.map((character, index) => (
              // <Characters name={character.name} url={character.url}  key="" />
              <Characters name={character.personaje}  imagen={character.imagen} key={index} />

              
          ))}

        </div>
      </div>
    </>
  );
}

export default App;

// characters.map( (personaje,index) => {
//   <Characters key={index} characters={personaje.url}/>
// }))
