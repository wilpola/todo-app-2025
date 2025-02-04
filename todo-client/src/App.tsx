import { Navigation } from "./components";
import { Routes, Route } from "react-router-dom";
import { Home } from "./views/Home";
import { BasicView } from "./views";

// Code for the main App component
function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basic" element={<BasicView />} />
        <Route path="/advanced" element={<div>Advanced</div>} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </>
  );
}

export default App;
