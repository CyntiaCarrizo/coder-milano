import ItemCount from "./ItemCount"




const ItemDetail=({nombre, precio, stock, descripcion, imagen, product})=>{
    const onAdd=(cantidad)=>{
        alert(`La cantidad de productos seleccionado es: ${cantidad}`)
      }

     
        return(

            <div className="card border-success mb-3" >
                <img className="Tarjeta-detalles" src={imagen} class="card-img-top" alt="..."></img>
                <div className="card-header bg-transparent border-success">{nombre}</div>
                <div className="card-body text-success">
                <p className="card-title">${precio}</p>
                <p className="Detalles">{descripcion}</p>
                </div>
                <div className="card-footer bg-transparent border-success">Stock Disponible: {stock}</div>
                {
                        <ItemCount initial={0} stock={5} onAdd={onAdd}></ItemCount>
                }
            </div>
          
        )
    }
    
export default ItemDetail