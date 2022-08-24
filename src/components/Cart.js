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
      <h3>No hay elementos en el carrito </h3>
      <Link className='Link' to="/"><button className='button-cart'>Hacer compras</button> </Link>
      </>
    );
    
  }
  return (
   <>
   <div className='cart'>
    <Link className='Link' to={"/"}><button className='button-cart' >Continua Comprando</button> </Link>
   {
    cartList.length> 0
    ? <button className='button-cart' onClick={clearCart} >Borrar todos los Productos</button>
    : <p>Tu carrito esta vacio</p>
   }
   
   {
    
   cartList.map(product => <ItemCart key={product.id} product={product}> </ItemCart>)
                                                        
   }
   <p className='total'>Total: {totalPrice()} </p>
   <button className='button-cart' onClick={createOrder}>Orden de compra</button>
  
  
   </div>
   
   </>
  
  )
}

export default Cart