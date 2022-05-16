import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./pages/Shared/Header/Header";
import SignIn from "./pages/SignIn/SignIn/SignIn";
import Inventory from "./pages/Inventory/Inventory";
import RequireAuth from "./pages/SignIn/RequireAuth/RequireAuth";
import SignUp from "./pages/SignIn/SignUp/SignUp";
import ManageInv from "./pages/ManageInv/ManageInv";
import AddInventory from "./pages/AddInventory/AddInventory";
import MyItem from "./pages/MyItem/MyItem";
import Footer from "./pages/Shared/Footer/Footer";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manageinventory"
          element={<ManageInv></ManageInv>}
        ></Route>
        <Route
          path="/addinventory"
          element={<AddInventory></AddInventory>}
        ></Route>
        <Route
          path="/myitems"
          element={
            <RequireAuth>
              <MyItem></MyItem>
            </RequireAuth>
          }
        ></Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
