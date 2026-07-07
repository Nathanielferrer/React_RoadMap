import { useContext } from 'react'
import { AuthContext } from './context_api'

function Navbar() {
    const { user } = useContext(AuthContext);
    return (
        <>
            <h1>Welcome {user}</h1>
        </>
    );
}

export default Navbar;