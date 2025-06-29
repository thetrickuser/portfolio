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
            className={`flex items-center px-2 py-1 text-xs rounded-full font-medium transition-all duration-200
            md:text-sm xl:text-lg
        ${
                activeSection === section
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-300 dark:text-gray-300 dark:hover:bg-gray-600"
            }`}
        >
            <div className={'flex flex-col md:flex-row items-center justify-center gap-0.5'}>
                {icon}
                {title}
            </div>
        </button>
    </li>;
}