import { Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar/NavBar"
import Home from "./components/Home/Home"
import Archive from "./pages/Archive"


function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive/>} />
      </Routes>
    </>
  )
}

export default App
