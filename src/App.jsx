import { useState } from "react";
import arrCards from "../foodBurger.json";
import Cards from "./Components/Cards/Cards.jsx";
export default function App() {
  const [burgers, setBurgers] = useState(arrCards);
  const [allProductsCount, setAllProductsCount] = useState(0);

  function editAllProductsCount(amper) {
    setAllProductsCount(allProductsCount + amper);
  }

  function delCards(id) {
    const copyBurgersArr = [...burgers];
    const newBurgersArr = copyBurgersArr.filter((item) => item.id != id);
    setBurgers(newBurgersArr)
  }

  if (!burgers) {
    return <h1>Error 404</h1>;
  }

  return (
    <div className="container">
      <h1>{allProductsCount}</h1>
      <div className="wrapper_gl_cards">
        {burgers.map((item) => (
          <Cards
            {...item}
            key={item.id}
            editAllProductsCount={editAllProductsCount}
            delCards={delCards}
          />
        ))}
      </div>
    </div>
  );
}
