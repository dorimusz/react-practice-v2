import Button from './Button'

const buttonListMap = () => {
    const buttonTexts = ["save", "click", "send", "delete", "cancel"];

    return <div>{buttonTexts.map((text, i) => <Button text={text} key={i} />)}</div>
}

export default buttonListMap;