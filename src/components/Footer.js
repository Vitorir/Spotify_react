function Footer(){
    return(
        <footer className="bg-black text-center text-white">
        <div className="container p-4">
          <section className="">
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Inscreva-se em nossa newsletter</strong>
                  </p>
                </div>
      
                <div className="col-md-5 col-12">
                  <div className="form-outline form-white mb-4">
                    <input type="email" id="form5Example21" className="form-control" />
                    <label className="form-label" for="form5Example21">Endereço de Email</label>
                  </div>
                </div>
      
                <div className="col-auto">
                  <button type="submit" className="btn btn-outline-light mb-4">
                    Inscreva-se
                  </button>
                </div>
              </div>
            </form>
          </section>
      
          <section className="mb-4">
            <p>
            </p>
          </section>
      
          <section className="">
            <table className="table table-borderless text-white">
              <thead>
                <tr>
                  <th>EMPRESA</th>
                  <th>COMUNIDADE</th>
                  <th>LINKS UTEIS</th>
                  <th>MAIS CONTEÚDOS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><a href="#!" className="text-white">Sobre</a></td>
                  <td><a href="#!" className="text-white">Para Artistas</a></td>
                  <td><a href="#!" className="text-white">Suporte</a></td>
                  <td><a href="#!" className="text-white">Todas as Categorias</a></td>
                </tr>
                <tr>
                  <td><a href="#!" className="text-white">Empregos</a></td>
                  <td><a href="#!" className="text-white">Desenvolvedores</a></td>
                  <td><a href="#!" className="text-white">Player web</a></td>
                  <td><a href="#!" className="text-white">Mapa do site</a></td>
                </tr>
                <tr>
                  <td></td>
                  <td><a href="#!" className="text-white">Publicidade</a></td>
                  <td><a href="#!" className="text-white">Aplicativo móvel grátis</a></td>
                  <td><a href="#!" className="text-white">Cursos</a></td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
        
        
      
        <div className="text-center p-3">
        </div>
      </footer>
    )
}

export default Footer;