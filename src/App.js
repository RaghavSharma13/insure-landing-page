import React,{useState,useEffect} from 'react'
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import Navbar from './components/navbar'


function App() {
  const [displayType,setDisplayType]=useState("mobile");
    const setDisplay=()=>{
        if(window.innerWidth>=800)
            return setDisplayType("desktop")
        return setDisplayType("mobile")
    }
    useEffect(()=>setDisplay(),[]);
    window.addEventListener('resize',setDisplay);
  return (
    <div className="landing-page flex-col fc">
      <Navbar displayType={displayType}/>
      <Header displayType={displayType}/>
      <Main/>
      <Footer/>
    </div>

  );
}

export default App;
