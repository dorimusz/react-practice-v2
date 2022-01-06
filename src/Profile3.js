// új objektumok létrehozása példányosítási technikákkal. object construction
function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    //Amikor a 16-es sorban szeretnénk returnolni, elég lesz a fullName
    this.fullName = function () {
        return `${this.firstName} ${this.lastName}`
    }
}

const profile3 = () => {
    const newUser = new User("Anna", "Kovács")
    console.log(newUser)

    // return <div>{newUser.firstName} {newUser.lastName}</div>
    return <div>{newUser.fullName()}</div>
}

export default profile3;