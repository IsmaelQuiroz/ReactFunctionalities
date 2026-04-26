import { useUserContext, useUserToggleContext } from "../UserProvider";


//vamos a trabajar con nuestros propios Hooks que encapsulamos en el componente UserProvider
const HijoE03 = () => {
    const user = useUserContext(); //esta funcion ya ejecuta internamente el useContext(userContext);
    const cambiaLogin = useUserToggleContext();

    return <div>
            <h2>Componente Hijo03</h2>
            {user && <p>Hola {user.name}</p>}
            <button onClick={cambiaLogin}>Cambia Login</button>
        </div>
}
export default HijoE03;