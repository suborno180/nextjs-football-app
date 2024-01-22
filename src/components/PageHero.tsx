// components/PageHero.tsx
import React from 'react';

const PageHero: React.FC<{ title: string; description: string }> = ({ title, description }) => {
    return (
        <div className="hero min-h-96 bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-full flex flex-col items-center">
                    <h1 className="text-4xl max-w-[700px] lg:text-6xl font-bold text-green-500 mb-4">{title}</h1>
                    <p className="text-xl text-gray-700 max-w-[600px]">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default PageHero;
