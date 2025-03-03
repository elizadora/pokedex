import { Route, Router, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import RoutesController from "./routes"

function App() {

  return (
    <div className="font-poppins tracking-[.20em]">
      {/* Navbar application */}
      <Navbar />

      {/* Routes application */}
      <RoutesController />

    </div>
  )
}

export default App
