function NavBar() {
    return (
      <>
      <nav class="navbar navbar-expand-lg navbar-light bg-orange navBar">
  <div class="container-fluid">
  <img src="./logoo.jpg" width="75" height="75"></img>
  <span className="init"> <a className="navbar-brand" href="#">Milano Beers & Cheers</a></span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
     
      <ul className="navbar-nav">

        <li className="nav-item">
         <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Compras Mayoristas</a>
        </li>
        <span className="fin">
        <li className="nav-item">
          <a className="nav-link" href="#">Buscar</a>
        </li>
        </span>

        <span className="fin">
        <li className="nav-item">
          <a className="nav-link" href="#">Mi Carrito</a>
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
  