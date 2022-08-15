import React from 'react';
import { useEffect, useState } from "react";
import ItemDetail from './ItemDetail';
import {  useParams } from "react-router-dom";
import "../CSSpersonal/Csspersonalizado.css"
import { doc, getDoc, getFirestore } from "firebase/firestore";



const ItemDetailContainer = () => {



  const[detail, setDetail] = useState({})
  const {idItem} = useParams()


  useEffect(()=>{
  
    const querydb= getFirestore();
     const queryDoc = doc(querydb, "products", idItem);
    getDoc(queryDoc)
    .then(res => setDetail({id: res.id, ...res.data()}))

    
  },[idItem])

  return(
      <>
    
    
      <ItemDetail detail={detail} id={idItem} ></ItemDetail>
     
     
    
      </>
  )
  
}

export default ItemDetailContainer

