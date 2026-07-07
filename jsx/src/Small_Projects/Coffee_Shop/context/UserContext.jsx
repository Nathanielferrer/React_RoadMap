import { createContext } from "react";

// COMMENT: Initialized UserContext here so it can be imported in App.jsx (Provider) and Navbar.jsx (Consumer).
export const UserContext = createContext("Guest");
