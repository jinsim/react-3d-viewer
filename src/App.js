import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ThreeScene from './components/ThreeScene.js';
import Main from './pages/Main.js';
import NavBar from './components/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/3d" exact element={<ThreeScene obj='Model3D/owl_1000.obj'/>} /> 
          <Route path="/" exact element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;