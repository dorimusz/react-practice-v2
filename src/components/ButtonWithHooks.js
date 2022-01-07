import React, { useState } from 'react'

//type 'rfce' for this skeleton
function ButtonWithHook() {
    //az első a state változó neve, a másik pedig egy függvény, aminek a meghívásávval meg tudjuk változtatni az állapotot.
    // ehhez kell a useState() metódus, aminek adunk egy alapot

    const [greeting, setGreeting] = useState("Helloooooo");
    /*
    // A 7-es sor lerövidíti a kövi 3 sort:
    const greetingUseState = useState("Hello2");
    const greeting = greetingUseState[0];
    const setGreeting = greetingUseState[1];
    */

    const [title, setTitle] = useState("I am a new title");

    return (
        <div>
            <h1>{title}</h1>
            <p>{greeting}</p>
            <button onClick={() => setGreeting("Licked you")}>Lick me</button>
            <button onClick={() => setTitle("A set a new title for u")}>Click me</button>
        </div>
    )
}

export default ButtonWithHook
