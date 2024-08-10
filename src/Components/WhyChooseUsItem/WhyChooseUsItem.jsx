import PropTypes from "prop-types";

export function WhyChooseUsItem({title, content, imgSrc}) {
    return (<>
        <li className={"flex flex-col px-3.5 py-4 items-center w-full sm:w- md:w-72"}>
            <img className={"w-16 mb-4"} src={"/src/assets/WhyChooseUs/img.png"}/>
            <h5 className={"text-xl mb-2 font-extrabold"}>{title}</h5>
            <p className={"text-base"}>{content}</p>
        </li>
    </>)
}

WhyChooseUsItem.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    imgSrc: PropTypes.string
};
