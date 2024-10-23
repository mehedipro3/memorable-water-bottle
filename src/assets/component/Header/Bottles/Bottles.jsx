import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCart } from "../../utilities/localstorage";
import Cart from "../../Cart/Cart";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('bottle.json')
      .then(res => res.json())
      .then(data => setBottles(data))
  }, [])

  useEffect(() => {
    console.log(bottles.length);
    if (bottles.length > 0) {
      const storedCart = getStoredCart();
      // console.log(storedCart,bottles);
      const savedCart= [];
      for(const id of storedCart){
        console.log(id);
        const bottle = bottles.find(bottle=>bottle.id===id);
        if(bottle){
          savedCart.push(bottle);
        }
        
      }
      // console.log(savedCart);
      setCart(savedCart);
    }

  }, [bottles])

  const handleVisitedBottles = bottle => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLS(bottle.id);

  }

  return (
    <div>
      <h3>Bottles : {bottles.length}</h3>
      
        <Cart cart={cart}></Cart>

      <div className="bottle-container">
        {
          bottles.map(bottle => <Bottle
            key={bottle.id}
            bottle={bottle}
            handleVisitedBottles={handleVisitedBottles}
          ></Bottle>)
        }
      </div>
    </div>
  );
};

export default Bottles;