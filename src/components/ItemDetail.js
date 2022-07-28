import { useState} from "react"
import ItemCount from "./ItemCount"
import {  Link } from "react-router-dom";




const ItemDetail=({nombre, precio, stock, descripcion, imagen, product})=>{

            const[BotonActivo, setBotonActivo]=useState(false)
        
      const onAdd=(rate)=>{
       alert(`La cantidad de productos seleccionado es: ${rate} `)
       //console.log(rate)
        if(rate>0){
        setBotonActivo(!BotonActivo)
       } 
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
               <ItemCount initial={0} stock={5} onAdd={onAdd}  ></ItemCount>
                
               }
             {
             <Link to={"/Cart"}> <button disabled={!BotonActivo} >Finalizar compra</button></Link> 
             }
             </div>
          
  )
}
        
    
export default ItemDetail