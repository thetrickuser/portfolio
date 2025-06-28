import {type SetStateAction, useState} from 'react';
import {Menu, X,} from 'lucide-react';
import {Sidebar} from "./components/Sidebar.tsx";
import {MainArea} from "./components/MainArea.tsx";

const App = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('about');

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleNavClick = (sectionId: SetStateAction<string>) => {
        setActiveSection(sectionId);
    };

    return (
        <div className="font-sans min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
            {/* Mobile Menu Button */}
            <div className="md:hidden fixed top-4 right-4 z-50">
                <button
                    onClick={toggleSidebar}
                    className="p-2 bg-blue-600 text-white rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Toggle Navigation"
                >
                    {isSidebarOpen ? <X size={24}/> : <Menu size={24}/>}
                </button>
            </div>

            {/* Main Layout Container */}
            <div className="flex flex-col md:flex-row min-h-screen p-4 md:p-8 max-w-7xl mx-auto">

                {/* Sidebar */}
                <Sidebar sidebarOpen={isSidebarOpen}/>

                {/* Main Content Area */}
                <MainArea onClick={handleNavClick} activeSection={activeSection}/>
            </div>
        </div>
    );
};

export default App;
