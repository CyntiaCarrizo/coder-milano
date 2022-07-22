import ItemCount from "./ItemCount"
import ItemList from "./ItemList"

import { useEffect, useState } from "react"
import  promesa  from "./Promise"
import customFetch  from "./CustomFech"
import { useParams } from "react-router-dom";





function ItemListContainer(greeting){
    
    const onAdd=(cantidad)=>{
        alert(`La cantidad de productos seleccionado es: ${cantidad}`)
    }
    
    const [datos, setDatos] = useState([]);
    const {idCategory} = useParams();
    
    useEffect(()=>{
        if(idCategory=== undefined){
              async function pedirDatos(){
                let datosLlegando = await customFetch();
                 setDatos(datosLlegando)
       }
       pedirDatos()
    }else{
        async function pedirDatos(){
            
            let datosLlegando = await promesa();
            let filtrar = datosLlegando.filter(item => item.categoryId === parseInt(idCategory))
           
            setDatos(filtrar)
             console.log(filtrar, datosLlegando, promesa())   
    
      }
         pedirDatos()
       
    }
  
},[idCategory])

console.log(idCategory)

    
    
   

    return(
        <>
        <p>
        {greeting.greeting}
        </p>
        <ItemList product={datos}></ItemList>
        <ItemCount stock={5} initial={1} onAdd={onAdd}></ItemCount>
      
        </>
    )
}

export default ItemListContainer