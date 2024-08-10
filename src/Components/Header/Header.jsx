import {Navbar} from "../Navbar/Navbar.jsx";

export function Header() {
    return (<>
        <header>
            <div className={"uppercase flex-shrink-0"}>
                <Navbar/>
            </div>
        </header>
    </>);
}