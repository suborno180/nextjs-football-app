import Link from 'next/link';

const categories = [
    'Football',
    'Basketball',
    'Baseball',
    'Boxing',
    'Hockey',
    'Moto',
    'Rugby',
    'NFL',
    'Tennis',
    'Volleyball',
];

export const CategoryPage = () => {
    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-4xl font-bold mb-4">Categories</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {categories.map((category, index) => (
                    <Link href={`/categories/${category.toLowerCase()}`} key={index}>
                        <div className="bg-white p-4 rounded-md shadow-md duration-300 transform hover:scale-105 hover:bg-orange-500 hover:text-white transition-all">
                            <h2 className="text-lg font-semibold">{category}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

