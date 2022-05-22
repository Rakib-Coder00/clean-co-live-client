import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { publicRoute } from './Routes/publicRoutes';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { privateRoutes } from './Routes/privateRoutes';
import PrivateRoute from './authentication/PrivateRoute';
import AdminRoute from './authentication/AdminRoute';
import Dashboard from './Pages/Dashboard/Dashboard';
import AddAdmin from './Pages/Dashboard/AddAdmin';
import AddService from './Pages/Dashboard/AddService';



function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Navbar>
        <Routes>
          {publicRoute.map(({ path, Component }, index) => <Route path={path} key={index} element={<Component />}
          />)}

          <Route element={<PrivateRoute />}>
            {privateRoutes.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          </Route>
          <Route element={<AdminRoute />}>
            <Route path='/dashboard' element={<Dashboard />}>
              <Route path='add-admin' element={<AddAdmin />} />
              <Route path='add-service' element={<AddService />} />
            </Route>
          </Route>

        </Routes>
      </Navbar>
    </>
  );
}

export default App;
