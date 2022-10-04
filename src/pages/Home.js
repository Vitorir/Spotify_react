import { Link } from "react-router-dom";
import playlists from "./Playlists/playlists";

function Home() {

  const dados = playlists.map( (play) => {
    return (
    <>
        <Link to={`/playlists/${play.id}`} className="w-25 p-3">
    <div
      className="card text-white bg-black mb-2"
      style={{maxwidth: '10rem'}}
    >
      <div className="card-header">{play.nome}</div>
      <div className="card-body">
        <img
          src={play.capa}
          className="card-img-top"
          alt=""
          width="100"
          height="100"
        />
      </div>
    </div>
    </Link>
  </>
    )
} );

  return (
    <div className="container-fluid h-100">
      <div className="row justify-content-center h-100">
        <div className="col-2 bg-black text-white">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="index.html">
                <img
                  src="./img/home2.png"
                  width="25"
                  height="25"
                  alt="Início da Página"
                />{" "}
                Início
                <br />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                <img
                  src="./img/search.png"
                  alt="Buscar"
                  width="25"
                  height="25"
                />{" "}
                Buscar
                <br />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                <img src="./img/books.png" alt="" width="25" height="25" />
                Sua Biblioteca <br />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                <img
                  src="./img/playlist.png"
                  alt="Criar Playlist"
                  width="25"
                  height="25"
                />{" "}
                Criar Playlist
              </a>
            </li>
          </ul>
        </div>
        <div className="col-10 bg-dark text-white">
          <div className="">
            <div id="">
              <h4>Playlists</h4>
              <div className="container">
                <br />
                <div className="row">
                 
                  <div className="col-sm-12 card-group"> 
                    {dados}
                  </div>
                  
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home




