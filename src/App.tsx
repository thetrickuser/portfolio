import {type SetStateAction, useState} from 'react';
import {Sidebar} from "./components/Sidebar.tsx";
import {MainArea} from "./components/MainArea.tsx";

const App = () => {
    const [activeSection, setActiveSection] = useState('about');

    const handleNavClick = (sectionId: SetStateAction<string>) => {
        setActiveSection(sectionId);
    };

    return (
        <div className="font-sans min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">

            {/* Main Layout Container */}
            <div className="flex flex-col xl:flex-row min-h-screen p-4 mx-auto xl:gap-10">

                {/* Sidebar */}
                <Sidebar />

                {/* Main Content Area */}
                <MainArea onClick={handleNavClick} activeSection={activeSection}/>
            </div>
        </div>
    );
};

export default App;
