import logo from './logo.svg';
import './App.css';
import Game from './Game';
import Rando from './Rando';
import Button from './Button';
import BrokenClick from './BrokenClick';
import Clicker from './Clicker';


function App() {
  return (
    <div className="App">
      <Clicker maxNum={10} winNum={7} />
    </div>
  );
}

export default App;
