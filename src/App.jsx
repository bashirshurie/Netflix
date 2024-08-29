import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import List from "./pages/List"
import Signup from "./pages/Signup"
import Browse from "./pages/Browse"
import LoginPage from "./pages/LoginPage"

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/browse" element={<Browse />}/>
        <Route path="/list" element={<List />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/signup" element={<Signup />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
