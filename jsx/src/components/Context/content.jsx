import { useContext } from "react";
import { AuthContext } from "./context_api";

function Content() {
    const { user } = useContext(AuthContext);
    return (
        <>
            <h1>Welcome to Content {user}</h1>
        </>
    );
}

export default Content;