import React from 'react'
import CartContext from './CartContext'
import { useContext } from 'react'
import ItemDetail from './ItemDetail'

const Cart = () => {
  const test = useContext(CartContext)
  //console.log(test.cartList)
  return (
    <> 
    <div>Soy el Carrito</div>
    {
        test.cartList.length > 0 && test.cartList.map(item => ( <ItemDetail></ItemDetail>))
    }
   
    </>
  
  )
}

export default Cart