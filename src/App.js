import { Routes, Route } from "react-router-dom"
import Home from './Home';
import Razorpaybutton from "./Razorpaybutton";

function App() {
  return (
    <div className="App">
       <Routes>
        <Route exact path="/payment/:pay_amount" element={ <Razorpaybutton /> } />
      </Routes>
    </div>
  );
}

export default App;
