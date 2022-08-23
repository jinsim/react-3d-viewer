import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ThreeScene from './components/ThreeScene.js';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Upload from './pages/Upload';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/3d" exact element={<ThreeScene obj='Model3D/owl_1000.obj'/>} /> 
          <Route path="/" exact element={<Home />} />
          <Route path="/about-us" exact element={<AboutUs />} />
          <Route path="/upload" exact element={<Upload />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;