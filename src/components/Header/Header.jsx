import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/Auth.Context';

function Header() {
    const { loggedUser, logout } = useContext(AuthContext);

    return (
        <header>
            <h1 >Pastelería 3SOME</h1>
            {loggedUser ? (
                <div >
                    <span>Hola, caracola {loggedUser.username}</span>
                    <button onClick={logout} style={{

                    }}>Cerrar sesión</button>
                </div>
            ) : (
                <span >Inicie sesión para probar nuestras delicias</span>
            )}
        </header>
    );
}

export default Header;