import { Routes, Route } from "react-router-dom"
import Home from './Home';
import Razorpaybutton from "./Razorpaybutton";

function App() {
  return (
    <div className="App">
      <Razorpaybutton />
       {/* <Routes>
        <Route exact path="/link/:url" element={ <Home /> } />
      </Routes> */}
    </div>
  );
}

export default App;
