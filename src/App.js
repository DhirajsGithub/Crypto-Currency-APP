import { Fragment, useContext } from "react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import CoinDetail from "./Pages/Page2";
import Page from "./Pages/Page";
import AuthContext from "./Store/Api";


function App() {
  const ctx = useContext(AuthContext)
  return (
    <Fragment>
    <main className={`${ctx.isDark && "isDark"}`}>
      <Routes>
        <Route path="/coins" render={()=><Navigate to="/" />} element={<Page/>} />
        <Route path="/" element={<Page />}/>
        <Route path="/coins/:coinId" element={<CoinDetail />} />
      </Routes>
    </main>
      
    </Fragment>
  );
}

export default App;
