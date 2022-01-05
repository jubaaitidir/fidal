import React,{Suspense, lazy} from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './components/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/Products';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";


const App = lazy(() => import("./components/App"));


ReactDOM.render(




  <React.StrictMode>

    <Suspense fallback={<h2>Chargement des données...</h2>}>
      <App />
      
    </Suspense>
       

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
