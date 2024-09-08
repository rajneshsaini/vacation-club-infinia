import "./App.css";
import "./output.css";
import "transition-style";
import { Route,  BrowserRouter as Router, Routes } from "react-router-dom";
import Courses from "./pages/courses";
import WelcomeScreen from "./components/WelcomeScreen";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Courses} />
          <Route path="/welcome" Component={WelcomeScreen} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
