import {
  About,
  Contact,
  Header,
  Portfolio,
  Qualification,
  RecentWork,
} from "./container";
import { Navbar, Footer, ParticleBackground } from "./components";
import "./App.scss";
import ReactGa from "react-ga";
import { useEffect } from "react";

function App() {

  // Google Analytics
  useEffect(() => {
    ReactGa.initialize('G-YGGJBD6G3G');
    ReactGa.pageview('/')
  }, [])
  
  return (
    <div className="App">
      <Navbar />
      <Header />
      <ParticleBackground />
      <About />
      <RecentWork />
      <Portfolio />
      <Qualification />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
