import { useContext } from "react";
import { UserContext } from "../context/UserContext";


export default function Navbar() {
    const user = useContext(UserContext);

    return (
        <div>
            <h1>Welcome {user}</h1>
        </div>
    );
}