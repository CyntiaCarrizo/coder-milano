import { useContext, useState} from "react"
import ItemCount from "./ItemCount"
import {  Link } from "react-router-dom";

import { CartContext } from "./CartContext";






const ItemDetail=({nombre, precio, stock, descripcion, imagen, product,rate,id })=>{

           const[BotonActivo, setBotonActivo]=useState(false)
            
       
            const test = useContext(CartContext)
   // const {addToCart} = useContext(CartContext)
           const onAdd=(rate,id)=>{
          
          
       alert(`La cantidad de productos seleccionado es: ${rate}  `)
      
     setBotonActivo(true)
   //  console.log(rate) 
   //let productosId = product.filter(el => el.id === product.id)
   //        console.log(productosId)
   test.addToCart(product)
   // console.log(product.id)
    }

    return(
                 <div className="card border-success mb-3" >
                <img style={{width: "450px", height:"550px"}} className="Tarjeta-detalles" src={imagen} class="card-img-top" alt="..."></img>
                <h5 className="card-title">{nombre}</h5>
                <div className="card-body text-success">
                 <p className="Detalles">{descripcion}</p>
                 <p className="card-title">${precio}</p>
               
                </div>
                <p className="card-text Detalles ">Stock Disponible: {stock}</p>
              
             {
             BotonActivo? <Link to={"/cart"}> <button  >Finalizar compra  </button></Link> : <ItemCount initial={0} stock={5} onAdd={onAdd} onClick={()=>onAdd(rate,id)} ></ItemCount>
             }
          
             </div>
          
  )
}

        
export default ItemDetail;