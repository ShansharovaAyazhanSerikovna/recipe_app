import ChiefSection from "./components/ChiefSection";
import Footer from "./components/Footer";
import Herosection from "./components/Herosection";



import Navbar from "./components/Navbar";
import QuoteSection from "./components/QuoteSection";
import SkillsImprove from "./components/SkillsImprove";



function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <div className="container main">
        <Herosection/>
        <SkillsImprove/>
        <QuoteSection/>
        <ChiefSection/>
       
        
       
      </div>
       <Footer/>

 
    </div>
  );
}

export default App;
