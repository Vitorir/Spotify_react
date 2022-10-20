import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import playlists from "./playlists";

// listar as playlists dinamicamente
function PlaylistList() {
  const [playlists, setPlaylists] = useState([]);

  useEffect( () => { //
      axios.get("http://localhost:3001/playlists").then( (res) => { // chamada assincrona; retorna uma promise
      setPlaylists = res.data; // registra nessa promessa obj de resposta do http
  }) // quando atualizar o state, ele atualiza as playlists
  }, []) // vai ter que encadear mts promises


  useEffect(() => {
    async function listarPlaylists() {
      const res = await axios.get("http://localhost:3001/playlists")  
      setPlaylists(res.data);
  }
  }, [])


    const res = playlists.map( (play) => {
        return (
        <div className="col-sm-2">
            <Link to={`/playlists/${play.id}`}>
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
      </div>
        )
    } );

    return (
        <div>
        {res}
        </div>
        )
}

export default PlaylistList;