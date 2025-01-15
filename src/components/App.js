import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Diplomas from "./Diplomas";
import Diploma from "./Diploma";
import Header from "./Header";
import Module from "./Module";
import Register from "./Register";
import Confirmation from "./Confirmation";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home title="Home" />} />
        <Route path="about" element={<About />} />
        <Route path="diplomas" element={<Diplomas />}>
          <Route path=":diplomaId" element={<Diploma />}>
            <Route path=":moduleId" element={<Module />} />
          </Route>
          <Route index element={<h3>Select a diploma from above</h3>}/>
        </Route>
        <Route path="register" element={<Register />} />
        <Route path="confirmed" element={<Confirmation />} />
        <Route
          path="*"
          element={<h1 className="not-found">Page Not Found</h1>}
        />
      </Routes>

      <footer className="container">
        &copy;2025 | <a href="https://www.rp.edu.sg/">Republic Polytechnic</a>
      </footer>
    </div>
  );
}

export default App;
