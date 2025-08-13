import { Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar/NavBar"
import Home from "./components/Home/Home"
import Archive from "./pages/Archive"
import Bin from "./pages/Bin"
import Important from "./pages/Important"


function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive/>} />
        <Route path="/bin" element={<Bin />} />
        <Route path="/important" element={<Important/> } />
      </Routes>
    </>
  )
}

export default App
