import {Navbar} from "./Navbar.tsx";
import {ServiceItem} from "./ServiceItem.tsx";
import {PortfolioItem} from "./PortfolioItem.tsx";
import dp from "../assets/face.jpg";
import {BlogItem} from "./BlogItem.tsx";

type MainAreaProps = {
    onClick: (sectionId: React.SetStateAction<string>) => void;
    activeSection: string;
}

export const MainArea = ({ onClick, activeSection }: MainAreaProps) => {
    return <main
        className="flex-1 bg-white dark:bg-gray-800 p-6 xl:p-8 rounded-2xl shadow-xl relative mt-[60px] xl:mt-0">
        {/* Navigation Tabs (visible on larger screens and when sidebar is closed on mobile) */}
        <Navbar
            onClick={onClick}
            activeSection={activeSection}
            style={"hidden xl:block absolute top-0 right-0"}
        />

        {/* Content Sections */}
        <section id="about" className={`${activeSection === "about" ? "block" : "hidden"} py-8`}>
            <h2 className="text-3xl font-bold mb-6 border-b-4 border-blue-500 pb-2 inline-block">About
                Me</h2>
            <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                Hello! I'm Adhyan, a passionate and creative full stack developer with 4+ years of
                experience in building beautiful and functional web applications. I specialize in back-end
                development using modern technologies like Spring Boot, React, Java and AWS, focusing on
                delivering intuitive user experiences and robust solutions.
            </p>
            <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                My journey into web development began with a fascination for how interactive digital
                experiences are crafted. Since then, I've dedicated myself to mastering the tools and
                techniques that bring ideas to life on the web. I'm always eager to learn new technologies
                and contribute to challenging projects.
            </p>

            <h3 className="text-2xl font-bold mt-10 mb-6 border-b-2 border-blue-400 pb-2 inline-block">What
                I Do</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ServiceItem title={"Web Development"}
                             description={"Crafting responsive, high-performance websites and web applications using modern frameworks."}/>
                <ServiceItem title={"Product Management"}
                             description={"Overseeing the lifecycle of a product from conception to launch and beyond."}/>
            </div>
        </section>

        <section id="what-i-do" className={`${activeSection === "what-i-do" ? "block" : "hidden"} py-8`}>
            <h2 className="text-3xl font-bold mb-6 border-b-4 border-blue-500 pb-2 inline-block">My
                Resume</h2>
            <div className="space-y-8">
                {/* Experience Section */}
                <h3 className="text-2xl font-bold mb-4 border-b-2 border-blue-400 pb-2 inline-block">Experience</h3>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400">Senior
                        Developer</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">Cognizant / 2021 - Present</p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                        <li>Led the development of scalable web applications using React and Node.js.</li>
                        <li>Implemented responsive design principles, ensuring cross-browser
                            compatibility.
                        </li>
                        <li>Collaborated with design and product teams to deliver user-centric features.
                        </li>
                    </ul>
                </div>

                {/* Education Section */}
                <h3 className="text-2xl font-bold mt-10 mb-4 border-b-2 border-blue-400 pb-2 inline-block">Education</h3>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400">Bachelor of
                        Technology (B. Tech) in Computer Science</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">IIIT Kottayam / 2017 - 2021</p>
                </div>
            </div>
        </section>

        <section id="portfolio" className={`${activeSection === "portfolio" ? "block" : "hidden"} py-8`}>
            <h2 className="text-3xl font-bold mb-6 border-b-4 border-blue-500 pb-2 inline-block">My
                Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <PortfolioItem image={dp} title={"Movies-Magic"} description={"Hello"}/>
            </div>
        </section>

        <section id="blog" className={`${activeSection === "blog" ? "block" : "hidden"} py-8`}>
            <h2 className="text-3xl font-bold mb-6 border-b-4 border-blue-500 pb-2 inline-block">My
                Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Blog Post 1 */}
                <BlogItem title={"Blog 1"} image={dp} description={"New Blog"} blogURL={"#"}/>
            </div>
        </section>

        <section id="contact" className={`${activeSection === "contact" ? "block" : "hidden"} py-8`}>
            <h2 className="text-3xl font-bold mb-6 border-b-4 border-blue-500 pb-2 inline-block">Contact
                Me</h2>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
                Feel free to reach out if you have any questions, opportunities, or just want to connect!
            </p>
            <form className="space-y-4">
                <div>
                    <label htmlFor="name"
                           className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your
                        Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                        placeholder="Adhyan"
                    />
                </div>
                <div>
                    <label htmlFor="email"
                           className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your
                        Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                        placeholder="you@example.com"
                    />
                </div>
                <div>
                    <label htmlFor="message"
                           className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
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

        <Navbar
            onClick={onClick}
            activeSection={activeSection}
            style="block xl:hidden fixed bottom-0 left-0 w-full z-100 bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
        />
    </main>;
}