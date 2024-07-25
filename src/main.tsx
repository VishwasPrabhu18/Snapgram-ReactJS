import ReactDom from "react-dom/client";
import App from './App';
import "./globals.css";
import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import { QueryProvider } from "./lib/react-query/QueryProvider";

ReactDom.createRoot(document.getElementById('root')!).render(
  <Router>
    <QueryProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </QueryProvider>
  </Router>
);