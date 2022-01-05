import './App.css';
import Button from './Button';

const stringVar = "It's a string";


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Button text={stringVar} />

      </header>
    </div>
  );
}

export default App;
