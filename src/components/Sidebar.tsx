import dp from "../assets/face.jpg";
import {Github, Linkedin, Mail, MapPin, Phone} from "lucide-react";

type SidebarProps = {
    sidebarOpen: boolean;
}

export const Sidebar = ({sidebarOpen}: SidebarProps) =>  {
    return <aside
        className={`fixed md:relative top-0 left-0 w-full md:w-80 h-full md:h-auto bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out z-40 md:flex-shrink-0 md:mr-8`}
    >
        {/* Profile Section */}
        <div className="text-center mb-8">
            <img
                src={dp}
                alt="Profile Picture"
                className="w-32 h-32 rounded-full mx-auto mb-4 shadow-md"
            />
            <h1 className="text-2xl font-bold mb-2">Adhyan</h1>
            <p className="text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 py-1 px-4 rounded-full inline-block text-sm font-medium">
                Full Stack Developer
            </p>
        </div>

        {/* Contact Info */}
        <div className="border-t border-b border-gray-200 dark:border-gray-700 py-6 mb-8">
            <ul className="space-y-3">
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <Mail size={20} className="text-blue-500 mr-3"/>
                    <span>adhyan@thetrickuser.in</span>
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <Phone size={20} className="text-blue-500 mr-3"/>
                    <span>+91 99346 24534</span>
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <MapPin size={20} className="text-blue-500 mr-3"/>
                    <span>Kolkata, West Bengal, India</span>
                </li>
            </ul>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
            <a
                href="https://linkedin.com/in/adhyan1011"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200"
                aria-label="LinkedIn Profile"
            >
                <Linkedin size={28}/>
            </a>
            <a
                href="https://github.com/thetrickuser"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200"
                aria-label="GitHub Profile"
            >
                <Github size={28}/>
            </a>
        </div>
    </aside>;
}