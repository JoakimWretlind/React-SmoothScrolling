import { GlobalStyle } from './globalStyle'
import SmoothScroll from './components/SmoothScroll/SmoothScroll'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Products from './components/pages/Products'

function App() {
  return (
    <>
      <GlobalStyle />
      <SmoothScroll>
        <Home />
        <About />
        <Products />
      </SmoothScroll>
    </>
  );
}

export default App;