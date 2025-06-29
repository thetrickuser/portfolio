import {useState} from "react";
import dp from "../assets/face.jpg";
import {GrMail} from "react-icons/gr";
import {FaGithub, FaLinkedin, FaLocationDot, FaPhone} from "react-icons/fa6";

export const Sidebar = () => {
    const [showContact, setShowContact] = useState(false);

    return (
        <aside
            className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full xl:w-80 p-6 xl:relative z-40 transition-all duration-300 flex flex-col
             ${showContact ? "max-h-screen" : ""}`}>
            {/* Top bar: Profile Section */}
            <div className={`flex flex-col items-center ${showContact ? "" : "mb-0"} xl:mb-8`}>
                <img
                    src={dp}
                    alt="Profile Picture"
                    className="w-20 h-20 xl:w-32 xl:h-32 rounded-full mb-2 xl:mb-4 shadow-xl"
                />
                <h1 className="text-lg xl:text-2xl font-bold mb-1 xl:mb-2">Adhyan</h1>
                <p className="text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 py-1 px-4 rounded-full inline-block text-xs xl:text-sm font-medium">
                    Full Stack Developer
                </p>
            </div>

            {/* Contact Info: hidden on small screens unless toggled */}
            <div className={`border-t border-b border-gray-200 dark:border-gray-700 py-6 mt-8 xl:mt-0 mb-8 ${showContact ? "block" : "hidden"} xl:block`}
            >
                <ul className="space-y-3">
                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                        <GrMail size={20} className="text-blue-500 mr-3"/>
                        <span>adhyan@thetrickuser.in</span>
                    </li>
                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                        <FaPhone size={20} className="text-blue-500 mr-3"/>
                        <span>+91 99346 24534</span>
                    </li>
                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                        <FaLocationDot size={20} className="text-blue-500 mr-3"/>
                        <span>Kolkata, West Bengal, India</span>
                    </li>
                </ul>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mt-4 xl:mt-0">
                <a
                    href="https://linkedin.com/in/adhyan1011"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200"
                    aria-label="LinkedIn Profile"
                >
                    <FaLinkedin size={28}/>
                </a>
                <a
                    href="https://github.com/thetrickuser"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200"
                    aria-label="GitHub Profile"
                >
                    <FaGithub size={28}/>
                </a>
            </div>

            {/* Show Contact Button: only on small screens */}
            <div className={'flex justify-center'}>
            <button
                className={`xl:hidden inline-block w-[50%] mt-4 mb-2 px-4 py-2 bg-blue-600 text-white rounded-full shadow transition-colors duration-200
                          ${showContact ? "bg-blue-800" : ""}`}
                onClick={() => setShowContact((v) => !v)}>
                {showContact ? "Hide Contact Info" : "Show Contact Info"}
            </button>
            </div>
        </aside>
    );
};