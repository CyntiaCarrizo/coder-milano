import { useEffect, useState } from "react";


const ItemCount = ({initial = 1, stock = 5 , onAdd})=>{

    const [rate, setRate] = useState(1);

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
        <div class="d-grid gap-2 d-md-flex justify-content-md-start ItemCount">
             <button class="btn button-count me-md-2" type="button" onClick={()=>increment()}>+</button>
             <p>Cantidad: <span>{rate}</span></p>
             <button class="btn button-count" type="button" onClick={()=>decremento()}>-</button>
       
                   {
                    stock
                    ? <button class="btn button-count "  type="button"  onClick={()=> onAdd(rate)}>Agregar al Carrito</button>
                    : <button class="btn button-count" type="button">No hay stock disponible</button>
             }
             
            
          
             
         </div>
        </>

    )
}

export default ItemCount;