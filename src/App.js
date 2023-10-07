import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RouterBook from "./ShelfBook/Router";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <RouterBook />
      </BrowserRouter>
    </div>
  );
}

export default App;
