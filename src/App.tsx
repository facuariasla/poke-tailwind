import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PokeDetail from "./pages/PokeDetail";

function App() {
  return (
    <div className="min-h-screen flex justify-center bg-gray-800 text-white">
      <div className="container 2xl ">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/:id' element={<PokeDetail/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
