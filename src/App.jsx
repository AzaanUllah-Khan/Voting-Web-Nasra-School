import React from 'react';
import './App.css';
import "@fontsource/poppins";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Headboy from './Pages/Headboy';
import Headgirl from './Pages/Headgirl';
import DepHeadboy from './Pages/DepHeadboy';
import DepHeadgirl from './Pages/DepHeadgirl';
import Main from './Pages/Main';
import Finish from './Pages/Finish';

const getTransitionClassNames = (pathname) => {
  switch (pathname) {
    case '/finish':
      return 'fade';
    default:
      return 'page';
  }
};

const AnimatedRoutes = () => {
  const location = useLocation();
  const transitionClassNames = getTransitionClassNames(location.pathname);

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames={transitionClassNames}
        timeout={300}
      >
        <Routes location={location}>
          <Route path="/" element={<Main />} />
          <Route path="/headboy" element={<Headboy />} />
          <Route path="/headgirl" element={<Headgirl />} />
          <Route path="/depheadboy" element={<DepHeadboy />} />
          <Route path="/depheadgirl" element={<DepHeadgirl />} />
          <Route path="/finish" element={<Finish />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

const App = () => (
  <Router>
    <AnimatedRoutes />
  </Router>
);

export default App;