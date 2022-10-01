import { Fragment, useContext } from "react";
import { Pagination } from "react-bootstrap";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import Page from "./Pages/Page";
import AuthContext from "./Store/Api";


function App() {
  const params = useParams();
    console.log(params.pageNo)
    const ctx = useContext(AuthContext);
    const handlePagination = ()=>{
      ctx.handlePageNo(3)
    }
  return (
    <Fragment>
    <main>
      <Routes>
        <Route path="/" render={()=><Navigate to="/page/1" />} element={<Page/>} />
        <Route path="/page/:pageNo" element={<Page />} />
      </Routes>
    </main>
      
    </Fragment>
  );
}

export default App;
