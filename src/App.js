import { BrowserRouter } from "react-router-dom";
import Header from './components/Header/Header'
import Footer from './components/Footer'
import { ContextProvider } from "./components/ContextProvider";
import MainRoutes from './routes'

function App() {

  return(
    <ContextProvider>
      <BrowserRouter>
        <Header />
        <MainRoutes />
        <Footer>
          Recode 2022
        </Footer>
      </BrowserRouter>
    </ContextProvider>
  )
}

export default App;
