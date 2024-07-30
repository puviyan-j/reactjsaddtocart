import logo from "./img/airpods.jpg";
import logo1 from "./img/apple14pro.jpg";
import logo3 from "./img/applewatch8.jpg";
import logo4 from "./img/oneplsu11R.jpg";
import logo5 from "./img/samsungs23.jpg";
import "./css/addtocart.css";
import { Addcart } from "./cart";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./header";
import Prodect from "./prodect";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const prodect = [
  {
    id: 0,
    image: logo,
    title: "Apple AirPods",
    price: 25000,
    rating: "4.5",
  },
  {
    id: 1,
    image: logo1,
    title: "Apple i phone 14 pro",
    price: 125000,
    rating: "4.5",
  },
  {
    id: 2,
    image: logo3,
    title: "Apple watch 8",
    price: 28000,
    rating: 4,
  },
  {
    id: 3,
    image: logo4,
    title: "OnePlus11R",
    price: 44000,
  },
  {
    id: 4,
    image: logo5,
    title: "Samsung Galexy S23 Ultra ",
    price: 62000,
  },
];

function AddToCart() {
  const [item, setItem] = useState([]);

  const addtask = (p) => {
    const proExit = item.find((item) => item.id === p.id);

    if (proExit) {
      setItem(
        item.map((item) =>
          item.id === p.id ? { ...proExit, quanty: proExit.quanty + 1 } : item
        )
      );
    } else {
      setItem([...item, { ...p, quanty: 1 }]);
    }
  };
  const increase = (items) => {
    const proExit = item.find((item) => item.id === items.id);
    setItem(
      item.map((item) =>
        item.id === items.id ? { ...proExit, quanty: proExit.quanty + 1 } : item
      )
    );
  };
  const decreass = (items) => {
    const proExit = item.find((item) => item.id === items.id);
    if (items.quanty !== 1) {
      setItem(
        item.map((item) =>
          item.id === items.id
            ? { ...proExit, quanty: proExit.quanty - 1 }
            : item
        )
      );
    }
  };
  const remove = (index) => {
    const newtask = [...item];
    newtask.splice(index, 1);
    setItem(newtask);
  };
  return (
    <BrowserRouter>
      <Header lrs={item.length} />
      <Routes>
        <Route
          path="/"
          element={<Prodect prodects={prodect} addtask={addtask} />}
        ></Route>
        <Route
          path="/cart"
          element={
            <Addcart
              item={item}
              increase={increase}
              decreass={decreass}
              remove={remove}
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default AddToCart;
