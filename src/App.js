import logo from './logo.svg';
import './App.css';
import NeonButton from './components/NeonButton'
import Header from './components/Header'
import About from './components/About'
import Work from './components/Work'
import Skills from './components/Skills'
import Navbar from './components/Navbar'
function App() {
  const links = [
    {
      id: 'home',
      title: 'Home'
    },
    {
      id: 'work',
      title: 'Work'
    },
    {
      id: 'skills',
      title: 'Skills'
    },
    {
      id: 'about',
      title: 'About'
    }
  ]
  const linksContent = links.map((link, index) => <NeonButton key={index} id={link.id}>{link.title}</NeonButton>)
  return (
    <div className='neon-app'>
      {/* <div className='navbar'>
        {linksContent}
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
          <i class="fa fa-bars"></i>
        </a>
      </div> */}
      <Navbar />
      <Header />
      <Work />
      <Skills />
      <About />
    </div>
  );
}

export default App;
