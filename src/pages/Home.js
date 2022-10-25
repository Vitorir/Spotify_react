import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CriarPlaylist from "./Playlists/CriarPlaylist";
// import playlists from "./Playlists/playlists";

function Home() {

  const [playlists, setPlaylists] = useState([]);

  useEffect( () => { //
      axios.get("http://localhost:3001/playlists").then( (res) => { // chamada assincrona; retorna uma promise
      setPlaylists(res.data); // registra nessa promessa obj de resposta do http
  }) // quando atualizar o state, ele atualiza as playlists
  }, []) // vai ter que encadear mts promises

  // Playlists publicas
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



// PLaylists privadas
const [privadas, setPrivadas] = useState([])

useEffect( () => { //
  axios.get("http://localhost:3001/playlists-privadas").then( (res) => {
  setPrivadas(res.data);
}) 
}, []) 



const data = privadas.map( (play) => {
  return (
  <>
      <Link to={`/playlists-privadas/${play.id}`} className="w-25 p-3">
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
              <a className="nav-link" href="/">
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
            <Link to={"/CriarPlaylist"}> <li className="nav-item">
              <a className="nav-link" href="/criarplaylist">
                <img
                  src="./img/playlist.png"
                  alt="Criar Playlist"
                  width="25"
                  height="25"
                />{" "}
                Criar Playlist
              </a>
            </li></Link>
          </ul>
        </div>
        <div className="col-10 bg-dark text-white">
          <div className="">
            <div id="">
              <h4>Playlists Públicas</h4>
              <div className="container">
                <br />
                <div className="row">
                 
                  <div className="col-sm-12 card-group"> 
                    {dados}
                  </div>
                  
                </div>
              </div>

              <h4>Playlists Privadas</h4>
              <div className="container">
                <br />
                <div className="row">
                 
                  <div className="col-sm-12 card-group"> 
                    {data}
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