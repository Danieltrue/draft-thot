//Components
import { BrowserRouter, Route, Routes } from "react-router-dom";
//style
import Global from "./style/components/Global";
//Components
import Welcome from "./components/Welcome";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Write from "./components/Write";

function App() {
  return (
    <div className="App">
      <Global />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} exact></Route>
          <Route path="/thought" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/write-story" element={<Write />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
