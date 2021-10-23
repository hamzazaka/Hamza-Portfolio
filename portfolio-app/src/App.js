import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Aboutme from './components/Aboutme';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Aboutme/>
      <Projects/>
     <h1>hello world</h1>
    </div>
  );
}

export default App;
