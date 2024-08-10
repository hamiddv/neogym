import {Hero} from "../../Components/Hero/Hero.jsx";

export function NotFound() {
    return (
        <>
            <Hero/>
            <div className={"text-center bg-red-700 px-32 py-60"}>
                <h1 className={"text-white text-5xl"}>
                    Nothing Was Found
                </h1>
            </div>
        </>
    )
}