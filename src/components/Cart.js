import React, { useContext } from 'react';
import { useCartContext } from './CartContext';
import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';

const Cart = () => {
  const {cartList, totalPrice} = useCartContext();

  if (cartList.length === 0){
    return (
      <>
      <p>No hay elementos en el carrito </p>
      <Link to="/">Hacer compras</Link>
      </>
    );
    
  }
  return (
   <>
   {
   cartList.map(product => <ItemCart key={product.id} product={product}></ItemCart>)
   }
   <p>Total: {totalPrice()} </p>
   </>
  
  )
}

export default Cart