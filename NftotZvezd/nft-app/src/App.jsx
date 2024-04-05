import './App.css'
import Navbar from "./components/Navbar.jsx";
import StarInfoBlock from "./components/StarInfoBlock.jsx";
import StarTable from "./components/StarTable.jsx";
import CardList from "./components/CardList.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  return (
    <div style={{paddingLeft:"16px",paddingRight:"16px",paddingTop:"10px"}}>
      <Navbar/>
        <StarInfoBlock/>
        <StarTable/>
      <CardList/>
        <Footer/>
    </div>
  )
}

export default App
