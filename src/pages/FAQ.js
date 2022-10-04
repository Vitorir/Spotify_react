function FAQ(){
    return(

    <div className="container-fluid p-5 bg-white text-black text center" id="content">

        <h1>FAQ</h1>
        <div className="border d-flex align-items-center justify-content-center" style={{height: "1000px"}}>
            <div className="row">
                <div className="col-4">
                    <div className="card" style={{width: '300px'}}>
                        <div className="card-body">
                            <img className="card-img-top" src="./img/profile-user.png" alt="Card" style={{width: "50%", height: "150px"}}/>
                            <h2>Conta</h2>
                            <div className="card-content">
                                <ul style={{liststyletype:'none'}}>
                                    <li><a href="https://community.spotify.com/t5/FAQs/How-do-I-change-my-country-settings/ta-p/950275"
                                            >Como mudo a configuração do meu país?</a></li>
                                    <li><a href="https://community.spotify.com/t5/FAQs/How-can-I-recover-my-lost-playlists/ta-p/646700"
                                            >Como recupero minhas playlists perdiddas?</a></li>
                                </ul>
                            </div>
                            <a href="https://community.spotify.com/t5/FAQs/tkb-p/Spotify-Answers/label-name/account" className="btn btn-info">Saiba Mais</a>
                        </div>
                    </div>
                </div>


                <div className="col-4">
                    <div className="card" style={{width: '300px'}}>
                        <div className="card-body">
                            <img src="./img/calendar.jpeg" alt="Card" style={{width: "50%", height: "150px"}}/>
                            <h2>Assinatura</h2>
                            <div id="lista-assinatura">
                                <ul style={{liststyletype:'none'}}>
                                    <li><a href="https://community.spotify.com/t5/FAQs/I-ve-subscribed-Why-am-I-not-getting-Premium-features/ta-p/5399898"
                                            >Eu assinei o Premium. Por que não adquiri os recursos?</a></li>
                                    <li><a href="https://community.spotify.com/t5/FAQs/Why-has-my-Premium-subscription-changed-to-free/ta-p/654390"
                                            >Por que minha assinatura Premium se tornou gratuita?</a></li>
                                </ul>
                            </div>
                            <a href="https://community.spotify.com/t5/FAQs/tkb-p/Spotify-Answers/label-name/subscription" className="btn btn-info">Saiba Mais</a>
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="card" style={{width: '300px'}}>
                        <div className="card-body">
                            <img src="./img/troubleshoot.jpeg" alt="Card" style={{width: "50%", height: "150px"}}/>
                            <h2>Solução de Problemas</h2>
                            <div id="lista-solucao-problemas">
                                <ul style={{liststyletype:'none'}}>
                                    <li><a href="https://community.spotify.com/t5/FAQs/Why-am-I-having-connection-issues/ta-p/646874"
                                            >Por que estou tendo problemas na coneção?</a></li>
                                    <li><a href="https://community.spotify.com/t5/FAQs/How-do-I-stop-Spotify-from-showing-blank-pages-and-error/ta-p/910173"
                                            >Como faço para o Spotify parar de mostrar páginas em branco e
                                            mensagens de erro?</a></li>
                                </ul>
                            </div>
                            <a href="https://community.spotify.com/t5/FAQs/tkb-p/Spotify-Answers/label-name/troubleshooting" className="btn btn-info">Saiba Mais</a>
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="card" style={{width: '300px'}}>
                        <div className="card-body">
                            <img src="./img/music-notes.jpeg" alt="Card" style={{width: "50%", height: "150px"}}/>
                            <h2>Recursos do Spotify</h2>
                            <div id="lista-recursos">
                                <ul style={{liststyletype:'none'}}>
                                    <li><a href="https://community.spotify.com/t5/FAQs/Why-can-t-I-find-the-music-I-m-looking-for/ta-p/875897"
                                            >Por que não consigo achar a música que procuro?</a></li>
                                    <li><a href="https://community.spotify.com/t5/FAQs/How-can-I-recover-my-lost-playlists/ta-p/646700"
                                           >Como recuperar minhas playlists perdidas?</a></li>
                                </ul>
                            </div>
                            <a href="https://community.spotify.com/t5/FAQs/tkb-p/Spotify-Answers/label-name/spotify%20features" className="btn btn-info">Saiba Mais</a>
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="card" style={{width: '300px'}}>
                        <div className="card-body">
                            <img src="./img/ellipsis.jpeg" alt="Card" style={{width: "50%", height: "150px"}}/>
                            <h2>Outros</h2>
                            <div id="lista-outros">
                                <ul style={{liststyletype:'none'}}>
                                    <li><a href="https://community.spotify.com/t5/FAQs/Why-are-multiple-versions-of-Spotify-running/ta-p/924359"
                                            >Por que as múltiplas versões do Spotify ainda estão rodando?</a>
                                    </li>
                                    <li><a href="https://community.spotify.com/t5/FAQs/How-do-I-stop-Spotify-from-opening-automatically-on-my-desktop/ta-p/920051"
                                            >Como configurar o Spotify para não inicializar
                                            automaticamente no meu PC?</a></li>
                                </ul>
                            </div>
                            <a href="https://community.spotify.com/t5/FAQs/tkb-p/Spotify-Answers/label-name/other" className="btn btn-info">Saiba Mais</a>
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="card" style={{width: '300px'}}>
                        <div className="card-body">
                            <img src="./img/group-users.jpeg" alt="Card" style={{width: "50%", height: "150px"}}/>
                            <h2>Comunidade</h2>
                            <div id="lista-comunidade">
                                <ul style={{liststyletype:'none'}}>
                                    <li><a href="https://community.spotify.com/t5/FAQs/What-s-the-Spotify-Stars-Program/ta-p/876081"
                                            >O que é o programa Estrelas Spotify?</a></li>
                                    <li><a href="https://community.spotify.com/t5/FAQs/What-do-I-need-to-join-the-Spotify-Stars-Program/ta-p/5291164"
                                            >Por que preciso entrar no programa Estrelas Spotify?</a></li>
                                </ul>
                            </div>
                            <a href="https://community.spotify.com/t5/FAQs/tkb-p/Spotify-Answers/label-name/community" className="btn btn-info">Saiba Mais</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default FAQ