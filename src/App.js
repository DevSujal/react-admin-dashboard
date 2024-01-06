import { Table } from "@mui/material";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home/>
      </div>
    </div>
  );
}

export default App;
