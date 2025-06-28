type PortfolioItemProps = {
    image: string;
    title: string;
    description: string;
};

export const PortfolioItem = ({image, title, description}: PortfolioItemProps) => {
    return <div
        className="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <img
            src={image}
            alt="Project 1"
            className="w-full h-48 object-cover"
        />
        <div className="p-4">
            <h4 className="text-xl font-semibold mb-2">{title}</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
                {description}
            </p>
        </div>
    </div>;
}