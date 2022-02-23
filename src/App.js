import React from 'react';
import AboutMe from "./pages/AboutMe";
// Global Style
import GlobalStyles from "./styles/GlobalStyles";

const App = () => {
    return (
        <div className={'App'}>
            <GlobalStyles/>
            <AboutMe/>
        </div>
    );
};

export default App;
