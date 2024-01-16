import { BrowserRouter } from "react-router-dom"
import Browse from "./browse"
import GlobalStyle, { Wrapper } from "./styles"

function App() {

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Wrapper>
        <Browse />
      </Wrapper>
    </BrowserRouter>
  )
}

export default App
