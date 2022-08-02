//import ItemCount from "./ItemCount"
import ItemList from "./ItemList"

import { useEffect, useState } from "react"
import { promesa } from "./Products"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";
import "../CSSpersonal/Csspersonalizado.css"







function ItemListContainer(greeting){
   
   /* const onAdd=(cantidad)=>{
        alert(`La cantidad de productos seleccionado es: ${cantidad}`)
    }*/
    
    const [datos, setDatos] = useState({});
    const [prueba, setPrueba] = useState(false);
    const {idCategory} = useParams();
   
    
    //componentDiUpdate
    useEffect(()=>{
       console.log("Item List Conteiner Renderizado ")
        if(idCategory=== undefined){
              async function pedirDatos(){
                let datosLlegando = await promesa();
                 setDatos(datosLlegando)
               //  console.log(idCategory)
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
  
},[idCategory, prueba])



//CompomnentWillUnmount
    useEffect(()=>{
        
        return (()=> {
            setDatos([])
        })
    },[]);
    
   

    return(
        <>
        <p>
        {greeting.greeting}
        </p>
        <button class="btn btn-primary" type="button" onClick={()=>setPrueba(!prueba)}>Cambiar de estado</button>
        <ItemList product={datos}></ItemList>
       { /*<ItemCount stock={5} initial={1} onAdd={onAdd}></ItemCount>*/}
      
        </>
    )
}

export default ItemListContainer