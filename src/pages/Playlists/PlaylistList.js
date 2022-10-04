import { Link } from "react-router-dom";
import playlists from "./playlists";

// listar as playlists dinamicamente
function PlaylistList() {

    const dados = playlists.map( (play) => {
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
        {dados} 
        </div>
        )
}

export default PlaylistList;