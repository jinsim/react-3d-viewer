import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ThreeScene from './components/ThreeScene.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/3d" exact element={<ThreeScene obj='Model3D/owl_1000.obj'/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
