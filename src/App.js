import logo from './logo.svg';
import './App.css';
import Navbar from './components/Home';
import AllRoutes from './components/Routes';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
    <AllRoutes/>
    <ToastContainer position="top-center" autoClose={4000} closeOnClick={true} />
    </>
  );
}

export default App;
