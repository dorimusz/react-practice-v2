const catProfile = () => {

    const cat = {
        name: "Fuego",
        legs: "4",
        toy: "catnip pillow"
    }

    const { name, legs, toy } = cat;

    return <div>
        <h3>Cat intro</h3>
        Hello! I'm {name} and I have {legs} tiny legs. My fav toy is a {toy}, meow.
    </div>

}

export default catProfile