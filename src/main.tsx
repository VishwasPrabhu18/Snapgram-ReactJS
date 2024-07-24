import ReactDom from "react-dom/client";
import App from './App';
import "./globals.css";
import {BrowserRouter as Router} from "react-router-dom";

ReactDom.createRoot(document.getElementById('root')!).render(
  <Router>
     <App />
 </Router>
);