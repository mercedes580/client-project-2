import { createContext, useState } from "react";

const AuthContext = createContext()
function AuthProviderWrapper(props) {
    const [loggedUser, setLoggedUser] = useState(null)

    const login = user => setLoggedUser(user)
    const logout = () => {
        setLoggedUser(null);

    };
    const isAdmin = loggedUser && loggedUser.role === 'admin';

    console.log(loggedUser)

    return (
        <AuthContext.Provider value={{ loggedUser, isAdmin, login, logout }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProviderWrapper }