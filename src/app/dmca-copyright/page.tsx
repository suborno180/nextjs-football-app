import Image from 'next/image';
import Link from 'next/link';
import { FaHome } from "react-icons/fa";
import Navbar from '@/components/navbar/Navbar';
import { Metadata } from 'next';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
    title: 'DMCA Copyright - Exciting Football Matches',
    description: 'Learn about DMCA Copyright and our compliance. Report any copyright infringements following the Digital Millennium Copyright Act procedures.',
    keywords: ['DMCA Copyright', 'Digital Millennium Copyright Act', 'copyright infringement'],
    icons: {
        icon: '/ball-football-icon.svg'
    }
}

const DMCACopyright = () => {
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
                <PageHero
                    title="DMCA Copyright"
                    description="Learn about DMCA Copyright and our compliance. Report any copyright infringements following the Digital Millennium Copyright Act procedures."
                />
                <div className="container max-w-[1000px] mx-auto px-3 lg:px-0 my-8">

                    <p className="text-gray-700">
                        This is the DMCA Copyright page. You can add information regarding Digital Millennium Copyright Act (DMCA) compliance, copyright infringement reporting procedures, and any other relevant details.
                    </p>
                    <p className="text-gray-700 mt-4">
                        If you believe that your copyrighted work has been copied in a way that constitutes copyright infringement, please contact us at Your Contact Email with the following information:
                    </p>
                    <ul className="list-disc pl-6 mt-2 text-gray-700">
                        <li>Your contact information (name, address, email, and phone number).</li>
                        <li>A description of the copyrighted work that you claim has been infringed.</li>
                        <li>The URL of the location where the copyrighted work exists or a copy of the work.</li>
                        <li>A statement by you, made under penalty of perjury, that the information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright {`owner's`} behalf.</li>
                        <li>Your electronic signature.</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                        Please note that this page is for informational purposes, and you may need to consult with a legal professional for specific advice related to DMCA issues.
                    </p>
                </div>
                {/* Space for Google Ads */}
                <div className="container mx-auto max-w-[1000px] my-8 px-3 lg:px-0">
                    {/* Insert Google Ads code or component here */}
                    Show: GoogleAds
                </div>
            </main>
        </>
    );
}

export default DMCACopyright;
