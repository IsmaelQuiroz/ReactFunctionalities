import './App.css';
import HijoE03 from './componentes/HijoE03';
import { UserProvider } from './UserProvider';

function AppE03(){
    return(
        <UserProvider>
            {/*Todos los hijos contenidos en este provider van a recibir la info que de los contextos que generamos en UserProvider */}
            <div className='App'>
                <HijoE03/>
            </div>
        </UserProvider>
    )
}

export default AppE03;