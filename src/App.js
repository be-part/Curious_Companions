import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Cats from "./Pages/Cats";
import Dogs from "./Pages/Dogs";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import '../src/Styles/app.scss';

function App() {

  const [open, setopen] = useState(true)

  const toggleOpen = () => {
      setopen(!open)
  }

  return (
    <div className="App">
      <Header toggleOpen={toggleOpen} open={open}/>
      <div className="wrapper">
      <Navbar open={open}/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cats" element={<Cats />} />
          <Route path="/dogs" element={<Dogs />} />
        </Routes>
      </main>
      </div>
    </div>
  );
}

export default App;
