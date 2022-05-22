import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { publicRoute } from './Routes/publicRoutes';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
    <Navbar>
      <Routes>
        {publicRoute.map(({path, Component}, index) => <Route path={path} key={index} element={<Component/>} />)}
      </Routes>
    </Navbar>
    </>
  );
}

export default App;
