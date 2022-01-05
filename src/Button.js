const clickHandler = (event) => {
    console.log(event);
    document.querySelector('.hahaha').innerText = 'gotcha';
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