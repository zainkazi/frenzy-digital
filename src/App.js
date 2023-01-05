import Appointment from "./Appointment";
import "./App.css";
import Companies from "./Companies";
import Header from "./Header";
import Homepage from "./Homepage";
import Intro from "./Intro";
import Revenue from "./Revenue";
import Confirmation from "./Confirmation";
import { Routes, Route } from "react-router";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Homepage />
              <Intro />
              <Companies />
              <Revenue />
              <Appointment />
            </>
          }
        />
        <Route path="/booked" element={<Confirmation />} />
      </Routes>
    </div>
  );
}

export default App;
