import ItemCount from "./ItemCount"
const { product}= require ('./CustomFech')


const ItemDetail=({nombre, precio, stock, descripcion, imagen, product})=>{
    
 
        return(
            <div className="card border-success mb-3" >
                <img className="Tarjeta-detalles" src={product.imagen} class="card-img-top" alt="..."></img>
                <div className="card-header bg-transparent border-success">{product.nombre}</div>
                <div className="card-body text-success">
                <p className="card-title">${product.precio}</p>
                <p className="Detalles">{product.descripcion}</p>
                </div>
                <div className="card-footer bg-transparent border-success">Stock Disponible: {product.stock}</div>
                {
                        <ItemCount initial={0} stock={5} ></ItemCount>
                }
            </div>
          
        )
    }
    
export default ItemDetail