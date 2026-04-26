import React ,{ useState} from 'react'; //permite guardar cierto estado dentro de nuestra apps
import './App.css';
import HijoE02 from './componentes/HijoE02';
export const userContext = React.createContext();


function AppE02() {

  const [user, setUser] = useState(null);
  const cambiaLogin = () => {
    if(user){
      setUser(null);
    }else{
      setUser({
        name: 'Luis', email: 'luis@mail.com'
      });
    }
  }

  //Envolvemos todos los componentes con el contexto
  //el value del provider puede ser lo que sea.. una funcion, una variable un estado..
  return (
    <userContext.Provider value={user}>
      <button onClick={cambiaLogin}> Cambia Login</button>
      <div className="App">
        <HijoE02/>
      </div>
   </userContext.Provider>
  );

}

export default AppE02;
