import React from "react";
//
import Styled_Global_Styles from "./styles/Global_Style";
//
import { Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Global_Style from "./styles/Global_Style";

const App = () => {
    return (
        <div className="App">
            <Global_Style/>
            <AboutMe />
        </div>
    );
}

export default App;
