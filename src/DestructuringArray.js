// _ jelöli, hogy semmilyen paramétert nem fog kapni az arrow function:
const profile = _ => {
    const names = ['Péter', 'László', 'Gergő', 'Richárd', 'Tímea', "TommyBoy"];

    //destructuring arrays: változókká tudom alakítani az elemeket a tömbből, tetszőleges nevet tudok adni nekik, ezért nem tudok ugárlni köztük, csak sorban haldani
    const [name1, name2, gergo, name4, name5, name6] = names;
    const [peter, laszlo, name3] = names;
    // const [peter, _, name3] = names; //nem fog működni, ha aláhúzással jelölöm
    // const [peter, , name3] = names; //így már okés lesz
    // const [peter, , , , timea] = names; //így át tudunk ugrani értékeket, ha az utolsóra vagyok kíváncsi

    return <div>
        <h1>Destructuring arrays:</h1>
        <p>Gimme the 6th element of the array without destructuring: {names[5]}</p>

        <p>With destructuring:</p>
        <h4>{peter}</h4>
        <h4>{laszlo}</h4>
        <h4>{name3}</h4>
    </div>
}

export default profile;

