import { Route,Routes } from "react-router-dom"
import { Home } from "./routes/Home"
import { Navbar } from "./components/Navbar"


export const MainAppNail = () => {
  return (
    <>
        <Navbar />

        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="trabajos" element={<Home />}/>
            <Route path="modelos" element={<Home />}/>
        </Routes>
    
    </>
  )
}
