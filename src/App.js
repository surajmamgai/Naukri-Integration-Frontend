import { Route, BrowserRouter, Routes } from "react-router-dom";
import './App.css';
import Job from "./components/Job/Job";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route exact path="" Component={Job} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
