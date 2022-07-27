import { useState, useEffect } from "react"
import ItemCount from "./ItemCount"
import {  useParams } from "react-router-dom";
import customFetch from './CustomFech';
import FinalizarCompra from "./FinalizarCompra";



const ItemDetail=({nombre, precio, stock, descripcion, imagen, product})=>{

            const[data, setData]=useState(0)
            const[visible, setVisible]=useState(false)
            const {cart} = useParams()
 
      const onAdd=(cantidad)=>{
       alert(`La cantidad de productos seleccionado es: ${cantidad}`)
      }


        useEffect(()=>{
             let estado;

      if (visible) {
        estado = (data!==0 && onAdd !==0);
        setData(data);

       
      } else {
        setData(!data)
      }

     return()=>{
            
            
            console.log("fase de desmotaje", estado)
     };
        

 
    },[visible])
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
                    visible && <FinalizarCompra cantidad={data} onClick={()=>setVisible(true)}></FinalizarCompra>
                }
                {

                        <ItemCount initial={0} stock={5} onAdd={onAdd} onClick={()=>setVisible(false)}></ItemCount>
                }
            </div>
          
  )
}
        
    
export default ItemDetail