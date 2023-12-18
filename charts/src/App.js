import React from "react";
import Carddata from "./components/Carddata";
import Tablelist from "./components/Tablelist";
import Barchart from "./components/Barchart";
import Areachart from "./components/Areachart";
import "./App.css";
const App = () => {
  return (
    <div className="app">
      <div>1. Area Chart</div>
      <Areachart />
      <hr />
      <div>2. Bar Chart</div>
      <Barchart />
      <hr />
      <div>3. Table List</div>
      <Tablelist />
      <hr />
      <div>4. Card Data</div>
      <Carddata />
    </div>
  );
};

export default App;
