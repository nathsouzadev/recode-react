import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react'
import Home from './pages/Home'
import Contato from './pages/Contato';
import Perfil from './pages/Perfil';
import Pokemon from './pages/Pokemon';
import { AppContext } from './components/ContextProvider';

const MainRoutes = () => {

    const { logado } = useContext(AppContext )
    console.log('Rotas com context', logado)

    return(
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/perfil/:id' element={
            logado ? <Perfil /> : <Contato />
          } />
          <Route path='/pokemon/:id' element={<Pokemon />} />
        </Routes>
    )
}

export default MainRoutes
