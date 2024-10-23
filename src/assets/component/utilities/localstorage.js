const getStoredCart = () =>{
  const storedCartString = localStorage.getItem('cart');
  if(storedCartString){
    return JSON.parse(storedCartString)
  }
  return [];
};


const saveCarttoLS = cart =>{
  const cartstringified = JSON.stringify(cart);
  localStorage.setItem('cart',cartstringified);
}


const addToLS = id =>{
  const cart = getStoredCart();
  cart.push(id);
  // save to local storage 
  saveCarttoLS(cart);
}


export {addToLS ,getStoredCart}