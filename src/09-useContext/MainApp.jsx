import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { AboutPage } from './AboutPage';
import { NavBar } from './NavBar';

export const MainApp = () => {
  return (
    <>
        <h1>MainApp</h1>
        <NavBar />
        <hr/>

        <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="login" element={ <LoginPage /> } />
            <Route path="about" element={ <AboutPage /> } />

            { /* Si la url no existe lo envía al Login */ }
            { /* < Route path="/*" element={ <LoginPage /> } /> */ }
            { /* Si la url no existe lo envía al About pero sin utilizar el componente */ }
            <Route path="/*" element={ <Navigate to="/about" /> } />
        </Routes>
    </>
  )
}
