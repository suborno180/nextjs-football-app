import Image from 'next/image';
import Link from 'next/link';
import Card from '@/components/cards/Card';
import { FaHome } from "react-icons/fa";
import Navbar from '@/components/navbar/Navbar';
import { Metadata } from 'next';
import { CategoryPage } from '@/components/Catagorys';

export const metadata: Metadata = {
  title: 'Exciting Football Matches',
  description: 'Generated by create next app',
  keywords: ['football'],
  icons: {
    icon: '/ball-football-icon.svg'
  }
}

export default function Home() {
  return (
    <>
      <main className='min-h-screen'>
        {/* Hero section */}
        <Navbar />
        <div className="hero min-h-96 bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-full">
              <div className="w-full min-h-36 lg:h-full ">
                {/* Replace the following line with your actual Hero ad code */}
                {`Google Ads (Hero Placeholder)`}
              </div>
            </div>
          </div>
        </div>
        <section>
          <div className="container mx-auto max-w-[1000px]">
            <div className='grid lg:grid-cols-7 w-full'>
              {/* Sidebar Section */}
              <div className='w-full min-w-[260px] min-h-36 lg:min-h-screen lg:col-span-2 bg-gray-100 lg:order-1'>
                Google Ads Section (Sidebar)
                <div className='w-full h-full '>
                  {/* Replace the following line with your actual Sidebar ad code */}
                  {`Google Ads (Sidebar Placeholder)`}
                </div>
              </div>
              {/* Main Content Section */}
              <div className='w-full min-h-screen lg:col-span-5'>
                <div className='w-full min-h-10 my-8 px-4'>
                  <CategoryPage />
                </div>
                <div className='px-4'>
                  <h1 className="text-4xl font-bold mb-4 capitalize">match schedule</h1>
                  <Card />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Google Ads Section (Footer) */}
        <div className="w-full min-h-36 lg:h-full ">
          <div className='container mx-auto max-w-[1000px]'>
            {/* Replace the following line with your actual Footer ad code */}
            {`Google Ads (Footer Placeholder)`}
          </div>
        </div>
      </main>
    </>
  );
}