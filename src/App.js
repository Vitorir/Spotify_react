import Home from './pages/Home';
import Header from './components/Header';
import FAQ from './pages/FAQ';
import Footer from './components/Footer'
import Cadastro from './pages/Cadastro';
import CriarPlaylist from './pages/Playlists/CriarPlaylist';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PlaylistList from './pages/Playlists/PlaylistList';
import PlaylistDetail from './pages/Playlists/PlaylistDetail';
import Profile from './pages/Profile';
import UserSignin from './pages/Users/UserSignin';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/faq" element={<FAQ />}/>
        <Route path="/register" element={<Cadastro />}/>
        <Route path='/' element={<Home/>} />
        <Route path='/playlists/:id' element={<PlaylistDetail />} /> 
        <Route path='/playlists-privadas/:id' element={<PlaylistDetail />} /> 
        <Route path='/criarplaylist' element={<CriarPlaylist />} /> 
        <Route path='/signin' element={<UserSignin />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
