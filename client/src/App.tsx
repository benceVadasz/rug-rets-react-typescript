import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import {Route, BrowserRouter as Router} from "react-router-dom";
import Design from "./pages/Design";
import DesignProvider from "./context/DesignProvider";
import DesignDetails from "./pages/DesignDetails";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Feed from "./pages/Feed";

function App() {
    return (
        <Router>
            <Navbar/>
            <Route exact path="/login" children={<Login/>}/>
            <Route exact path="/register" children={<Register/>}/>
            <Route path="/profile" children={<Profile/>}/>
            <Route exact path="/design" children={<Design/>}/>
            <Route exact path="/design/:id" children={<DesignDetails/>}
            />
            <DesignProvider>
                <Route exact path="/feed" children={<Feed/>}/>
            </DesignProvider>
        </Router>
    );
}

export default App;
