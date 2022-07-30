import Navbar from "./Components/Navbar";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import { Routes, Route } from 'react-router-dom'
import Video from "./Pages/Video";
import Add from "./Pages/Add";
import PrivateRoute from "./Components/PrivateRoute";


function App() {

  return (
    <div >

      <Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route element={<PrivateRoute/>}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="addvideo" element={<Video />}></Route>
              <Route path="add" element={<Add />}></Route>

            </Route>
          </Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </Navbar>


      hello

    </div>
  );
}

export default App;
