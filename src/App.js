import React from "react";
import "./App.css";
import Image from "./image";
import Images from "./images";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Image />} />
          <Route path='/images' element={<Images />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
