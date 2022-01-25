const profile2 = () => {

    const user = {
        firstName: "Anna",
        lastName: "Szepesi"
    }

    // const firstName = user.firstName;
    // const lastName = user.lastName;

    //ugyan azt csinálja, mint a felső kettő, csak ez a destructuring object. itt nem tudok tetszőleges változó nevet adni nekik, csak amilyen kulccsal rendelkezik az objektum, de cserébe tudok ugrálni közöttük, nem kell sorban haladni
    const { lastName, firstName } = user;

    return <div>
        <h1>Destructuring objects:</h1>
        <h2>{firstName}</h2>
        <h3>{lastName}</h3>
    </div>
}

export default profile2;