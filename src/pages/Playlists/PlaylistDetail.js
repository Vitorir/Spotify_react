import { useParams } from "react-router-dom";
import playlists from "./playlists";
// percorrer com id x e mostrar as musicas()

function PlaylistDetail() {
    const { id }= useParams(); // desestruturar
    
    const play = playlists.find(id => id > 0);
    

    // map() ou for das musicas de play
    const musicas = play.musicas.map(m => {
        return (
            <audio>
                <source src={m.arquivo}></source>
            </audio>
        )
    })

    return (
        <>
        <div>{play.nome}</div>
        </>
    )
}
export default PlaylistDetail;