import { useContext, useState} from "react"
import ItemCount from "./ItemCount"
import {  Link } from "react-router-dom";

import { CartContext } from "./CartContext";




const ItemDetail=({nombre, precio, stock, descripcion, imagen, product,rate })=>{

            const[BotonActivo, setBotonActivo]=useState(false)
            
            const test = useContext(CartContext)
    
            const onAdd=(rate)=>{
       alert(`La cantidad de productos seleccionado es: ${rate} `)
      
     setBotonActivo(true)
     test.addToCart(product)
     console.log(product)
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
             BotonActivo? <Link to={"/Cart"}> <button  >Finalizar compra  </button></Link> : <ItemCount initial={0} stock={5} onAdd={onAdd} onClick={()=>onAdd(rate)} ></ItemCount>
             }
          
             </div>
          
  )
}
        
    
export default ItemDetail