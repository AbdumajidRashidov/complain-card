import "./App.css";

import CompliantCard from "./modules/Compliant/components/CompliantCard";
import OveralScore from "./modules/Compliant/components/OveralScore";

function App() {
  return (
    <div className="App">
      <CompliantCard />
      <OveralScore />
    </div>
  );
}

export default App;
