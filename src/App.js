import Appointment from "./Appointment";
import "./App.css";
import Companies from "./Companies";
import Header from "./Header";
import Homepage from "./Homepage";
import Intro from "./Intro";
import Revenue from "./Revenue";
import Confirmation from "./Confirmation";

function App() {
  return (
    <div>
      <Header />
      <Homepage />
      <Intro />
      <Companies />
      <Revenue />
      <Appointment />
    </div>
  );
}

export default App;
