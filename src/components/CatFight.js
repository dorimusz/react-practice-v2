function CatProfile(name, luckyNumber, toy) {
    this.name = name;
    this.number = luckyNumber;
    this.toy = toy;

    this.catNumber = function () {
        return `${name} ${luckyNumber}`
    }
}

//ezt exportálom:
const catFight = () => {
    const catPlayer1 = new CatProfile("Szofi", "4", "tiger");;
    const catPlayer2 = new CatProfile("Maki", "1", "all kind of plastic stuff");

    return <div>
        <h3>Cat fight</h3>
        Today's battle is between {catPlayer1.name} and {catPlayer2.name}!
        <ul>
            <li>The FIRST player's id is: {catPlayer1.catNumber()}</li>
            <li>The SECOND player's id is: {catPlayer2.catNumber()}</li>
        </ul>

        {catPlayer1.name}'s fav toy is a {catPlayer1.toy}, and {catPlayer2.name}'s fav piece is {catPlayer2.toy}.
    </div>

}

export default catFight