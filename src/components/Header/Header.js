import { useContext } from 'react'
import { AppContext } from '../ContextProvider'
import './Header.css'

const Header = () => {

  const  { logado, setLogado } = useContext(AppContext)

  const logar = () => {
    setLogado(true)
  }

  const sair = () => {
    setLogado(false)
  }

  return (
    <div className='header'>
      <p>Header</p>
      {
        logado === false ? (
          <button onClick={logar} >Logar</button>
        ) : (
          <button onClick={sair}>Sair</button>
        )
      }
    </div>
  )
}

export default Header;
