import './App.css';
// import Button from './Button';
import ButtonListFor from './ButtonListFor'
import ButtonListMap from './ButtonListMap'
import Profile from './Profile'
import Profile2 from './Profile2'
import Profile3 from './Profile3'
import Profile4 from './Profile4'


const buttonText = "I'm a button component which uses a string from another component";


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div className='hahaha'></div>
        {/* <Button text={buttonText} /> */}
        {/* <ButtonListFor text={buttonText} /> */}
        <ButtonListMap text={buttonText} />

        <Profile />
        <Profile2 />
        <Profile3 />
        <Profile4 />

      </header>
    </div>
  );
}

export default App;
