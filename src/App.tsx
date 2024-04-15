import { useState } from "react";
import "./App.css";
import FruitComponent from "./Components/fruitComponent/FruitComponent";

function App() {
  const [fruitsState, setFruitsState] = useState([
    "pera",
    "manzana",
    "banana",
    "mango",
    "uva",
    "kiwi",
    "frutilla",
    "melon",
  ]);

  const moveUp = (position: number) => {
    if (position === 0) return;
    const newFruits = [...fruitsState];
    const fruitName = newFruits[position];
    newFruits[position] = newFruits[position - 1];
    newFruits[position - 1] = fruitName;
    setFruitsState(newFruits);
  };

  const moveDown = (position: number) => {
    if (position === fruitsState.length-1) return;
    const newFruits = [...fruitsState];
    const fruitName = newFruits[position];
    newFruits[position] = newFruits[position + 1];
    newFruits[position + 1] = fruitName;
    setFruitsState(newFruits);
  };

  const listItems = fruitsState.map((fruit, index) => (
    <FruitComponent
      name={fruit}
      position={index}
      key={fruit}
      moveUp={moveUp}
      moveDown={moveDown}
    />
  ));

  return (
    <div className="App">
      <h3>Fruits!</h3>
      <ul>{listItems}</ul>
      <button className="App-button">Invert fruits!</button>
    </div>
  );
}

export default App;
