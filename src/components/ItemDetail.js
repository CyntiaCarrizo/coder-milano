import { useState} from "react"
import ItemCount from "./ItemCount"
import {  Link } from "react-router-dom";
import { useCartContext } from "./CartContext";






const ItemDetail=({detail })=>{

   const[BotonActivo, setBotonActivo]=useState(false)
            
       
   const {addToCart} = useCartContext();

   const onAdd=(quantity)=>{
          
          
  alert(`La cantidad de productos seleccionado es: ${quantity} ${detail.nombre} `)
      
     setBotonActivo(true)
      addToCart(detail, quantity)
   
    }

    return(
      <>
      <div className="ItemDetail">
       <div className="details">
        <div className="big-img">
        <img style={{width: "250px", height:"350px"}}  src={detail.imagen} class="card-img-top" alt="..."></img>
        </div>
          <div className="box">
            <div className="row">
              <h3>{detail.nombre}</h3>
              <span>${detail.precio}</span>
            </div>
               <p>{detail.descripcion}</p>
                <p>Stock Disponible: {detail.stock}</p>
                
                {
                BotonActivo? <Link to={"/cart"}> <button className="cart" >Finalizar compra  </button></Link> : <ItemCount initial={1} stock={detail.stock} onAdd={onAdd}  ></ItemCount>
             }
             
          </div>
      </div>
      </div>
    
      </>
            
          
  )
}

        
export default ItemDetail;