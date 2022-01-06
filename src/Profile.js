// _ jelöli, hogy semmilyen paramétert nem fog kapni az arrow function:
const profile = _ => {
    const names = ['Péter', 'László', 'Gergő', 'Richárd', 'Tímea'];

    //deconstructuring arrays: változókká tudom alakítani az elemeket a tömbből, tetszőleges nevet tudok adni nekik, ezért nem tudok ugárlni köztük, csak sorban haldani
    const [peter, laszlo, name3] = names;
    // const [peter, _, name3] = names; //nem fog működni
    // const [peter, , name3] = names; //így már okés lesz
    // const [peter, , , , timea] = names; //így át tudunk ugrani értékeket, ha az utolsóra vagyok kíváncsi

    return <div>
        <h2>{peter}</h2>
        <h2>{laszlo}</h2>
        <h2>{name3}</h2>
    </div>
}

export default profile;

