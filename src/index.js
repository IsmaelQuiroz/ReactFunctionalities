import React from 'react';
import ReactDOM from 'react-dom';
import CompA from './componentes/CompA';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ProvedorDataContext} from './contexts/dataContext';


 ReactDOM.render( 
   <React.StrictMode>
       <ProvedorDataContext>
         <CompA />
       </ProvedorDataContext>
   </React.StrictMode>,
   document.getElementById('root')
 );

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
