import {
  About,
  Contact,
  Header,
  Portfolio,
  Project,
  Qualification,
  RecentWork,
} from "./container";
import { Navbar, Footer } from "./components";
import "./App.scss";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
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
