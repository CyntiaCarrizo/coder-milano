import ItemDetail from "./ItemDetail"




function ItemListDetail({product}){
    console.log(product, "soy el item list detail")
    return(
        <>
        {
            product.length > 0
            ? product.map(itemD => <ItemDetail key={itemD.id} 
                                        nombre={itemD.nombre}
                                        price={itemD.precio}
                                        stock={itemD.stock}
                                        descripcion={itemD.descripcion}
                                        image={itemD.imagen}/> )
            : <p>Cargando</p>

            }
       
            </>
                )
}

export default ItemListDetail