import { createContext, useState } from "react";


const AuthContext = createContext()
function AuthProviderWrapper(props) {
    const [loggedUser, setLoggedUser] = useState(null)

    const login = user => setLoggedUser(user)
    const logout = () => {
        setLoggedUser(null);

    };

    return (
        <AuthContext.Provider value={{ loggedUser, login, logout }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProviderWrapper }