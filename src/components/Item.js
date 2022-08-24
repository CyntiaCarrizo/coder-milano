import { Link } from "react-router-dom"


const Item = ({info})=>{


    return(
    <>
    <section className="products">
        <div className="box-container">
          <div className="box">
            <div className="image">
              <img style={{width: "250px", height:"350px"}} src={info.imagen} class="card-img-top" alt="..."/>
              <div className="icons">
              <Link to={`/item/${info.id}`}>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tag" viewBox="0 0 16 16">
                     <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z"/>
                    <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1zm0 5.586 7 7L13.586 9l-7-7H2v4.586z"/>
                  </svg> </Link>
                  
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                      </svg>
                 
                   </div>
            </div>
            <div className="content">
              <h3>{info.nombre}</h3>
              <div className="price"> Precio:{info.precio} </div>
              <div className="price">Stock disponible:{info.stock} </div>
            </div>
          </div>
           </div>
      </section>
    
    </>
 
      
    )
}

export default Item