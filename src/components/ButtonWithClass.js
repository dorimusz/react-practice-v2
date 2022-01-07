import { Component } from "react/cjs/react.development";

class ButtonWithClass extends Component {
    //állapotváltozás, ehhez kell a state, hogy minden benne legyen, amire szükség lesz
    constructor() {
        super()
        this.state = {
            greeting: "Hello",
            title: "I am a title"
        }
    }

    //csak úgy nem lehet returnolni a classban, meg kell hívjam neki a render metódust
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>{this.state.greeting}</p>
                <button onClick={() => this.setState({ greeting: "Bye" })}>Click me to bon voyage</button>
                <button onClick={() => this.setState({ title: "I am the first changed title" })}>Change the title</button>
            </div>
        )
    }
}
//Azt mondtam, hogy kattintásra változzon meg az állapota (state), és itt megváltozik a komponensünk is, újrarendereli

export default ButtonWithClass