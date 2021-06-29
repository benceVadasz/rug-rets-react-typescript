import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Design from "./pages/Design";
import DesignProvider from "./context/DesignProvider";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/login" children={<Login />} />
      <DesignProvider>
        <Route exact path="/design" children={<Design />} />
      </DesignProvider>
    </Router>
  );
}

export default App;
