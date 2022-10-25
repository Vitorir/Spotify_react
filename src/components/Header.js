import { Link } from "react-router-dom";


function Header(){
    return(
        <header>
      <nav className="navbar navbar-expand-sm bg-black navbar-dark text-center">
        <Link className="navbar-brand" to="/"><img src="img/Spotify_Logo_RGB_White.png" alt="Início" width="150" height="75"/></Link>
        <div className="container-fluid justify-content-end">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link className="nav-link" to="/faq">Suporte</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Inscrever-se</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signin">Entrar</Link> 
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Profile">Perfil</Link> 
            </li>
          </ul>
        </div>
      </nav>
    </header>
    )
}

export default Header;