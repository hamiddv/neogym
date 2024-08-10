import {WhyChooseUsItem} from "../WhyChooseUsItem/WhyChooseUsItem.jsx";

export function WhyChooseUs() {
    return (
        <>
            <section className={"bg-why-choose-us bg-fixed bg-no-repeat bg-cover bg-center"}>
                <div className={"container mx-auto py-32 bold text-4xl flex flex-col items-center"}>
                    <div className={"relative text-center"}>
                        <h2 className={"text-4xl uppercase font-extrabold"}>Why Choose Us</h2>
                        <span
                            className={"absolute block w-16 h-1.5 rounded-full left-1/2 transform -translate-x-1/2 -bottom-2 bg-red-500"}/>
                    </div>
                    <div>
                        <ul className={"flex flex-wrap justify-around items-center text-center mt-16 mx-auto"}>
                            <WhyChooseUsItem title={"QUALITY EQUIPMENT"} imgSrc={"/src/assets/WhyChooseUs/img.png"} content={"ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"}/>
                            <WhyChooseUsItem title={"NUTRITION"} imgSrc={"/src/assets/WhyChooseUs/img_1.png"} content={"ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"}/>
                            <WhyChooseUsItem title={"HEALTHY DIET PLAN"} imgSrc={"/src/assets/WhyChooseUs/img_2.png"} content={"ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"}/>
                            <WhyChooseUsItem title={"SPORT TRAINING"} imgSrc={"/src/assets/WhyChooseUs/img_3.png"} content={"ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"}/>
                        </ul>

                    </div>
                </div>
            </section>
        </>
    );
}