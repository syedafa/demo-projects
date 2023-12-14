import { Route, Routes } from "react-router-dom";
import "./App.css";
import Battle from "./components/Battle";
import Main from "./components/Main";
import AppContext from "./utils/context";
function App() {
  return (
    <div>
      <AppContext>
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/battle" exact element={<Battle />} />{" "}
        </Routes>
      </AppContext>
    </div>
  );
}

export default App;
