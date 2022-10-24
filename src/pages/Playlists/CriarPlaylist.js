// POST
// criar uma playlist do usuario
import axios from "axios";
import { useEffect, useState } from "react";
// import { Container, Form } from 'react-bootstrap'

function CriarPlaylist() {
    const [playlists, setPlaylists] = useState([])

    const baseURL = "http://localhost:3001/playlists-privadas"


    useEffect(() => {
      async function createPlaylist() {
        const res = await axios.post("http://localhost:3001/playlists-privadas");
        setPlaylists(res.data);
    }
    createPlaylist();
    }, [])

    


    // mostrar capa e nome

    // encontrar musicas -> get passando o find

    // inserir/excluir musicas -> post/delete


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
        <div className="container-fluid h-100">
          <div className="row justify-content-center h-100">
            <div className="col-4 text-white">
            <div className="col-4 text-white">
              <div id="">
                <h4>Playlists Privadas</h4>
                <div className="container">
                  <br />
                  <div className="row">
                   
                    <div>Capa da Playlist</div>
                    <div>Nome da Playlist</div>
                  </div>
                  
                </div>
              </div>
            </div>

            </div>

            <div className="col-4 text-white">
              <div>Listagem de musicas</div>
              <div>musica</div>
                    <div>musica</div>
                    <div>musica</div>
                    <div>musica</div>
                    <div>musica</div>
                    <div>musica</div>
                    <div>musica</div>
                    <div>musica</div>
                    <div>musica</div>
            </div>


            <div className="col-4 text-white">
              <div>Buscar</div>
            </div>

          </div>
          </div>
        </div>
        </div>
      </div>)

}

export default CriarPlaylist