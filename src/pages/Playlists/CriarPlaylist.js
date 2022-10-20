// POST
// criar uma playlist do usuario
import axios from "axios";
import { useEffect, useState } from "react";

function CriarPlaylist() {
    const [playlists, setPlaylists] = useState([])

    useEffect(() => {
      async function listarPlaylists() {
        const res = await axios.post("http://localhost:3001/playlists");
        setPlaylists(res.data);
    }
    }, [])


    // mostrar capa e nome


    // encontrar musicas -> get passando o find

    // inserir/excluir musicas -> post/delete
}