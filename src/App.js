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
import ThreeDProjects from './pages/ThreeDProjects';
import ThreeDDetail from './pages/ThreeDDetail';
import Upload from './pages/Upload';
import Kumks from './pages/Kumks';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/3d" exact element={<ThreeScene objSrc='https://2022-koreauniv-dataton.s3.ap-northeast-2.amazonaws.com/3d-Model/wall_e.obj' objPos={[0, 0, 0]} camPos={[0,0,3.5]}/>} /> 
          <Route path="/about-us" exact element={<AboutUs />} />
          <Route path="/three-d-projects/:objId" exact element={<ThreeDDetail />} />
          <Route path="/three-d-projects" exact element={<ThreeDProjects />} />
          <Route path="/upload" exact element={<Upload />} />
          <Route path="/kumks" exact element={<Kumks />} />
          <Route path="/" exact element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;