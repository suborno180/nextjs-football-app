import React from 'react';
import Image from 'next/image';

interface BlogCardProps {
  title: string;
  date: string;
  image: string;
  alt: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({ title, date, image, alt }) => {
  return (
    <div className="card p-4 hover:bg-gray-100 transition-all rounded-md">
      <div className="image-container relative h-48 overflow-hidden rounded-md mb-4">
        <Image src={image || '/image-placeholder.png'} alt={alt} layout="fill" objectFit="cover" loading='lazy' />
      </div>
      <h2 className="text-xl font-bold text-black">{title}</h2>
      <p className="text-gray-500">{date}</p>
    </div>
  );
};
