import { useState } from "react";
import user from "../components/user";

function Profile() {

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [birth, setBirth] = useState("");


  function handleSubmit(e) {
    e.preventDefault();


    const users = {
      name,
      birth,
      phonenumber,
      username
    }

    user.push()

    console.log(users)
  }

  return (
    <div className="container mt-5">
      <form className="row justify-content-center" onSubmit={e => handleSubmit(e)}>

        <div className="col-md-6 mb-md-5">
          <label htmlFor="inputName" className="form-label">
            Nome completo
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Seu nome"
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="inputName" className="form-label">
            Como devemos chamar você?
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="digite o nome de usúario"
          />
        </div>

        <div className="col-md-6-mb-md-5">
          <label htmlFor="dateBirth" className="form-label">
            Qual sua data de nascimento?
          </label>
          <input
            type="date"
            className="form-control"
            id="dateBirth"
            onChange={(e) => setBirth(e.target.value)}
          />
        </div>

        <div className="col-md-6-mb-md-5">
          <label htmlFor="inputTel" className="form-label">Informe seu contato:
          </label>
          <input
            type="tel"
            className="form-control"
            id="inputTel"
            onChange={(e) => setPhonenumber(e.target.value)}
            name="telefone"
            placeholder="(01)12345-6789"
            pattern="[0-9]({2})[0-9]{5}-[0-9]{4}"
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
                checked
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
        <div className="text-center mb-md-5">
          <button type="submit" className="btn btn-dark">
            Atualizar Dados
          </button>
        </div>
      </form>
    </div>
  );
}

export default Profile;