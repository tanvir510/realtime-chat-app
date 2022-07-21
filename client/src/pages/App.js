// Library Import
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// File Import
import { Chat, SignIn } from "../components/";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<SignIn />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
