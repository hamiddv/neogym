import {Trainer} from "../Trainer/Trainer.jsx";

export function Trainers() {
    return (<>
            <section className={"bg-trainers py-16 md:py-32 bg-fixed bg-cover bg-center"}>
                <div className={"container mx-auto px-4 sm:px-6 md:px-8"}>
                    <div className={"relative text-center"}>
                        <h2 className={"text-2xl md:text-4xl uppercase font-extrabold"}>Our Gym Trainers</h2>
                        <span
                            className={"absolute block w-12 md:w-16 h-1.5 rounded-full left-1/2 transform -translate-x-1/2 -bottom-2 bg-red-500"}/>
                    </div>
                </div>
                <div className={"mx-4 sm:mx-6 md:mx-8"}>
                    <ul className={"flex flex-wrap justify-around items-center text-center mt-12 md:mt-16"}>
                        <Trainer name={"Smirth Jon"} imgSrc={"/src/assets/Trainer/t1.jpg"} faceBookUrl={"#"}
                                 twitterUrl={"#"} instagramUrl={"#"}/>
                        <Trainer name={"Jean Doe"} imgSrc={"/src/assets/Trainer/t2.jpg"} faceBookUrl={"#"}
                                 twitterUrl={"#"} instagramUrl={"#"}/>
                        <Trainer name={"Alex Den"} imgSrc={"/src/assets/Trainer/t3.jpg"} faceBookUrl={"#"}
                                 twitterUrl={"#"} instagramUrl={"#"}/>
                    </ul>
                </div>
            </section>
        </>);
}
