import ItemCount from "./ItemCount"
import {  useEffect, useState } from "react";
//import TerminarCompra from "./TerminarCompra"
 //import {   useState } from "react";




const ItemDetail=({nombre, precio, stock, descripcion, imagen, product})=>{
    const onAdd=(cantidad)=>{
        alert(`La cantidad de productos seleccionado es: ${cantidad}`)
      }

     const [data, setData]= useState(0)
      
     useEffect(()=>{
    
        const handleCompra =(e)=>{
           setData( !data)
      console.log(handleCompra)
        }
    
   },[data])

     
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

                      <ItemCount initial={0} stock={5} onAdd={onAdd}  > ???</ItemCount> 
        }
             <p>data</p>  
            </div>
          
        )
    }
    
export default ItemDetail