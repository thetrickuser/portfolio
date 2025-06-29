import {FaDesktop} from "react-icons/fa6";

type ServiceItemProps = {
    title: string;
    description: string;
}

export const ServiceItem = ({title, description}: ServiceItemProps) => {
    return <div
        className="flex items-start bg-blue-50 dark:bg-gray-700 p-5 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
        <FaDesktop size={48} className="text-blue-600 mr-4 flex-shrink-0"/>
        <div>
            <h4 className="text-xl font-semibold mb-2">{title}</h4>
            <p className="text-gray-600 dark:text-gray-300">
                {description}
            </p>
        </div>
    </div>;
}