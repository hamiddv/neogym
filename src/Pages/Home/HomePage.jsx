import {WhyChooseUs} from "../../Components/WhyChooseUs/WhyChooseUs.jsx";
import {Healthy} from "../../Components/Healthy/Healthy.jsx";
import {Trainers} from "../../Components/Trainers/Trainers.jsx";
import {ContactUs} from "../../Components/ContactUs/ContactUs.jsx";
import {Hero} from "../../Components/Hero/Hero.jsx";

export function HomePage() {
    return (<>
        <Hero/>
        <WhyChooseUs/>
        <Healthy/>
        <Trainers/>
        <ContactUs/>
    </>);
}