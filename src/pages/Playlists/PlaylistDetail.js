import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import playlists from "./playlists";
// percorrer com id x e mostrar as musicas()

function PlaylistDetail() {
    const { id }= useParams(); // desestruturar
    const [playlist, setPlaylist] = useState({
      musicas: []
    })

    useEffect(() => {
      async function fetchData() {
        const res = await axios.get("http://localhost:3001/playlists/"+ id)
        setPlaylist(res.data);
      }
      fetchData();
    }, [])


    // map() ou for das musicas de play
    const musicas = playlist.musicas.map(m => {
        return (
            <audio controls>
                <source src={m.arquivo}></source>
            </audio>
        )
    })

    return (
        <>
    <div className="container-fluid h-100">
      <div className="row justify-content-center h-100">
        <div className="col-2 bg-black text-white">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="index.html">
                <img
                  src="/img/home2.png"
                  width="25"
                  height="25"
                  alt=""
                />{" "}
                Início
                <br />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                <img
                  src="/img/search.png"
                  alt=""
                  width="25"
                  height="25"
                />{" "}
                Buscar
                <br />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                <img src="/img/books.png" alt="" width="25" height="25" />
                Sua Biblioteca <br />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                <img
                  src="/img/playlist.png"
                  alt=""
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
              <h4>{playlist.nome}</h4>
              <div className="container">
                <br />
                <div className="row">
                    <img src={playlist.capa} alt="" width={50} height={500}></img>
                    <div>{musicas}</div>
                  
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

        </>
    )
}
export default PlaylistDetail;