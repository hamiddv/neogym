import {useState} from "react";

export function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    return (<>
        <section className={"bg-[#27223f]"}>
            <div className={"grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-6 py-4"}>
                <div className={""}>
                    <img src={"/src/assets/ContactUs/contact-img.jpg"} className={"w-full"}/>
                </div>
                <div>
                    <div className={"p-16 pb-0"}>
                        <div className={"relative text-left mb-9"}>
                            <h2 className={"text-2xl md:text-4xl  uppercase font-extrabold"}>Contact Us</h2>
                            <span
                                className={"absolute block w-12 md:w-16 h-1.5 rounded-full left-9 transform -translate-x-1/2 -bottom-2 bg-red-500"}/>
                        </div>
                        <form>
                            <div className={"my-5"}>
                                <label>
                                    <input
                                        type={"text"}
                                        value={name}
                                        name={"name"}
                                        id={"name"}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder={"Name"}
                                        className={"w-full text-black text-base placeholder:text-base p-3 placeholder:text-black placeholder:font-extralight"}/>
                                </label>
                            </div>
                            <div className={"my-5"}>
                                <label>
                                    <input
                                        value={email}
                                        type={"email"}
                                        name={"email"}
                                        id={"email"}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder={"Email"}
                                        className={"w-full text-black text-base placeholder:text-base p-3 placeholder:text-black placeholder:font-extralight"}/>
                                </label>
                            </div>
                            <div className={"my-5"}>
                                <label>
                                    <input
                                        value={phoneNumber}
                                        name={"phoneNumber"}
                                        id={"phoneNumber"}
                                        type={"tel"}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        placeholder={"Phone Number"}
                                        className={"w-full text-black text-base placeholder:text-base p-3 placeholder:text-black placeholder:font-extralight"}/>
                                </label>
                            </div>
                            <div className={"my-5"}>
                                <label>
                                    <textarea
                                        value={message}
                                        name={"message"}
                                        id={"message"}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder={"Message"}
                                        className={"w-full text-black text-base placeholder:text-base p-3 placeholder:text-black placeholder:font-extralight"}/>
                                </label>
                            </div>
                            <div className={"flex justify-center sm:justify-end align-center"}>
                                <button className={"bg-red-500 px-16 py-3"}>Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>);
}