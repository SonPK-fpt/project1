import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RouterComponent from "./Router";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <RouterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
