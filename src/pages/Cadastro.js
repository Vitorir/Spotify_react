import { useState } from "react";
import user from "../components/user";

function Cadastro() {
  const [login, setLogin] = useState("");
  const [confirmLogin, setConfirmLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("")

  const [validacaoLogin, setValidacaoLogin] = useState("");
  const [validacaoSenha, setValidacaoSenha] = useState("");

  function handleSubmit(e){ 
    e.preventDefault();

    if(confirmLogin !== login) {
      setValidacaoLogin("Email diferente");
      return;
    }
    setValidacaoLogin("");

    if(confirmSenha !== senha) {
      setValidacaoSenha("Senha diferente");
      return;
    }
    setValidacaoSenha("");

    const users ={
      login,
      confirmLogin,
      senha,
      confirmSenha
    }

    user.push()

    console.log(users)
  }

  return (
    <div className="container mt-5">
      <form className="row justify-content-center" onSubmit={ e => handleSubmit(e)}>
        <div className="col-md-6 mb-md-5">
          <label htmlFor="inputEmail" className="form-label">
            Qual o seu email?
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            onChange={(e) => setLogin(e.target.value)}
            required
            placeholder="seuemail@dominio.com"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail2" className="form-label">
            Confirme seu email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail2"
            onChange={(e) => setConfirmLogin(e.target.value)}
            required
            placeholder="seuemail@dominio.com"
          />
          <p className="text-danger">{ validacaoLogin }</p>
        </div>
        <div className="col-md-6 mb-md-5">
          <label htmlFor="inputPassword" className="form-label">
            Crie sua senha
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            onChange={(e) => setSenha(e.target.value)}
            required
            placeholder="Digite a sua senha"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword2" className="form-label">
            Confirme sua senha
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword2"
            onChange={(e) => setConfirmSenha(e.target.value)}
            required
            placeholder="Digite a sua senha"
          />
          <p className="text-danger">{ validacaoSenha }</p>
        </div>
        <div className="col-md-6 mb-md-5">
          <label htmlFor="inputName" className="form-label">
            Como devemos chamar você?
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            placeholder="digite o nome de usúario"
          />
        </div>
        <div className="col-md-6 mb-md-5"></div>
        <fieldset className="row mb-3 mb-md-5">
          <legend className="col-form-label col-sm-2 pt-0">
            Qual o seu gênero?
          </legend>
          <div className="col-sm-10">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios1"
                value="option1"
              />
              <label className="form-check-label" htmlFor="gridRadios1">
                Masculino
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios2"
                value="option2"
              />
              <label className="form-check-label" htmlFor="gridRadios2">
                Feminino
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios3"
                value="option3"
              />
              <label className="form-check-label" htmlFor="gridRadios3">
                Não binário
              </label>
            </div>
          </div>
        </fieldset>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" htmlFor="gridCheck">
              Deseja receber notificações do Spotify por email?
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" htmlFor="gridCheck">
              Concordo com os{" "}
              <a
                href="https://www.spotify.com/br/legal/end-user-agreement/"
                target="_blank"
                rel="noreferrer"
              >
                Termos e Condições de Uso do Spotify.
              </a>
            </label>
          </div>
        </div>
        <div className="text-center mb-md-5">
          <button type="submit" className="btn btn-dark">
            Inscrever-se
          </button>
        </div>
      </form>
    </div>
  );
}

export default Cadastro;