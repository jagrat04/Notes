import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import initialHome from "./pages/initialHome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<initialHome/>} />
        <Route path="/playground" element={<Playground />} />
      </Routes>
    </Router>
  );
}

export default App;

