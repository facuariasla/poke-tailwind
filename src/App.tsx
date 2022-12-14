import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import PokeDetail from "./pages/PokeDetail";
import TypePage from "./pages/TypePage";

function App() {
  return (
    <div className="min-h-screen flex justify-center bg-gray-800 text-white">
      <div className="container 2xl ">
        <HashRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/:id' element={<PokeDetail/>}/>
            <Route path='/types' element={<TypePage/>}/>
          </Routes>
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
