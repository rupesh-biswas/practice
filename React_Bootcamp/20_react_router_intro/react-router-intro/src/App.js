import logo from './logo.svg';
import './App.css';
import FakeRouting from './FakeRouting';
import { NavLink, Route, Routes } from 'react-router-dom';
import Dog from './Dog';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <nav className='App-nav'>
        <NavLink to='/'>About</NavLink>
        <NavLink to='/dog'>Dog</NavLink>
        <NavLink to='/contact'>Contact</NavLink>

        <a href='/'>About</a>
        <a href='/dog'>Dog</a>
        <a href='/contact'>Contact</a>
      </nav>
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/dog' element={<Dog name="Muffins" />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
