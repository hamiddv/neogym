import {Link, useLocation} from "react-router-dom";
import {useState} from "react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    function isActive(path) {
        return location.pathname === path;
    }

    return (<>
        <nav className={"flex flex-col justify-center"}>
            <div className={"flex justify-between items-center"}>
                <div>
                    <Link to="/" className={"text-2xl font-bold"}>Neogym</Link>
                </div>
                <div className={"flex flex-col items-end"}>
                    <div className={"md:hidden "}>
                        <button onClick={() => setIsOpen(!isOpen)} accessKey={"nav-burger-menu"}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`hidden md:flex md:items-center md:justify-center md:w-auto`}>
                        <ul className={"flex flex-col md:flex-row justify-around align text-base"}>
                            <li className={"mx-4"}>
                                <Link
                                    to="/"
                                    className={`${isActive("/") ? "border-b-2 border-b-red-500" : "hover:border-b-2 hover:border-b-red-500"}`}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className={"mx-4"}>
                                <Link
                                    to="/why-us"
                                    className={`${isActive("/why-us") ? "border-b-2 border-b-red-500" : "hover:border-b-2 hover:border-b-red-500"} border-b-2 border-b-transparent`}
                                >
                                    Why Us
                                </Link>
                            </li>
                            <li className={"mx-4"}>
                                <Link
                                    to="/trainers"
                                    className={`${isActive("/trainers") ? "border-b-2 border-b-red-500" : "hover:border-b-2 hover:border-b-red-500"} border-b-2 border-b-transparent`}
                                >
                                    Trainers
                                </Link>
                            </li>
                            <li className={"mx-4"}>
                                <Link
                                    to="/contact-us"
                                    className={`${isActive("/contact-us") ? "border-b-2 border-b-red-500" : "hover:border-b-2 hover:border-b-red-500"} border-b-2 border-b-transparent`}
                                >
                                    Contact
                                    Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className={`${isOpen ? "block" : "hidden"} flex flex-col justify-center items-center text-center`}>
                <ul className={"md:hidden flex flex-col md:flex-row justify-around align text-base mb-16"}>
                    <li className={`my-4 px-1 ${isActive("/") ? "border-b-2 border-b-red-500" : "hover:border-b-2 hover:border-b-red-500 border-b-2 border-b-transparent    "} `}>
                        <Link
                            to="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li className={`my-4 px-1 ${isActive("/why-us") ? "border-b-2 border-b-red-500" : "hover:border-b-2 hover:border-b-red-500 border-b-2 border-b-transparent"} `}>
                        <Link
                            to="/why-us"
                        >
                            Why Us
                        </Link>
                    </li>
                    <li className={`my-4 px-1 ${isActive("/trainers") ? "border-b-2 border-b-red-500" : "hover:border-b-2 hover:border-b-red-500 border-b-2 border-b-transparent"}`}>
                        <Link
                            to="/trainers"
                        >
                            Trainers
                        </Link>
                    </li>
                    <li className={`my-4 px-1 ${isActive("/contact-us") ? "border-b-2 border-b-red-500" : "hover:border-b-2 hover:border-b-red-500 border-b-2 border-b-transparent"}`}>
                        <Link
                            to="/contact-us"
                        >
                            Contact
                            Us
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>);
}