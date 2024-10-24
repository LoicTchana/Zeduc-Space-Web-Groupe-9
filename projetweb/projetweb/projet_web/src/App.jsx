//import React from 'react';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./Connexion/Header";
import MainContent from "./Connexion/main";
import Footer from "./Connexion/footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InscriptionHeader from "./Inscription/inscriptionheader"
import InscriptionFooter from "./Inscription/inscriptionfooter";



function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/Inscription" element={<InscriptionHeader />} />
      </Routes>
    </Router>
      {/*}
      <Header/>
      <MainContent />
      <Footer/>*/}
    </div>
  );
}


export default App;