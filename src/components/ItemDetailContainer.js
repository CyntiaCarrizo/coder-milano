import React from 'react';
import { useEffect, useState } from "react";
import customFetch from './CustomFech';
//const { product}= require ('./CustomFech');
//import product from './Products';
//import { product } from './CustomFech';
//import ItemDetail from './ItemDetail';
import {  useParams } from "react-router-dom";
import "../CSSpersonal/Csspersonalizado.css"
import ItemListDetail from './ItemListDetail';



const ItemDetailContainer = () => {



  const[detail, setDetail] = useState(false)
  const {idItem} = useParams()


  useEffect(()=>{
      if (idItem === undefined) {
            customFetch()
      .then(result =>setDetail(result))

      .catch(err => console.log(err))
      
      }else{
          customFetch()
        .then((result) =>{
          const productoFiltrado= result.filter((item)=>{
            return item.id === parseInt(idItem);
          });
          setDetail(productoFiltrado[0])
        })
          .catch(err => console.log(err))
          
         
      }
    
  },[idItem])

  return(
      <>
    
    
      <ItemListDetail product={detail} id={idItem}></ItemListDetail>
     
     
    
      </>
  )
  
}

export default ItemDetailContainer

