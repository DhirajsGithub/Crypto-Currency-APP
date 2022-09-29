import { Fragment } from "react";
import "./App.css";
import { Coins } from "./Components/Coins/Coins";
import Header from "./Components/Header";
import Slogan from "./Components/Slogan";

function App() {
  return (
    <Fragment>
      <div className="App">
        <Header />
        <Slogan />
        <Coins /> 
      </div>
    </Fragment>
  );
}

export default App;
