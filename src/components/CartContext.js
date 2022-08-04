import React, { useContext } from 'react';
import  { useState } from 'react'

export const CartContext = React.createContext([]);

 export const useCartContext = () => useContext(CartContext)
  
export const CartContextProvider = ({children})=>{
//carList es el estado local, es decir el estado del componente CartContextProvider. lo pongo en el value para que todos tengan acceso a él (array vacio).

const [cartList, setCartList] = useState ([]);

console.log("CARRITO:", cartList);

const addToCart =(item, quantity) =>{
 if (isInCart(item.id)){
    setCartList(cartList.map(productos => {
         return productos.id === item.id ? {...productos, quantity: productos.quantity + quantity} : productos
    }));
 } else {
    setCartList ([...cartList, {...item, quantity}])
 }
}

const totalPrice = () => {
    return cartList.reduce((prev, act) => prev + act.quantity * act.precio, 0)
}
const totalProductos = () => cartList.reduce((acumulador, productoActual)=> acumulador + productoActual.quantity, 0);
const clearCart = () => setCartList ([]);
const isInCart = (id) => cartList.find(productos => productos.id === id) ? true : false;
const removeProduct = (id) => setCartList(cartList.filter(productos => productos.id !== id))

//funcion global. El componente que la use nos tendra que dar el item, es decir el producto que se quiera agregar al estado
   


return (
        <CartContext.Provider value={{
         addToCart,
         clearCart,
         isInCart,
         removeProduct,
         totalPrice,
         totalProductos,
         cartList}}>
                {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider