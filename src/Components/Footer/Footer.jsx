import {FooterItem} from "../FooterItem/FooterItem.jsx";

export function Footer() {
    return (<>
        <section className={"bg-[#252233]"}>
            <div className={"container mx-auto py-8"}>
                <div className={"grid grid-cols-1 sm:grid-cols-3 w-full md:w-[70%] mx-auto items-center "}>
                    <FooterItem logoSrc={"/src/assets/Footer/telephone-white.png"} content={"Location"}/>
                    <FooterItem logoSrc={"/src/assets/Footer/telephone-white.png"} content={"+02 1234567890"}/>
                    <FooterItem logoSrc={"/src/assets/Footer/envelope-white.png"} content={"example@example.com"}/>
                </div>
            </div>
        </section>
    </>);
}