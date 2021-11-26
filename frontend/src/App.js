//Components
import { BrowserRouter, Route, Routes } from "react-router-dom";
//style
import Global from "./style/components/Global";
//Components
import Welcome from "./components/Welcome";
import Home from "./components/Home";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <Global />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/thought" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
