import './App.css';
// import Button from './Button';
import ButtonListFor from './ButtonListFor'
import ButtonListMap from './ButtonListMap'

const buttonText = "I'm a button component which uses a string from another component";


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div className='hahaha'></div>
        {/* <Button text={buttonText} /> */}
        {/* <ButtonListFor text={buttonText} /> */}
        <ButtonListMap text={buttonText} />

      </header>
    </div>
  );
}

export default App;
