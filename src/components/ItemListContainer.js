import ItemList from "./ItemList"
import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";
import "../CSSpersonal/Csspersonalizado.css"
import {getFirestore, collection, getDocs, query, where } from "firebase/firestore";






function ItemListContainer(greeting){
   
 
    
    const [datos, setDatos] = useState([]);
   
    const {idCategory} = useParams();
   
    
    
    useEffect(()=>{

     const querydb= getFirestore();
     const queryCollection = collection(querydb, "products");
         if(idCategory){
             const queryFilter = query(queryCollection, where("categoryId", "==", parseInt(idCategory)))
    getDocs(queryFilter)
        .then(res => setDatos (res.docs.map(product=> ({id: product.id, ...product.data() }))))
     }else{
        getDocs(queryCollection)
        .then(res => setDatos (res.docs.map(product=> ({id: product.id, ...product.data() }))))
     }
    
},[idCategory])

   

    return(
        <>
               <ItemList datos={datos}></ItemList>
          
        </>
    )
}

export default ItemListContainer