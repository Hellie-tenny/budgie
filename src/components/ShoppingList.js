import React from "react";
import { useState, useEffect } from "react";

export default function ShoppingList() {

  const [pockets, setPockets] = useState([]);
  const [price, setPrice] = useState(0);
  const [item, setItem] = useState("");

  const shoppingList = [
    {
      item: "Computer",
      price: 10000
    },
    {
      item: "Computer",
      price: 10000
    },
    {
      item: "Computer",
      price: 10000
    }
  ];

  function addToCart() {
    // shoppingList = [...shoppingList, {item: item, price: price}];
  }

  useEffect(() => {
    if (!localStorage.getItem("pockets")) {
      // object approach sample array of objects
      setPockets(
        [
          {
            name: "cash",
            value: 0
          },
          {
            name: "bank",
            value: 0
          },
          {
            name: "airtel money",
            value: 0
          },
          {
            name: "mpamba",
            value: 0
          }
        ]
      );

      console.log("The local storage was empty, therfore pockets were set to detault value!", pockets);

    } else {
      setPockets(JSON.parse(localStorage.getItem("pockets")));
      console.log("The local storage was found, this is the value", pockets)
    }
  }, [])

  return (
    <div className="shopping-list">

      <form>
        <input id="item" type="text" placeholder="Item" onChange={setItem((e) =>e.target.value)} /> 
        <input type="text" id="price" placeholder="Price" onChange={(e) => setPrice(e.target.value)}/>
        <button onClick={addToCart}>Add</button>
      </form>

      <table>
        {shoppingList.map((item) => <tr><td>{item.item}</td><td>{item.price}</td></tr>)}
      </table>
    </div>
  );
}