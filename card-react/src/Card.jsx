import profile from './assets/pogi.jpg'
function Card() {
    return (
        <div className='container'>
            <div className='card'>
                <img className='profile' src={profile} alt="Profile Picture"></img>
                <h2>Nathan Ferrer</h2>
                <p>I am Studying and Recalling React JSX</p>
            </div>
        </div>
    )
}

export default Card;