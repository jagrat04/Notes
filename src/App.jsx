import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InitialHome from "./pages/initialHome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InitialHome/>} />
      </Routes>
    </Router>
  );
}

export default App;

