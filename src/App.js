import RegisterForm from "./components/RegisterForm/RegisterForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Header/Nav/Nav";
import Slider from "./components/IntroducingInstructor/Slider/Slider";
import TicketPage from "./components/TicketPage/TicketPage";
import IntroducingInstructor from './components/IntroducingInstructor/IntroducingInstructor'
function App() {
  return (
   <IntroducingInstructor/>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<RegisterForm />} />
    //     <Route path="/Register" element={<RegisterForm />} />
    //     <Route path="/Ticket" element={<TicketPage/>}/>
    //   </Routes>
    // </Router>
    // <div className='w-full h-screen bg-[#616473] flex items-center'>
    //   <RegisterForm />
    // </div>
  );
}

export default App;
