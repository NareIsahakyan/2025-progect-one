import { useState } from 'react'
import Header from "./components/header/Header";
import "./components/header/header.css";
import "./components/logo/logo.css";
import "./components/navbar/navbar.css";
import './App.css'
import Main from './components/main/Main';
import "./components/main/main.css";
import Footer from './components/footer/Footer';
import "./components/footer/footer.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div class="wrapper">
      <Header/>
      <Main/>
      <Footer/>
      </div>
    </>
  )
}

export default App;
