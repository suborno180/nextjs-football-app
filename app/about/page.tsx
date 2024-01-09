import Image from 'next/image';
import Link from 'next/link';
import Card from '@/components/cards/Card';
import { FaHome } from "react-icons/fa";
import Navbar from '@/components/navbar/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About - Exciting Football Matches',
    description: 'Learn more about Exciting Football Matches and our passion for bringing you the thrill of football.',
    keywords: ['About us', 'football passion', 'team'],
    icons: {
        icon: '/ball-football-icon.svg'
    }
}

const About = () => {
    return (
        <>
            <main className='min-h-screen'>
                {/* Hero section */}
                <Navbar />
                {/* Top Google Ads */}
                <div className="text-center mb-4">
                    {/* Insert Google Ads code or component here */}
                    {/* Example: <GoogleAdsComponent /> */}
                    <div className="container mx-auto">
                        <h1>Top Google Ads</h1>
                    </div>
                </div>
                <div className="hero min-h-96 bg-base-200">
                    <div className="hero-content text-center">
                        <div className="max-w-full">
                            <h1 className="text-4xl lg:text-6xl font-bold text-green-500 mb-4">
                                About Us
                            </h1>
                            <p className="text-xl text-gray-700">
                                Bringing you the thrill of football matches like never before!
                            </p>
                        </div>
                    </div>
                </div>
                <section>
                    <div className="container mx-auto max-w-[1000px] my-8 px-3 lg:px-0">
                        <div className="grid lg:grid-cols-2 gap-8">
                            <div>
                                <h2 className="text-3xl font-bold text-green-500 mb-4">
                                    Our Passion for Football
                                </h2>
                                <p className="text-gray-700">
                                    At Exciting Football Matches, we are passionate about delivering the excitement of football matches to fans worldwide. Our team is dedicated to providing up-to-date information, match schedules, and engaging content to enhance your football experience.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-green-500 mb-4">
                                    Our Team
                                </h2>
                                <p className="text-gray-700">
                                    Meet the dedicated individuals behind Exciting Football Matches. Our diverse team shares a common love for the sport and is committed to creating a platform that brings fans together. Get to know the faces behind the scenes who work tirelessly to make every match unforgettable for you.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Space for Google Ads */}
                <div className="container mx-auto max-w-[1000px] my-8 px-3 lg:px-0">
                    {/* Insert Google Ads code or component here */}
                    Show: GoogleAds
                </div>
            </main>
        </>
    );
}

export default About;