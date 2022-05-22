import Home from './../Pages/Home';
// import About from './../Pages/About';
import Contact from './../Pages/Contact';
import Login from './../Pages/Login';

export const publicRoute = [
    { path: "/", name: "Home", Component: Home },
    // { path: "/about", name: "About", Component: About },
    // { path: "/services", name: "Services", Component: Services },
    { path: "/contact", name: "Contact", Component: Contact },
    { path: "/login", name: "Login", Component: Login },
  ];