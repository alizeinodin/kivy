import RegisterFormAmir from "./components/RegisterForm/RegisterFormAmir";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TicketPage from "./components/TicketPage/TicketPage";
import IntroPage from "./components/IntroPage/IntroPage";
import RegistrationError from "./components/RegistrationError/RegistrationError";
import RegisterSuccessfully from "./components/RegisterSuccessfully/RegisterSuccessfully";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/Register/:id" element={<RegisterFormAmir />} />
        <Route path="/Ticket/:id/:id" element={<TicketPage />} />
        <Route
          path="/RegisterSuccessfully"
          element={<RegisterSuccessfully />}
        />
        <Route path="/RegistrationError" element={<RegistrationError />} />
      </Routes>
    </Router>
  );
}

export default App;
