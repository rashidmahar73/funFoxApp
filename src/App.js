import { BrowserRouter } from "react-router-dom";

import { Dashboard } from "./pages";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Dashboard />
      </div>
    </BrowserRouter>
  );
}

export default App;
