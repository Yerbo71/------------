import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Registration from "./pages/Registration.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registration/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>

  )
}

export default App
