import PropTypes from "prop-types";

export function FooterItem({logoSrc, content}) {
    return (
        <>
            <div className={"flex flex-col justify-center items-center mb-4"}>
                <div className={"flex flex-col justify-center items-center"}>
                    <img src={logoSrc }/>
                </div>
                <p className={"mt-5"}>{content}</p>
            </div>
        </>
    )
}

FooterItem.propTypes = {
    logoSrc: PropTypes.string,
    content: PropTypes.string
};

