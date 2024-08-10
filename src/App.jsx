import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {HomePage} from "./Pages/Home/HomePage.jsx";
import {Footer} from "./Components/Footer/Footer.jsx";
import {WhyUsPage} from "./Pages/WhyUs/WhyUsPage.jsx";
import {TrainersPage} from "./Pages/Trainers/TrainersPage.jsx";
import {ContactUsPage} from "./Pages/ContactUs/ContactUsPage.jsx";
import {NotFound} from "./Pages/NotFound/NotFound.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/why-us" element={<WhyUsPage/>}/>
                <Route path="/trainers" element={<TrainersPage/>}/>
                <Route path={"contact-us"} element={<ContactUsPage/>}/>
                <Route path={"*"} element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
