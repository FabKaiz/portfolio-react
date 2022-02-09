import { About, Contact, Header, Portfolio, Project, Qualification, Skills } from './container'
import { Navbar, Footer } from './components'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Qualification />
      <Portfolio />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
