import reactLogo from '../../assets/react.svg'

function Profile({ person }) {  //This is the props being passed to the Profile component.
    return (
        <>
            <section className="profile">
                <h2>{person.name}</h2>
                <img
                    className="avatar"
                    src={reactLogo}
                    alt={person.name}
                    width={person.size}
                    height={person.size}
                />
                <ul>
                    <li>
                        <b>Profession: </b>
                        {person.profession}
                    </li>
                    <li>
                        <b>Awards: </b>
                        {person.awards}
                    </li>
                    <li>
                        <b>Discovered: </b>
                        {person.discovered}
                    </li>
                </ul>
            </section>
        </>
    )
}


export default function Gallery() {
    return (
        <>
            <h1>Notable Scientists</h1>
            <Profile person={{  //list of object props being passed to the Profile component
                name: 'Maria Sklodowska-Curie',
                profession: "physicist and chemist",
                awards: '4',
                discovered: "polonium (chemical element)",
                size: 100
            }}

            />
            <Profile person={{
                name: 'Katsuko Saruhashi',
                profession: "geochemist",
                awards: '2',
                discovered: "a method for measuring carbon dioxide in seawater",
                size: 100
            }}
            />
        </>
    );
}
