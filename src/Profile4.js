/*
// új objektumok létrehozása példányosítási technikákkal. object construction
function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    //Amikor a 16-es sorban szeretnénk returnolni, elég lesz a fullName
    this.fullName = function () {
        return `${this.firstName} ${this.lastName}`
    }
}
*/

//Ezt megcsinálni classként, constructor metódussal
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}
//a class nem egy függvény, nem tud returolnülni, szüksége van egy render() metódusra vagy egy functionre, mint itt fent a fullName

const profile4 = () => {
    const newUser = new User("Ágoston", "Csilla")
    console.log(newUser)

    //return <div>{newUser.firstName} {newUser.lastName}</div>
    return <div>{newUser.fullName()}</div>
}

export default profile4;