import reactLogo from '../../assets/react.svg'
// import './components.css'

function Avatar({ person, size }) {     //Use ({}) if you are using objects in props
    return (
        <img
            className="avatar"
            src={reactLogo}
            alt={person.name}   //then call the object name in this line to get the object to access the properties
            width={size}
            height={size}
        />
    )
}

function Profile() {    //This is the parent componen that passes props to the Avatar component.
    return (
        <div className='profile-page'>
            <div className='profile'>
                <h1>About me</h1>
                <Avatar
                    person={{ name: 'React JS' }}  //here person is the object props. We are passing the object to the Avatar component.
                    size={100}                    // and {size} are the props.
                />
                <Avatar
                    person={{ name: 'Javascript' }}
                    size={200}
                />
            </div>
        </div>
    )
}

export default Profile;