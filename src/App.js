import RegisterForm from "./components/RegisterForm/RegisterForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Header/Nav/Nav";
import Slider from "./components/IntroducingInstructor/Slider/Slider";
import TicketPage from "./components/TicketPage/TicketPage";
import IntroducingInstructor from "./components/IntroducingInstructor/IntroducingInstructor";
import Header from "./components/Header/Header";
import IntroPage from "./components/IntroPage/IntroPage";
function App() {
  return (
    // <Kiwi />
    // <TicketPage />
    //  <Header/>
    // <Slider/>
    <Router>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/Register" element={<RegisterForm />} />
        <Route path="/Ticket" element={<TicketPage/>}/>
      </Routes>
    </Router>
    // <div className='w-full h-screen bg-[#616473] flex items-center'>
    //   <RegisterForm />
    // </div>
  );
}

export default App;
