import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Doctor from './components/Doctor';
import DoctorDetails from './components/DoctorDetails';
import Department from './components/Department';
import Contact from './components/Contact';
import About from './components/About';
import Appointment from './components/Appointment';
import Auth from './components/Auth';
import PrivateRoute from './roots/PrivateRoute';
import AppointmentList from './components/AppointmentList';
import Medicine from './components/Medicine';
import Contactlist from './components/Contactlist';
import PublicRoute from './roots/PublicRoute';
import { createContext, useState } from 'react';
import ReactSwitch from 'react-switch';
import Registration from './components/Registration';

// export const ThemeContext = createContext("null");
function App() {

  // const [theme, settheme] = useState("light")

  // const toggleTheme = () => {
  //   settheme((curr) => (curr === "light" ? "dark" : "light"));
  // }


  return (
    <>
      {/* <ThemeContext.Provider value={{ theme, toggleTheme }} />
      <div id={theme}>
        <div className='switch'>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
          <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
        </div>

        </div>
      <ThemeContext.Provider /> */}

        <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/doctor' element={<PrivateRoute><Doctor /></PrivateRoute>} />
        <Route exact path='/doctor/:id' element={<PrivateRoute><DoctorDetails /></PrivateRoute>} />
        <Route exact path='/department' element={<Department />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/Contactlist' element={<Contactlist />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/appointment' element={<Appointment />} />
        <Route exact path='/appointment-list' element={<AppointmentList />} />
        <Route exact path='/auth' element={<Auth />} />
        <Route exact path='/registration' element={<Registration />} />
        <Route exact path='/medicine' element={<Medicine />} />
      </Routes>
      <Footer />
      {/* <ThemeContext.Provider value={{theme , toggleTheme}}>
        <div id ={theme}>
            <div className='toggl'>
                  <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
                  <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
            </div> */}
            {/* <Medicine/> */}
        {/* </div>
        </ThemeContext.Provider> */}
{/* 
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div id={theme}>
        </div>
      </ThemeContext.Provider>  */}

    </>
  );
}

export default App;
