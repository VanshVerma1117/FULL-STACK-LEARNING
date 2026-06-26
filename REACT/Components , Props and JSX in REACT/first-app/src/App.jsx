import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"

function App() {

  return (
    <>
      <Navbar/>
      <div className="cards">
        <Card title= "PC 1" description = "PC 1 description" />
        <Card title= "PC 2" description = "PC 2 description" />
        <Card title= "PC 3" description = "PC 3 description" />
        <Card title= "PC 4" description = "PC 4 description" />
      </div>
      <Footer/>
    </>
  )
}

export default App
