import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Login from './Pages/Login';

function App() {
  return (
    <>
    <Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </Navbar>
    </>
  );
}

export default App;
