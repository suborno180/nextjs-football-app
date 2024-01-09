// pages/privacy-policy.tsx
import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const PrivacyPolicy = () => {
    return (
        <>
            <main className='min-h-screen'>

                {/* Navbar */}
                <Navbar />
                {/* Hero section */}
                <PageHero
                    title="Privacy Policy"
                    description="Read our Privacy Policy to understand how we collect, use, and protect your information."
                />
                {/* Main content */}
                <div className="container max-w-[1000px] mx-auto px-3 lg:px-0 my-8">
                    <p className="text-gray-700">
                        Welcome to Exciting Football Matches! This page informs you of our policies regarding the collection, use, and disclosure of personal information when you use our website.
                    </p>
                    <p className="text-gray-700 mt-4">
                        Please read our <Link href="/terms-of-service"><span className="text-green-500">Terms of Service</span></Link> to understand the general rules governing the use of our website.
                    </p>
                    <h2 className="text-2xl font-bold text-green-500 mt-6 mb-2">
                        Information Collection and Use
                    </h2>
                    <p className="text-gray-700">
                        We collect several different types of information for various purposes to provide and improve our service to you.
                    </p>
                    {/* Add more sections based on your Privacy Policy content */}
                </div>
            </main>
        </>
    );
}

export default PrivacyPolicy;
