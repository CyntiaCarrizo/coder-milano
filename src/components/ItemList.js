import { useEffect } from "react"
import Item from "./Item"

const ItemList=({datos =[]})=>{

  //useEffect(()=>{
    //ComponentDidMount
  //  console.log("ItemList Renderizado en componentDidMount")
 // },[])
  
  //useEffect(()=>{
    //ComponentDidUpdate
  //  console.log("ItemList Renderizado en componentDidUpdate")
  //},[product])


    return( datos.map(item => <Item key={item.id} info={item} /> )
           
            
       
         
                )
}

export default ItemList