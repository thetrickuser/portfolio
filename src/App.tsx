import { useState, type SetStateAction} from 'react';
import {
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Github,
    User,
    Briefcase,
    MessageSquare,
    Rss,
    X,
    Menu,
    Settings,
    Monitor,
    Megaphone
} from 'lucide-react';

const App = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('about'); // State to manage active section for navigation

    // Function to toggle sidebar visibility on mobile
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Close sidebar when a navigation item is clicked
    const handleNavClick = (sectionId: SetStateAction<string>) => {
        setActiveSection(sectionId);
        setIsSidebarOpen(false); // Close sidebar after clicking
    };

    return (
        // Main container with Inter font and a subtle background
        <div className="font-sans min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
            {/* Mobile Menu Button */}
            <div className="md:hidden fixed top-4 right-4 z-50">
                <button
                    onClick={toggleSidebar}
                    className="p-2 bg-blue-600 text-white rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Toggle Navigation"
                >
                    {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Main Layout Container */}
            <div className="flex flex-col md:flex-row min-h-screen p-4 md:p-8 max-w-7xl mx-auto">

                {/* Sidebar */}
                <aside
                    className={`fixed md:relative top-0 left-0 w-full md:w-80 h-full md:h-auto bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl transform ${
                        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } md:translate-x-0 transition-transform duration-300 ease-in-out z-40 md:flex-shrink-0 md:mr-8`}
                >
                    {/* Profile Section */}
                    <div className="text-center mb-8">
                        <img
                            src="https://placehold.co/120x120/A0B2C4/FFFFFF?text=JP"
                            alt="Profile Picture"
                            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-500 shadow-md"
                        />
                        <h1 className="text-2xl font-bold mb-2">John P. Doe</h1>
                        <p className="text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 py-1 px-4 rounded-full inline-block text-sm font-medium">
                            Web Developer
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="border-t border-b border-gray-200 dark:border-gray-700 py-6 mb-8">
                        <ul className="space-y-3">
                            <li className="flex items-center text-gray-700 dark:text-gray-300">
                                <Mail size={20} className="text-blue-500 mr-3" />
                                <span>john.doe@example.com</span>
                            </li>
                            <li className="flex items-center text-gray-700 dark:text-gray-300">
                                <Phone size={20} className="text-blue-500 mr-3" />
                                <span>+123 456 7890</span>
                            </li>
                            <li className="flex items-center text-gray-700 dark:text-gray-300">
                                <MapPin size={20} className="text-blue-500 mr-3" />
                                <span>New York, USA</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-6">
                        <a
                            href="https://linkedin.com/in/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200"
                            aria-label="LinkedIn Profile"
                        >
                            <Linkedin size={28} />
                        </a>
                        <a
                            href="https://github.com/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200"
                            aria-label="GitHub Profile"
                        >
                            <Github size={28} />
                        </a>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-xl relative mt-[60px] md:mt-0">
                    {/* Navigation Tabs (visible on larger screens and when sidebar is closed on mobile) */}
                    <nav className="hidden md:block absolute top-6 right-6">
                        <ul className="flex bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow-inner">
                            <li className="mr-2">
                                <button
                                    onClick={() => handleNavClick('about')}
                                    className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                        activeSection === 'about'
                                            ? 'bg-blue-600 text-white shadow-md'
                                            : 'text-gray-600 hover:bg-gray-300 dark:text-gray-300 dark:hover:bg-gray-600'
                                    }`}
                                >
                                    <User size={16} className="mr-1" /> About
                                </button>
                            </li>
                            <li className="mr-2">
                                <button
                                    onClick={() => handleNavClick('what-i-do')}
                                    className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                        activeSection === 'what-i-do'
                                            ? 'bg-blue-600 text-white shadow-md'
                                            : 'text-gray-600 hover:bg-gray-300 dark:text-gray-300 dark:hover:bg-gray-600'
                                    }`}
                                >
                                    <Briefcase size={16} className="mr-1" /> Resume
                                </button>
                            </li>
                            <li className="mr-2">
                                <button
                                    onClick={() => handleNavClick('portfolio')}
                                    className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                        activeSection === 'portfolio'
                                            ? 'bg-blue-600 text-white shadow-md'
                                            : 'text-gray-600 hover:bg-gray-300 dark:text-gray-300 dark:hover:bg-gray-600'
                                    }`}
                                >
                                    <Settings size={16} className="mr-1" /> Portfolio
                                </button>
                            </li>
                            <li className="mr-2">
                                <button
                                    onClick={() => handleNavClick('blog')}
                                    className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                        activeSection === 'blog'
                                            ? 'bg-blue-600 text-white shadow-md'
                                            : 'text-gray-600 hover:bg-gray-300 dark:text-gray-300 dark:hover:bg-gray-600'
                                    }`}
                                >
                                    <Rss size={16} className="mr-1" /> Blog
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleNavClick('contact')}
                                    className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                        activeSection === 'contact'
                                            ? 'bg-blue-600 text-white shadow-md'
                                            : 'text-gray-600 hover:bg-gray-300 dark:text-gray-300 dark:hover:bg-gray-600'
                                    }`}
                                >
                                    <MessageSquare size={16} className="mr-1" /> Contact
                                </button>
                            </li>
                        </ul>
                    </nav>


                    {/* Content Sections */}
                    <section id="about" className={`${activeSection === 'about' ? 'block' : 'hidden'} py-8`}>
                        <h2 className="text-3xl font-bold mb-6 border-b-4 border-blue-500 pb-2 inline-block">About Me</h2>
                        <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                            Hello! I'm John P. Doe, a passionate and creative web developer with 5+ years of experience in building beautiful and functional web applications. I specialize in front-end development using modern technologies like React, JavaScript, and Tailwind CSS, focusing on delivering intuitive user experiences and robust solutions.
                        </p>
                        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                            My journey into web development began with a fascination for how interactive digital experiences are crafted. Since then, I've dedicated myself to mastering the tools and techniques that bring ideas to life on the web. I'm always eager to learn new technologies and contribute to challenging projects.
                        </p>

                        <h3 className="text-2xl font-bold mt-10 mb-6 border-b-2 border-blue-400 pb-2 inline-block">What I Do</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Service Item 1 */}
                            <div className="flex items-start bg-blue-50 dark:bg-gray-700 p-5 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
                                <Monitor size={48} className="text-blue-600 mr-4 flex-shrink-0" />
                                <div>
                                    <h4 className="text-xl font-semibold mb-2">Web Development</h4>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Crafting responsive, high-performance websites and web applications using modern frameworks.
                                    </p>
                                </div>
                            </div>
                            {/* Service Item 2 */}
                            <div className="flex items-start bg-blue-50 dark:bg-gray-700 p-5 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
                                <Settings size={48} className="text-blue-600 mr-4 flex-shrink-0" />
                                <div>
                                    <h4 className="text-xl font-semibold mb-2">UI/UX Design</h4>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Designing intuitive and engaging user interfaces that provide seamless user experiences.
                                    </p>
                                </div>
                            </div>
                            {/* Service Item 3 */}
                            <div className="flex items-start bg-blue-50 dark:bg-gray-700 p-5 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
                                <Megaphone size={48} className="text-blue-600 mr-4 flex-shrink-0" />
                                <div>
                                    <h4 className="text-xl font-semibold mb-2">Digital Marketing</h4>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Strategies to enhance online visibility and drive organic traffic to your digital presence.
                                    </p>
                                </div>
                            </div>
                            {/* Service Item 4 */}
                            <div className="flex items-start bg-blue-50 dark:bg-gray-700 p-5 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
                                <Briefcase size={48} className="text-blue-600 mr-4 flex-shrink-0" />
                                <div>
                                    <h4 className="text-xl font-semibold mb-2">Product Management</h4>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Overseeing the lifecycle of a product from conception to launch and beyond.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="what-i-do" className={`${activeSection === 'what-i-do' ? 'block' : 'hidden'} py-8`}>
                        <h2 className="text-3xl font-bold mb-6 border-b-4 border-blue-500 pb-2 inline-block">My Resume</h2>
                        <div className="space-y-8">
                            {/* Experience Section */}
                            <h3 className="text-2xl font-bold mb-4 border-b-2 border-blue-400 pb-2 inline-block">Experience</h3>
                            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md">
                                <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400">Senior Web Developer</h4>
                                <p className="text-gray-700 dark:text-gray-300 mb-2">Tech Solutions Inc. / 2022 - Present</p>
                                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                                    <li>Led the development of scalable web applications using React and Node.js.</li>
                                    <li>Implemented responsive design principles, ensuring cross-browser compatibility.</li>
                                    <li>Collaborated with design and product teams to deliver user-centric features.</li>
                                </ul>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md">
                                <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400">Junior Front-End Developer</h4>
                                <p className="text-gray-700 dark:text-gray-300 mb-2">Web Innovators / 2020 - 2022</p>
                                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                                    <li>Developed and maintained client-side features for various web projects.</li>
                                    <li>Assisted in optimizing website performance and accessibility.</li>
                                    <li>Participated in code reviews and contributed to team knowledge sharing.</li>
                                </ul>
                            </div>

                            {/* Education Section */}
                            <h3 className="text-2xl font-bold mt-10 mb-4 border-b-2 border-blue-400 pb-2 inline-block">Education</h3>
                            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md">
                                <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400">Bachelor of Science in Computer Science</h4>
                                <p className="text-gray-700 dark:text-gray-300 mb-2">University of Technology / 2016 - 2020</p>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Graduated with honors, focusing on web technologies, data structures, and algorithms.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section id="portfolio" className={`${activeSection === 'portfolio' ? 'block' : 'hidden'} py-8`}>
                        <h2 className="text-3xl font-bold mb-6 border-b-4 border-blue-500 pb-2 inline-block">My Portfolio</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Portfolio Item 1 */}
                            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
                                <img
                                    src="https://placehold.co/400x250/C0C0C0/FFFFFF?text=Project+1"
                                    alt="Project 1"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h4 className="text-xl font-semibold mb-2">E-commerce Platform</h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                                        A responsive e-commerce site with product listings, cart functionality, and secure checkout.
                                    </p>
                                </div>
                            </div>
                            {/* Portfolio Item 2 */}
                            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
                                <img
                                    src="https://placehold.co/400x250/C0C0C0/FFFFFF?text=Project+2"
                                    alt="Project 2"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h4 className="text-xl font-semibold mb-2">Task Management App</h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                                        A single-page application for managing tasks, with drag-and-drop features.
                                    </p>
                                </div>
                            </div>
                            {/* Portfolio Item 3 */}
                            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
                                <img
                                    src="https://placehold.co/400x250/C0C0C0/FFFFFF?text=Project+3"
                                    alt="Project 3"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h4 className="text-xl font-semibold mb-2">Recipe Sharing Platform</h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                                        A community-driven platform for users to share and discover recipes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="blog" className={`${activeSection === 'blog' ? 'block' : 'hidden'} py-8`}>
                        <h2 className="text-3xl font-bold mb-6 border-b-4 border-blue-500 pb-2 inline-block">My Blog</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Blog Post 1 */}
                            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
                                <img
                                    src="https://placehold.co/400x200/C0C0C0/FFFFFF?text=Blog+1"
                                    alt="Blog Post 1"
                                    className="w-full h-40 object-cover"
                                />
                                <div className="p-4">
                                    <h4 className="text-xl font-semibold mb-2">Mastering React Hooks</h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                                        A deep dive into common React Hooks and how they can simplify your component logic.
                                    </p>
                                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline mt-2 inline-block">Read More</a>
                                </div>
                            </div>
                            {/* Blog Post 2 */}
                            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
                                <img
                                    src="https://placehold.co/400x200/C0C0C0/FFFFFF?text=Blog+2"
                                    alt="Blog Post 2"
                                    className="w-full h-40 object-cover"
                                />
                                <div className="p-4">
                                    <h4 className="text-xl font-semibold mb-2">Responsive Design with Tailwind CSS</h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                                        Tips and tricks for building perfectly responsive layouts using Tailwind's utility-first approach.
                                    </p>
                                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline mt-2 inline-block">Read More</a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="contact" className={`${activeSection === 'contact' ? 'block' : 'hidden'} py-8`}>
                        <h2 className="text-3xl font-bold mb-6 border-b-4 border-blue-500 pb-2 inline-block">Contact Me</h2>
                        <p className="mb-6 text-gray-700 dark:text-gray-300">
                            Feel free to reach out if you have any questions, opportunities, or just want to connect!
                        </p>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                                    placeholder="John P. Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                                    placeholder="john.doe@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
                            >
                                Send Message
                            </button>
                        </form>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default App;
