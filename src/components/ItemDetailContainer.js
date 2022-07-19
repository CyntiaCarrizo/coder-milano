import React from 'react'
import customFetch from './CustomFech';
import ItemDetail from './ItemDetail';
import { useEffect, useState } from "react"
const { product}= require ('./CustomFech')

const ItemDetailContainer = () => {



  const [datos, setDatos] = useState({});
    
    
  useEffect(()=>{
    customFetch(2000, product)
    .then(results=> setDatos (results[2]))
    .catch(err=> console.log (err))
  },[]);
  
  console.log (datos, "soy la data")
  

  return(
      <>
    
    
      <ItemDetail product={datos}></ItemDetail>
     
     
    
      </>
  )
  
}

export default ItemDetailContainer

