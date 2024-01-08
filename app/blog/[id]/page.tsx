import Navbar from '@/components/navbar/Navbar';
import Image from 'next/image';
import React from 'react'

const BlogDetail = ({ params }: { params: { id: string } }) => {
    const blog = {
        title: 'The Excitement of Football Matches',
        date: 'July 15, 2022',
        content: `
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        `,
        imageUrl: '/photo-1616514169928-a1e40c6f791c.avif', // Replace with your actual image URL
    };

    return (
        <>
            <div className='w-full min-h-screen'>
                <Navbar />
                <div className="container mx-auto max-w-[800px] mt-8">
                    <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
                    <p className="text-gray-500 mb-4">{blog.date}</p>
                    <div className="mb-6">
                        {/* Use the 'prose' class for a more readable text layout */}
                        <Image src={blog.imageUrl} alt={blog.title} width={800} height={500} className="rounded-md" />
                    </div>
                    <div className="prose lg:prose-xl">
                        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogDetail;