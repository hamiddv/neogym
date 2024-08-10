import {FaFacebookF, FaTwitter} from "react-icons/fa";
import {IoLogoInstagram} from "react-icons/io";
import PropTypes from "prop-types";
import {WhyChooseUsItem} from "../WhyChooseUsItem/WhyChooseUsItem.jsx";

export function Trainer({name, imgSrc, faceBookUrl, twitterUrl, instagramUrl}) {
    return (
        <>
            <li className={"w-96 mb-16 mx-8 flex justify-center"}>
                <div className={"relative"}>
                    <h5 className={"text-lg md:text-xl mb-4"}>{name}</h5>
                    <img className={"rounded-3xl w-full h-auto"} src={imgSrc}/>
                    <div
                        className={"absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 bg-white w-2/3 flex items-center justify-center rounded-full px-8 md:px-12 py-2 md:py-3"}>
                        <button className={"text-red-500"}><a href={faceBookUrl}><FaFacebookF
                            className={"fill-red-500 h-[20px] md:h-[25px] w-[13px]"}/></a></button>
                        <button className={"text-red-500 mx-3 md:mx-5"}><a href={twitterUrl}><FaTwitter
                            className={"fill-red-500 h-[20px] md:h-[25px] w-[25px] md:w-[30px]"}/></a></button>
                        <button className={"text-red-500"}><a href={instagramUrl}><IoLogoInstagram
                            className={"fill-red-500 h-[25px] md:h-[30px] w-[25px] md:w-[30px]"}/></a></button>
                    </div>
                </div>
            </li>
        </>
    )
}

Trainer.propTypes = {
    name: PropTypes.string,
    imgSrc: PropTypes.string,
    faceBookUrl: PropTypes.string,
    twitterUrl: PropTypes.string,
    instagramUrl: PropTypes.string
};

