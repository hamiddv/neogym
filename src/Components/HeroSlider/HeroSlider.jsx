import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination, Parallax} from "swiper/modules";
import 'swiper/swiper-bundle.css';
import './CustomSlider.css';

export function HeroSlider() {
    const sliderContent = ["1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse .", "2Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse .", "3Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse .", "4Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse .", "5Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse ."]

    return (
        <>
            <div className={"text-center flex-grow flex flex-col justify-center align-center "}>
                <div>
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation, Parallax]}
                        autoplay={{delay: 6000}}
                        spaceBetween={50}
                        slidesPerView={1}
                        pagination={{clickable: true}}
                        loop={true}
                        parallax={true}
                    >
                        {sliderContent.map((content, index) => (<SwiperSlide key={index}>
                            <h3 className={" mb-2 uppercase font-bold text-2xl pb-1"}>Fitness</h3>
                            <h2 className={"mb-2 uppercase font-bold text-4xl"}>Training</h2>
                            <h1 className={"mb-2 uppercase font-bold text-6xl"}>Neogym</h1>
                            <p className={"mb-4 mt-6 w-9/12 mx-auto"}>{content}</p>
                            <button
                                className={"py-2 mt-9 px-9  bg-transparent border-2 mb-16 hover:bg-white hover:text-black duration-500"}>Contact
                                Us
                            </button>
                        </SwiperSlide>))}
                    </Swiper>
                </div>
            </div>
        </>
    )
}