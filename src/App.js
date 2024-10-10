import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import FOOTER from './paginas/formato/footer';
import NAV from "./paginas/formato/nav";
import "./paginas/estilos/footer.css";
import ASESORIA from "./paginas/asesoria";
import FINANCIACION from './paginas/financiacion';
import USADOS from './paginas/usados';
import EMPRESAS from './paginas/empresas'; // Asegúrate de importar tu componente 0Km
import INICIO from "./paginas/inicio";
import KM0 from './paginas/0km'; // Asegúrate de importar tu componente 0Km
import CONTACTO from './paginas/contacto'; // Asegúrate de importar tu componente de contacto

function App() {
  return (
    <Router>
      <div className="App">
        <NAV />
        <Routes>
          <Route path="/" element={<INICIO />} />
          <Route path="/0km" element={<KM0 />} />
          <Route path="/usados" element={<USADOS />} />
          <Route path="/financiacion" element={<FINANCIACION />} />
          <Route path="/empresas" element={<EMPRESAS />} />
          <Route path="/asesoria" element={<ASESORIA />} />
          <Route path="/contacto" element={<CONTACTO />} />
        </Routes>
        <FOOTER />
      </div>
    </Router>
  );
}

export default App;
