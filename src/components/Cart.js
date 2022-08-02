import React from 'react'
import CartContext from './CartContext'
import { useContext } from 'react'

const Cart = () => {
  const test = useContext(CartContext);
  console.log(test.cartList)
  return (
    <> 
    <div>Soy el Carrito</div>
    {/*
        test.cartList.length > 0 
        ? test.cartList.map(item => (<img image={product.imagen} class="img-thumbnail" alt="..."></img>)) 
        : ("No hay productos en el carrito")
  */ }
   
    </>
  
  )
}

export default Cart