import  {  createContext, useState } from 'react'

export const CartContext = createContext();
  
export const CartContextProvider = ({children})=>{
//carList es el estado local, es decir el estado del componente CartContextProvider. lo pongo en el value para que todos tengan acceso a él (array vacio).

const [cartList, setCartList] = useState ([])

const addToCart =(product) =>{
    const inCart = cartList.find((productInCart)=> productInCart.id === product.id)
    if (inCart){
        setCartList(
            cartList.map((productInCart)=> {
                if (productInCart.id === product.id ) {
                    return{...inCart, amount: inCart.amount + 1} 
                }else return productInCart;
            })
        )
       // setCartList([...cartList, {
       // id: product.id,
       // name: product.nombre,
       // imagen: product.imagen,
       // price: product.stock,
       // cantidad: rate
   // }])
    }else{
        setCartList([...cartList, {...product, amount: + 1}])
    
}
}

const deleteItemCart = (product) => {
    const inCart= cartList.find((productInCart)=> productInCart.id === product.id);
    if (inCart.amount === 1) {
        setCartList(
            cartList.filter((productInCart)=> productInCart.id !== product.id)
        );
        
    } else{
        setCartList((productInCart)=> {
            if (productInCart.id === product.id ) {
                return{...inCart, amount: inCart.amount - 1}
            } else   return productInCart;
            })
        }
     
    }


//funcion global. El componente que la use nos tendra que dar el item, es decir el producto que se quiera agregar al estado
   


return (
        <CartContext.Provider value={{cartList, addToCart, deleteItemCart}}>
                {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider