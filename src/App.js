import { BrowserRouter } from "react-router-dom";
import Header from './components/Header/Header'
import Footer from './components/Footer'
import { ContextProvider } from "./components/ContextProvider";
import MainRoutes from './routes'
import { Provider } from 'react-redux'
import { estado } from "./components/estado";

function App() {

  console.log('APP.JS', estado)

  return(
    <Provider store={estado}>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <MainRoutes />
          <Footer>
            Recode 2022
          </Footer>
        </BrowserRouter>
      </ContextProvider>
    </Provider>
  )
}

export default App;
