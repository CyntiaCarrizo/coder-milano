import React from 'react';
import { useCartContext } from './CartContext';
import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';
import { collection, doc, increment, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../utils/firebaseConf';


const Cart = () => {
  
  const {cartList, totalPrice, clearCart} = useCartContext();

  const createOrder=()=>{
      
    let order={
        buyer: {
          name: "carrizo cyntia",
          email: "carrizocyntia22@gmail.com",
          phone: "123123"
        },
        date: serverTimestamp(),
        items: cartList.map(product => ({id: product.id, title: product.nombre, price: product.precio, quantity: product.quantity})),
        total: totalPrice(),

      }
    
      const createOrderInFirestore = async()=>{
        const newOrderRef = doc(collection(db, "orders"))
        await setDoc(newOrderRef, order)
        return newOrderRef
      }

      createOrderInFirestore()
        .then(result => alert(`Tu orden ha sido creada con exito. Tu numero de pedido es ${result.id}`))
        .catch(e=> console.log(e))

      cartList.forEach(async(product)=> {
        const productRef = doc(db, "products", product.id)
        await updateDoc(productRef, {
          stock: increment(-product.quantity)
        })
      });

       //borar el carrito   
       cartList.clearCart()
  }


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
   <Link to={"/"}> <button >Continua Comprando</button></Link>
   {
    cartList.length> 0
    ? <button onClick={clearCart} >Borrar todos los Productos</button>
    : <p>Tu carrito esta vacio</p>
   }
   
   {
    
   cartList.map(product => <ItemCart key={product.id} product={product}> </ItemCart>)
                                                        
   }
   <p>Total: {totalPrice()} </p>
   <button onClick={createOrder}>Orden de compra</button>
  
  
   </>
  
  )
}

export default Cart