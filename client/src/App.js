import { Navigate, Route, Routes } from 'react-router';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import LoginUser from './component/LoginUser';
import MainApp from './component/MainApp';
import PageNotFound from './component/PageNotFound';
// import Home from './component/Pages/Home';
// import Contact from './component/Pages/Contact';
// import About from './component/Pages/About';
// import MainNavbar from './component/MainNavbar';

function App() {
  const location = useLocation()

  useEffect(() => {
    getAuthStatus();
  }, [location]);

  function getAuthStatus() {
    let token = localStorage.getItem("token");
    if (token) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>

      {/* <Routes>
        <Route path="/login" element={<LoginUser />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes> */}

      <Routes>
        <Route
          path="/"
          element={
            getAuthStatus() ? <MainApp /> : <Navigate replace to="/login" />
          }
        />
        <Route path="/login" element={<LoginUser />} />
        <Route path='/*' element={<MainApp />} />
        <Route path='*' element={<PageNotFound />} />

        


        <Route
          path="/"
          element={
            getAuthStatus() ? (
              <Navigate replace to="/" />
            ) : (
              <Navigate replace to="/login" />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
