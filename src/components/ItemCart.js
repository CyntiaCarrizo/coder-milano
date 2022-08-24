import React from 'react'
import { useCartContext } from './CartContext'

const ItemCart = ({product}) => {
const {removeProduct}= useCartContext()

  return (
    <div className='itemCart'>
      <div className='cart-img'>
         <img src={product.imagen}  ></img>
      </div>   
      <div className='itemscard'>
        <p>Producto: {product.nombre} </p>
        <p>Cantidad: {product.quantity} </p>
        <p>Precio Unidad: {product.precio} </p>
        <p>SubTotal:  ${product.quantity *  product.precio} </p>
        </div>
        <div className='remove'>
        <button  onClick={()=> removeProduct(product.id)} >Eliminar</button>
      </div> 
    </div>
  )
}

export default ItemCart