import Home from './pages/Home';
import Header from './components/Header';
import FAQ from './pages/FAQ';
import Footer from './components/Footer'
import Cadastro from './pages/Cadastro';
import CriarPlaylist from './pages/Playlists/CriarPlaylist';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PlaylistList from './pages/Playlists/PlaylistList';
import PlaylistDetail from './pages/Playlists/PlaylistDetail';
import UserSignup from './pages/Users/UserSignup';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/faq" element={<FAQ />}/>
        <Route path="/register" element={<Cadastro />}/>
        <Route path='/' element={<Home/>} />
        <Route path='/playlists/:id' element={<PlaylistDetail />} /> 
        <Route path='/criarplaylist' element={<CriarPlaylist />} /> 
        <Route path='/signup' element={<UserSignup />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
