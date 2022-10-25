// criar uma playlist do usuario
import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Form } from 'react-bootstrap'
import { useParams } from "react-router-dom";

function CriarPlaylist() {
    const { id }= useParams(); 
    const [ play, setPlay ] = useState([])
    const [ musicas, setMusicas ] = useState([])
    const [ search, setSearch ] = useState("")

    const baseURL = "http://localhost:3001/playlists-privadas"


    // Criar playlist
    useEffect(() => {
      async function createPlaylist() {
        const res = await axios.post(`http://localhost:3001/playlists-privadas/${id}`);
        setPlay(res.data);
    }
    createPlaylist();
    }, [])

    function criar() {
      axios.post(`http://localhost:3001/playlists-privadas/`, { // onde passo os dados?
        id: "id",
        nome: "nome",
        capa: "capa",
      })
      .then(res => {
        setPlay(res.data);
    })
  }

    // get musicas
    useEffect(() => {
      async function fetchData() {
        const res = await axios.get("http://localhost:3001/musicas")
        setMusicas(res.data);
      }
      fetchData();
    }, [])


    // map das musicas
    const msc = musicas.map( m => {
      return (
            <audio controls>
                <source src={m.arquivo}></source>
            </audio>
    )})

    // map da playlist


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
      <h5>Criação de Playlist</h5>
        <div className="container-fluid h-100">
          <div className="row justify-content-center h-100">
            <div className="col-6 text-white">
            <div className="col-4 text-white">
              <div id="">
                <div className="container">
                  <br />
                  <div className="row">
                   
                    <div><img src="/img/album.png" width={150} height={150}></img></div>
                    <div><p>Nome da Playlist</p></div>
                      <div>
                        <h1>{play.nome}</h1>
                        <p>{play.capa}</p>
                        <button onClick={criar}>Criar</button>
                      </div>
                  </div>

                  <div>Lista de Músicas</div>
                  
                </div>
              </div>
            </div>

            </div>


            <div className="col-6 text-white">
              <div>Buscar</div>
              <Container>
                <Form.Control type="search" placeholder="Seach Songs" value={search} 
                onChange={e => setSearch(e.target.value)} width={50}></Form.Control>
              </Container>
              {msc}
            </div>

          </div>
          </div>
        </div>
        </div>
      </div>)

}

export default CriarPlaylist