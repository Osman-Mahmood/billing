import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Billing from './components/Billing';
import Invoice from './components/Invoice';

function App() {
  return (
    <div className="App">
       {/* <Billing /> */}
       {/* <Invoice /> */}
       <BrowserRouter>
       <Routes>
       <Route exact path="/" element={<Home />} />
       <Route exact path="/billing" element={<Billing />} />

       <Route exact path="/invoice" element={<Invoice />} />


       </Routes>
       </BrowserRouter>

    </div>
  );
}

export default App;
