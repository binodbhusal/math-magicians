import './App.css';
import './css/cal.css';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import DisplayQoute from './components/QuoteDisplay';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<DisplayQoute />} />

      </Routes>

    </>
  );
}

export default App;
