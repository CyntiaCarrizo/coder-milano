import  {  createContext, useState } from 'react'

export const CartContext = createContext();
  
const CartContextProvider = ({children})=>{
//carList es el estado local, es decir el estado del componente CartContextProvider. lo pongo en el value para que todos tengan acceso a él (array vacio).

const [cartList, setCartList] = useState ([])

const addToCart =(product) =>{
    setCartList([...cartList, product])
}//funcion global. El componente que la use nos tendra que dar el item, es decir el producto que se quiera agregar al estado
   
const removeToCart = () =>{
    setCartList.reduce((total, setCartList => total -= setCartList, total), 0)
}

return (
        <CartContext.Provider value={{cartList, addToCart, removeToCart}}>
                {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider