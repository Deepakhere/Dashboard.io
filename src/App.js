import "./App.css";

import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Customer from "./components/Customer"
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Routes>

            <Route exact path="/" element={<Main />} />
            <Route exact path='/customer' element={<Customer />} />
            <Route exact path='/cards' element={<Cards />} />
          
          </Routes>
        </Router>
      </div>
    </>

  );
}

export default App;
