import "./styles.css";
import Home from "./home";
import Navbar from "./navbar";
import { Routes, Route, HashRouter } from "react-router-dom";
import UserContext from "./Context";
import Withdraw from "./withdraw";
import Deposit from "./deposit";
import Login from "./login";
import AllData from "./alldata";

export default function App() {
  return (
    <HashRouter>
      <Navbar />

      <UserContext.Provider
        value={{
          users: [
            {
              name: "therila",
              email: "theila@gmail.com",
              password: "secret",
              balance: 0
            }
          ]
        }}
      >
        <div className="container" style={{ padding: "20px" }}>
          <Routes>
            <Route path="/home" exact element={<Home />} />
            <Route path="/login" element={<Login />} />

            <Route path="/deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw />} />

            <Route path="/alldata" element={<AllData />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </HashRouter>
  );
}
