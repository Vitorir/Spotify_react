import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function UserSignin(){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();


    function handleSubmit(e) {
        e.preventDefault();

        axios.get(`http://localhost:3001/users?email=${email}`)
            .then((res) => {
                const usuario = res.data[0];

                if(usuario && usuario.senha === senha){
                    sessionStorage.setItem("usuarioLogado", JSON.stringify(usuario));
                    navigate("/") ;
                }
            })

    }

    return (

        <div className="container mt-5 mb-5">
            <div className="row align-items-center">
                <div className="col-md-10 mx-auto col-lg-5 border rounded-3 bg-light">
                    <div className="m-5">
                        <h1>Faça seu login para continuar</h1>
                    </div>
                    <form className="p-4 p-md-5 " onSubmit={ e => handleSubmit(e)}>
                        <div className="form-floting mb-3">
                            <label for="inputEmail">Email</label>
                            <input type="email" className="form-control" id="inputEmail" onChange={(e) => setEmail(e.target.value)}
                                required placeholder="Digite seu email" />
                        </div>

                        <div className="form-floting mb-3">
                            <label for="inputPassword">Senha</label>
                            <input type="password" className="form-control" id="inputPassword" onChange={(e) => setSenha(e.target.value)}
                                required placeholder="Digite sua senha" />
                        </div>

                        <div className="text-center mb-md-5 mt-4">
                            <button type="submit" className="btn btn-dark w-100">
                                Entrar
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserSignin;