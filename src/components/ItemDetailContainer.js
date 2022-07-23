import React from 'react';
import { useEffect, useState } from "react";
import customFetch from './CustomFech';
//const { product}= require ('./CustomFech');
//import product from './Products';
import { product } from './CustomFech';
import ItemDetail from './ItemDetail';
import {  useParams } from "react-router-dom";
import "../CSSpersonal/Csspersonalizado.css"
import ItemListDetail from './ItemListDetail';



const ItemDetailContainer = () => {



  const[detail, setDetail] = useState([])
  const {idItem} = useParams()


  useEffect(()=>{
      if (idItem === undefined) {
            customFetch(2000, product)
      .then(result =>setDetail(result))

      .catch(err => console.log(err))
      
      }else{
          customFetch(2000, product.filter(item => item.id=== parseInt(idItem)))
        .then(result =>setDetail(result))
          .catch(err => console.log(err))
          console.log("detail", detail)
         
      }
    
  },[idItem])

  return(
      <>
    
    
      <ItemListDetail product={detail}></ItemListDetail>
     
     
    
      </>
  )
  
}

export default ItemDetailContainer

