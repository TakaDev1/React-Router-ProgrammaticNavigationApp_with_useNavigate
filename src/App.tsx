import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <>
      <div className="bg-gray-800 min-h-screen flex flex-col justify-center">
        <BrowserRouter>
          <h1 className="text-sm">React-Router-ProgrammaticNavigationApp_with_useNavigate</h1>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
