import RegisterForm from "./components/RegisterForm/RegisterForm";
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
        <Route path="/Register" element={<RegisterForm />} />
        <Route path="/Ticket" element={<TicketPage />} />
        <Route
          path="/RegisterSuccessfully"
          element={<RegisterSuccessfully />}
        />
        <Route path="/RegistrationError" element={<RegistrationError />} />
      </Routes>
    </Router>
    // <div className='w-full h-screen bg-[#616473] flex items-center'>
    //   <RegisterForm />
    // </div>
  );
}

export default App;
