import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { publicRoute } from './Routes/publicRoutes';


function App() {
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
