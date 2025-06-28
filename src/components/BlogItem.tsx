type BlogItemProps = {
    image: string;
    title: string;
    description: string;
    blogURL: string;
}

export const BlogItem = ({image, title, description, blogURL}: BlogItemProps) => {
    return <div
        className="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <img
            src={image}
            alt="Blog Image"
            className="w-full h-40 object-cover"
        />
        <div className="p-4">
            <h4 className="text-xl font-semibold mb-2">{title}</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
                {description}
            </p>
            <a href={blogURL} className="text-blue-600 dark:text-blue-400 hover:underline mt-2 inline-block">Read More</a>
        </div>
    </div>;
}