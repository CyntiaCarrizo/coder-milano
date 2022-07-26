//import ItemDetail from "./ItemDetail"
//import ItemCount from "./ItemCount"

import ItemDetail from "./ItemDetail"




function ItemListDetail({product,  id, }){
    console.log(product, "soy el item list detail")
    return(
        <>
        {
           product.id === parseInt(id) ? <ItemDetail id={id} nombre={product.nombre} precio={product.precio} descripcion={product.descripcion} stock={product.descripcion} imagen={product.imagen} stock={product.stock}></ItemDetail> : "cargando"
           
       
        
        }

   </>
       
       
  
       




                )
}

export default ItemListDetail