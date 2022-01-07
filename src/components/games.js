const gamesToPlay = () => {
    const games = ["Uncharted", "Far Cry 4", "The Plague", "Far Cry Primal"]

    const [adventure, ShangriLa, story, sandbox] = games;

    return <div>
        <h3>The games </h3>
        <ul>
            <li>Woah: {adventure}</li>
            <li>Flow: {ShangriLa}</li>
            <li>Chill: {story}</li>
            <li>Nostalgia: {sandbox}</li>
        </ul>
    </div>
}

export default gamesToPlay