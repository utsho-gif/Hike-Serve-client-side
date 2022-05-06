import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./pages/Shared/Header/Header";
import SignIn from "./pages/SignIn/SignIn/SignIn";
import Inventory from "./pages/Inventory/Inventory";
import RequireAuth from "./pages/SignIn/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/inventory"
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }
        ></Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
      </Routes>
    </div>
  );
}

export default App;
