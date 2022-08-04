import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
    return (
      <>
      <nav class="navbar navbar-expand-lg navbar-light bg-orange navBar">
  <div class="container-fluid">
 <Link to="/" ><img src="./logoo.jpg" width="75" height="75"></img>
  <span className="init"> <a className="navbar-brand" href="#">Milano Beers & Cheers</a></span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
     
      <ul className="navbar-nav">

        <li className="nav-item">
        <Link to='/category/1'> <a className="nav-link" href="#">Cervezas</a></Link>
        </li>
        <li className="nav-item">
        <Link to='/category/5'><a className="nav-link" href="#">Energizantes</a></Link>
        </li>
        <li className="nav-item">
        <Link to='/category/2'><a className="nav-link" href="#">Vinos</a></Link> 
        </li>
        <span className="fin">
        <li className="nav-item">
          <a className="nav-link" href="#">Buscar</a>
        </li>
        </span>

        <span className="fin">
        <li className="nav-item">
          <Link to="/cart" className="nav-link" href="#"> 
            <CartWidget></CartWidget>
            </Link>
        </li>
        </span>

      </ul>
    </div>
  </div>

</nav>
      
      </>
    );
  }
  
  export default NavBar;
  