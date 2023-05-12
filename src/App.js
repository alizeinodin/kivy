import RegisterFormAmir from "./components/RegisterForm/RegisterFormAmir";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TicketPage from "./components/TicketPage/TicketPage";
import IntroPage from "./components/IntroPage/IntroPage";
import RegisterSuccessfully from "./components/RegisterSuccessfully/RegisterSuccessfully";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/Register/:id" element={<RegisterFormAmir />} />
        <Route path="/ticket/:id/:id" element={<TicketPage />} />
        <Route
          path="/ticket/:id/:id/verify"
          element={<RegisterSuccessfully />}
        />
      </Routes>
    </Router>
  );
}

export default App;
