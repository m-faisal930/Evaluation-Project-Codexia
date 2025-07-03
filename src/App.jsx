import './App.css'
import { ToastContainer, Bounce } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import Page404 from './pages/Page404';
import Home from './pages/Home';



function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App
