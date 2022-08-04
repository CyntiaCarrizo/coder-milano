import React from 'react'
import { useCartContext } from './CartContext'

const ItemCart = ({product}) => {
const {removeProduct}= useCartContext()

  return (
    <div className='itemCart'>
        <img src={product.imagen}  ></img>
        <p>Producto: {product.nombre} </p>
        <p>Cantidad: {product.quantity} </p>
        <p>Precio Unidad: {product.precio} </p>
        <p>SubTotal:  ${product.quantity *  product.precio} </p>
        <button onClick={()=> removeProduct(product.id)} >Eliminar</button>
    </div>
  )
}

export default ItemCart