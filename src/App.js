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

function App() {
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
