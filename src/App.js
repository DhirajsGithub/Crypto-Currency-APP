import { Fragment } from "react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import CoinDetail from "./Pages/Page2";
import Page from "./Pages/Page";


function App() {
  return (
    <Fragment>
    <main>
      <Routes>
        <Route path="/" render={()=><Navigate to="/coins" />} element={<Page/>} />
        <Route path="/coins/:coinId" element={<CoinDetail />} />
      </Routes>
    </main>
      
    </Fragment>
  );
}

export default App;
