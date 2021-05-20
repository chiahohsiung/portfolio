import logo from './logo.svg';
import './App.css';
import NeonButton from './components/NeonButton'
import Header from './components/Header'
import About from './components/About'
import Work from './components/Work'
import Skills from './components/Skills'

function App() {
  return (
    <div className='neon-app'>
      <div className='navbar'>
        <NeonButton>Home</NeonButton>
        <NeonButton>About</NeonButton>
        <NeonButton>Work</NeonButton>
      </div>
      <Header />
      <Work />
      <Skills />
      <About />    
    </div>
  );
}

export default App;
