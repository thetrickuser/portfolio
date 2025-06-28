import {NavigationItem} from "./NavigationItem.tsx";
import {Briefcase, MessageSquare, Rss, Settings, User} from "lucide-react";

type NavbarProps = {
    onClick: (sectionId: React.SetStateAction<string>) => void;
    activeSection: string;
}

export const Navbar = ({ onClick, activeSection }: NavbarProps ) => {
    return <nav className="hidden md:block absolute top-6 right-6">
        <ul className="flex bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow-inner">
            <NavigationItem onClick={onClick} activeSection={activeSection} title={"About"}
                            section={"about"} icon={<User size={16} className="mr-1"/>}/>
            <NavigationItem onClick={onClick} activeSection={activeSection} title={"Resume"}
                            section={"what-i-do"} icon={<Briefcase size={16} className="mr-1"/>}/>
            <NavigationItem onClick={onClick} activeSection={activeSection} title={"Portfolio"}
                            section={"portfolio"} icon={<Settings size={16} className="mr-1"/>}/>
            <NavigationItem onClick={onClick} activeSection={activeSection} title={"Blog"}
                            section={"blog"} icon={<Rss size={16} className="mr-1"/>}/>
            <NavigationItem onClick={onClick} activeSection={activeSection} title={"Contact"}
                            section={"contact"} icon={<MessageSquare size={16} className="mr-1"/>}/>
        </ul>
    </nav>;
}