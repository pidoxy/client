import './App.css';
import './Bootstrap.css';
import './Jquery';
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/About";
import FAQPage from "./components/Faq";
import OurServices from "./components/Services";
import Footer from "./components/footer";



function App() {
  return (
    <div className="App">
      <Navbar bgColor={"white"} />
      <LandingPage bgColor={"blue"} />
      <OurServices  bgColor={"white"}/>
      <AboutPage bgColor={"blue"} />
      <FAQPage bgColor={"light"} />
      <Footer bgColor={"blue"}/>
      
    </div>
  );
}

export default App;
