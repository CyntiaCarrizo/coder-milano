

import ItemDetail from "./ItemDetail"



function ItemListDetail({product, id, nombre}){
     console.log(product, `soy el item list detail del producto ${nombre} e id ${id}`)
    return(
        <>
        {
           product.id === parseInt(id) ? (<ItemDetail 
                                            id={product.id} 
                                            nombre={product.nombre} 
                                            precio={product.precio} 
                                            descripcion={product.descripcion} 
                                            imagen={product.imagen} 
                                            stock={product.stock}
                                            ></ItemDetail>) : ("cargando") 
                                            
        }
        
   </>
   
                )

               
}

export default ItemListDetail