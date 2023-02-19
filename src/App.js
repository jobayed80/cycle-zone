
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Registration from './pages/Registration/Registration';
import Loading from './Loading/Loading';

function App() {
  return (
    <div className="App">
       {/* <Loading></Loading>   */}
      <BrowserRouter>
        <Routes>
         
          <Route path="/home" element={<Home/>}/>
          <Route path="/loading" element={<Loading/>}/>
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
