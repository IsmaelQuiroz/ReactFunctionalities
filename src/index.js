import React from 'react';
import ReactDOM from 'react-dom';
import CompA from './componentes/CompA';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ProvedorDataContext} from './contexts/dataContext';
//import AppE02 from './AppE02';
import AppE03 from './AppE03'


//Exercise 03: Aislado de contextos en 1 componente (aislados y encapsulados), es decir 1 provider 
//con UserProvider
ReactDOM.render(
  <React.StrictMode>
      <AppE03/>
  </React.StrictMode>,
  document.getElementById('root')
);


//Excercise02
// ReactDOM.render(
//   <React.StrictMode>
//       <AppE02/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//Excercise01
//  ReactDOM.render( 
//    <React.StrictMode>
//        <ProvedorDataContext>
//          <CompA />
//        </ProvedorDataContext>
//    </React.StrictMode>,
//    document.getElementById('root')
//  );



 //prepare and run after
// const root = ReactDOM.c reateRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <provedorDataContext>
//        <compA/>
//     </provedorDataContext>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
