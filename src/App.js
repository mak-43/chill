import Navbar from "./Components/Navbar";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    <div >

      <Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </Navbar>


      hello

    </div>
  );
}

export default App;
