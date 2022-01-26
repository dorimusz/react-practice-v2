import React, { useState } from 'react'

//type 'rfce' for this skeleton
function ButtonWithHook() {
    //az első a state változó neve, a másik pedig egy függvény, aminek a meghívásávval meg tudjuk változtatni az állapotot.
    // ehhez kell a useState() metódus, aminek adunk egy alapot

    const [greeting, setGreeting] = useState("Helloooooo");

    /*
    // A 8-as sor lerövidíti a kövi 3 sort:
    const greetingUseState = useState("Hello2");
    const greeting = greetingUseState[0];
    const setGreeting = greetingUseState[1];
    */

    const [title, setTitle] = useState("I am a new title");

    const [someText, setSomeText] = useState("I'm the base");

    return (
        <div>
            <h1>Hooks:</h1>
            <h2>{title}</h2>
            <p>{greeting}</p>
            <button onClick={() => setGreeting("Licked you")}>Lick me</button>
            <button onClick={() => setTitle("A set a new title for u")}>Click me</button>


            <h2>{someText}</h2>
            <button onClick={() => setSomeText("I am the changed text")}>Click me to change the base text</button>



        </div>
    )
}

export default ButtonWithHook
