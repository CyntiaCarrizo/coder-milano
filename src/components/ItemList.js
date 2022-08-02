import { useEffect } from "react"
import Item from "./Item"

const ItemList=({product})=>{

  useEffect(()=>{
    //ComponentDidMount
    console.log("ItemList Renderizado en componentDidMount")
  },[])
  
  useEffect(()=>{
    //ComponentDidUpdate
    console.log("ItemList Renderizado en componentDidUpdate")
  },[product])


    return(
        <>
        {
            product.length > 0
            ? product.map((item, i ) => <Item key={i} 
                                        id={item.id}
                                        nombre={item.nombre}
                                        price={item.precio}
                                        stock={item.stock}
                                        descripcion={item.descripcion}
                                        imagen={item.imagen}/> )
            : <p>Cargando</p>

            }
       
            </>
                )
}

export default ItemList