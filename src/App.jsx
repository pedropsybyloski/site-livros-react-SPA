import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Header/>
      <Main/> 
      <Footer></Footer>
    </div>
  )
}

export default App
