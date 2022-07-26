import { useEffect, useState } from "react";
//import TerminarCompra from "./TerminarCompra";

const ItemCount = ({initial = 0, stock = 5, onAdd})=>{

    const [rate, setRate] = useState(0);
    
    
    useEffect(()=>{
        setRate(initial);
    },[])

    const increment = () =>{
        if (rate < stock){
            setRate(rate+1);
        }
    }

    const decremento = () =>{
        if(rate <= stock && rate > initial){
            setRate(rate-1);
        }
    }

    

    return(
        <>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
             <button class="btn btn-primary me-md-2" type="button" onClick={increment}>+</button>
             <p>Cantidad: <span>{rate}</span></p>
             <button class="btn btn-primary" type="button" onClick={decremento}>-</button>
            
                 
                   {
                    stock
                    ? <button class="btn btn-primary "  type="button" onClick={()=> onAdd(rate)} >Agregar al Carrito</button>
                    : <button class="btn btn-primary" type="button" >Agregar al Carrito</button>
             }
             
            
          
             
         </div>
        </>

    )
}

export default ItemCount;
