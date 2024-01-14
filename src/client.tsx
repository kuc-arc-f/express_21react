import React from 'react'
import ReactDOM from 'react-dom/client'
//import { BrowserRouter } from 'react-router-dom';
//import App from './App';

function App(){
  return(
    <div>
      <h1>app.tsx</h1>
    </div>
  )
}
console.log("#client.ts");
//root
ReactDOM.createRoot(document.getElementById('root')!).render(
  <div>
        <App />
  </div>
);
