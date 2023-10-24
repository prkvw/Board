import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';

ReactDOM.render(
<ContextProvider><App />, document.getElementById('root')</ContextProvider> ) ;
//   <React.StrictMode>
//     <ContextProvider>
//       <App />
//     </ContextProvider>
//   </React.StrictMode>,
//   document.getElementById('root'),
// );