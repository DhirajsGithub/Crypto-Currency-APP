import { Fragment } from "react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import Page from "./Pages/Page";


function App() {
  return (
    <Fragment>
    <main>
      <Routes>
        <Route path="/*" render={()=><Navigate to="/" />} element={<Page/>} />
      </Routes>
    </main>
      
    </Fragment>
  );
}

export default App;
