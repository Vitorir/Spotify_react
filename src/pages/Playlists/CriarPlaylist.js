// criar uma playlist do usuario
import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Form } from 'react-bootstrap'
import { useParams } from "react-router-dom";

function CriarPlaylist() {
    const { id }= useParams(); 
    const [ play, setPlay ] = useState([])
    const [ musicas, setMusicas ] = useState([])
    const [ musicasSelecionadas, setMusicasSelecionadas ] = useState([])
    const [ search, setSearch ] = useState("")
    const [ capa, setCapa ] = useState("")
    const [ nome, setNome ] = useState("")
//    const [ register, handleSubmit, formState ] = useForm()

    const baseURL = "http://localhost:3001/playlists-privadas"


    // POST - Criar playlist
      async function createPlaylist() {
        const res = await axios.post(`http://localhost:3001/playlists-privadas/${id}`);
        setPlay(res.data);
    }

    function criar() { // como passo os dados?
      axios.post(`http://localhost:3001/playlists-privadas/`, { 
        nome: nome,
        capa: capa,
        musicas: []
      })
      .then(res => {
        setPlay(res.data);
    })
  }
  
  function alterarCapa() {
    axios.patch(`http://localhost:3001/playlists-privadas/${id}`, {
      capa: {capa}
    })
    .then(res => {
      setCapa(res.data);
    })
  }

  function alterarNome() {
    axios.patch(`http://localhost:3001/playlists-privadas/${id}`, {
      nome: {nome}
    })
    .then(res => {
      setNome(res.data);
    })
  }

    // GET musicas
    useEffect(() => {
      async function fetchData() {
        const res = await axios.get("http://localhost:3001/musicas")
        setMusicas(res.data);
      }
      fetchData();
    }, [])

    // PUT - update post
    function updatePost() {
      axios.put(`http://localhost:3001/playlists-privadas/${id}`, {
        id: id,
        nome: nome,
        capa: capa,
        musicas: musicasSelecionadas
      })
    }

    function addMusica(musica) {
      const atualizado = [...musicasSelecionadas, musica];
      setMusicasSelecionadas(atualizado)
    }

    // map das musicas
    const msc = musicas.map( m => {
      return (
        <div> 
          <p>{m.nome}</p>
            <audio controls>
              <source src={m.arquivo}></source>
            </audio>
            <button onClick={updatePost} type="button" class="btn btn-light">Inserir</button>
        </div>

    )})

    // map da playlist


    // Filtrar



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
                   
                    <div>
                      <img src="/img/album.png" width={150} height={150}></img>
                      <input placeholder="URL da Capa" value={capa} onChange={e => setCapa(e.target.value)}></input>
                      <button onClick={alterarCapa} type="submit" class="btn btn-light">Alterar Capa</button>
                    </div>

                    <div>
                    <label>Nome da Playlist</label>
                    <input placeholder="Nome da Playlist" value={nome} onChange={e => setNome(e.target.value)}></input>
                    <button onClick={alterarNome} type="submit" class="btn btn-light">Alterar Nome</button>
                    </div>

                      <div>
                        <h1>{play.nome}</h1>
                        <p>{play.capa}</p>
                        <button onClick={criar} type="submit" class="btn btn-secondary">Criar</button>
                      </div>
                  </div>

                  <div>
                    Play.musicas
                    {musicasSelecionadas.map(m => <p>m.nome</p>)}
                  </div>
                  
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