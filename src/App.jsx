
import "./App.css";
import React from "react";


import Description from './components/Description';
import Header from "./components/header";
import Footer from "./components/footer";
import Services from "./components/services"

function App() {
  return (
    <>
    <Header />
    <Description />
    <Services />
    <Footer/>  
    </>
  );
}


export default App;
