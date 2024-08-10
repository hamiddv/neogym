import {Header} from "../Header/Header.jsx";
import {HeroSlider} from "../HeroSlider/HeroSlider.jsx";

export function Hero() {
    function isHomePage() {
        return location.pathname === "/";
    }

    return (
        <>
            <section
                className={`${isHomePage() ? "h-screen" : "name"} flex flex-col justify-items-start px-6 py-6 bg-header bg-top bg-no-repeat bg-cover bg-fixed`}>
                <Header/>
                {isHomePage() && <HeroSlider/>}
            </section>
        </>
    );
}