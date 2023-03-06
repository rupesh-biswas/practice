import logo from './logo.svg';
import './App.css';
import Dog from './Dogs';

function App() {
  return (
    <div className="App">
      <Dog />
      <div>I am another div, not in DOG component</div>
    </div>
  );
}

export default App;
