import { useContext, useState} from "react"
import ItemCount from "./ItemCount"
import {  Link } from "react-router-dom";

import { useCartContext } from "./CartContext";






const ItemDetail=({detail })=>{

           const[BotonActivo, setBotonActivo]=useState(false)
            
       
           const {addToCart} = useCartContext();

           const onAdd=(quantity)=>{
          
          
       alert(`La cantidad de productos seleccionado es: ${quantity} ${detail} `)
      
     setBotonActivo(true)
      addToCart(detail, quantity)
    }

    return(
                 <div className="card border-success mb-3" >
                <img style={{width: "450px", height:"550px"}} className="Tarjeta-detalles" src={detail.imagen} class="card-img-top" alt="..."></img>
                <h5 className="card-title">{detail.nombre}</h5>
                <div className="card-body text-success">
                 <p className="Detalles">{detail.descripcion}</p>
                 <p className="card-title">${detail.precio}</p>
               
                </div>
                <p className="card-text Detalles ">Stock Disponible: {detail.stock}</p>
              
             {
             BotonActivo? <Link to={"/cart"}> <button  >Finalizar compra  </button></Link> : <ItemCount initial={0} stock={5} onAdd={onAdd}  ></ItemCount>
             }
          
             </div>
          
  )
}

        
export default ItemDetail;