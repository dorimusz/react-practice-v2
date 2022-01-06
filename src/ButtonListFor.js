import Button from './Button'


const ButtonList = (props) => {
    //belerakni egy tömbbe, és azt renderelni ki
    let rows = [];

    //kel egy ciklus, ami meghívja a buttont 10x
    for (let i = 0; i < 10; i++) {
        rows.push(<Button text={props.text} key={i} />)
    }

    return <div>{rows}</div>;
}

export default ButtonList;