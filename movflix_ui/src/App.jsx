import Rules from "./pages/rules"
import {Header , Footer} from "./pages/need"
import "./App.css"
import Home from "./pages/home"
import {BrowserRouter , Routes , Route} from "react-router-dom"
import About from "./pages/about"
import Contact from "./pages/contact"

function App(){ 
  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;