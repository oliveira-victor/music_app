import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import Browse from "./browse"
import GlobalStyle, { Wrapper } from "./styles"
import { store } from './store'

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Wrapper>
          <Browse />
        </Wrapper>
      </BrowserRouter>
    </Provider>
  )
}

export default App
