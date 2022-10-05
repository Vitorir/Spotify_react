import { useParams } from "react-router-dom";
import playlists from "./playlists";
// percorrer com id x e mostrar as musicas()

function PlaylistDetail() {
    const { id }= useParams(); // desestruturar
    

    const play = playlists.find((p) => p.id == id);


    // map() ou for das musicas de play
    const musicas = play.musicas.map(m => {
        return (
            <audio controls>
                <source src={m.arquivo}></source>
            </audio>
        )
    })

    return (
        <>
        <div>{play.nome}</div>
        <img src={play.capa}></img>
        <div>{musicas}</div>
        </>
    )
}
export default PlaylistDetail;