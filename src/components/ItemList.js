
import Item from "./Item"

const ItemList=({datos =[]})=>{

      return( datos.map(item => <Item key={item.id} info={item} /> )
                )
}

export default ItemList