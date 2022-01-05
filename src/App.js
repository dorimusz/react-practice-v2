import './App.css';
import Button from './Button';

const stringVar = "I'm a button component which uses a string from another component";


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
