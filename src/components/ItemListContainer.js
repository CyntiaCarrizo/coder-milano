import ItemCount from "./ItemCount"

function ItemListContainer(props){
    
    const onAdd=(cantidad)=>{
        alert(`La cantidad de productos seleccionado es: ${cantidad}`)
    }
    return(
        <>
        <p>
        {props.greeting}
        </p>
        <div className="itemCount">
        <ItemCount  stock={5} initial={0} onAdd={onAdd}></ItemCount>
        </div>
        </>
    )
}

export default ItemListContainer