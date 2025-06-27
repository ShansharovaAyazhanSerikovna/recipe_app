import { Route, Router, Routes } from "react-router-dom";

import Footer from "./components/Footer";



import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";


import Settings from "./components/pages/Settings";
import Recipes from "./components/pages/Recipes";



function App() {
  return (
    
      <div className="App">
      <Navbar/> 
      <div className="container main">
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/settings" element = {<Settings/>}/>
          <Route path="/recipes" element = {<Recipes/>}/>
        </Routes>
    
       
        
       
      </div>
       <Footer/>

 
    </div>

  
    
  );
}

export default App;
