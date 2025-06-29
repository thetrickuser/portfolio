import {NavigationItem} from "./NavigationItem.tsx";
import {FaBriefcase, FaUser, FaGear, FaBlog, FaMessage} from "react-icons/fa6";

type NavbarProps = {
    onClick: (sectionId: React.SetStateAction<string>) => void;
    activeSection: string;
    style: string;
}

export const Navbar = ({ onClick, activeSection, style }: NavbarProps ) => {
    return <nav className={`${style}`}>
        <ul className="flex flex-wrap bg-gray-200 dark:bg-gray-700 p-2 shadow-inner justify-evenly xl:rounded-bl-2xl xl:rounded-tr-2xl rounded-t-2xl xl:rounded-none">
            <NavigationItem onClick={onClick} activeSection={activeSection} title={"About"}
                            section={"about"} icon={<FaUser size={16} className="mr-1"/>}/>
            <NavigationItem onClick={onClick} activeSection={activeSection} title={"Resume"}
                            section={"what-i-do"} icon={<FaBriefcase size={16} className="mr-1"/>}/>
            <NavigationItem onClick={onClick} activeSection={activeSection} title={"Portfolio"}
                            section={"portfolio"} icon={<FaGear size={16} className="mr-1"/>}/>
            <NavigationItem onClick={onClick} activeSection={activeSection} title={"Blog"}
                            section={"blog"} icon={<FaBlog size={16} className="mr-1"/>}/>
            <NavigationItem onClick={onClick} activeSection={activeSection} title={"Contact"}
                            section={"contact"} icon={<FaMessage size={16} className="mr-1"/>}/>
        </ul>
    </nav>;
}