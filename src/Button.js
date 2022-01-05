import { createElement } from "react";

const clickHandler = (event) => {
    console.log(event);

    //sets the div's text once
    //document.querySelector('.hahaha').innerText = 'gotcha';

    //add new div&text with every click
    let elementHolder = document.createElement('div');
    let textInTheElement = document.createTextNode('gotcha!')
    elementHolder.appendChild(textInTheElement);
    document.querySelector('.hahaha').appendChild(elementHolder);
}

function buttonClick(props) {
    const buttonText = props.text;
    return (
        <div className="myButtonContainer">
            <button
                onClick={clickHandler}>{buttonText}</button>
            <div className='hahaha'></div>
        </div>
    );
}

export default buttonClick;