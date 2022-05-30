import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import CoinPage from './Pages/CoinPage';
import Home from './Pages/Home';
const styles = {
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
};

function App() {
  return (
   <BrowserRouter>
      <div style={styles.App}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coins/:id" element={<CoinPage />} />
            {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
