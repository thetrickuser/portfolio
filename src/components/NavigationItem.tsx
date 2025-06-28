type NavigationItemProps = {
    onClick: (section: string) => void;
    activeSection: string;
    section: string;
    title: string;
    icon: React.ReactNode;

}

export const NavigationItem = ({onClick, activeSection, title, icon, section}: NavigationItemProps)=> {
    return <li className="mr-2">
        <button
            onClick={() => onClick(section)}
            className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeSection === section
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-300 dark:text-gray-300 dark:hover:bg-gray-600"
            }`}
        >
            {icon} {title}
        </button>
    </li>;
}