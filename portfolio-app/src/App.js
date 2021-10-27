import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Aboutme from './components/Aboutme';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Aboutme/>
      <Projects/>
      <Contact/>
    </div>
  );
  }

export default App;
