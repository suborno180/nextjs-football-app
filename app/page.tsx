import Image from 'next/image';
import Link from 'next/link';
import Card from '@/components/cards/Card';
import { FaHome } from "react-icons/fa";
import Navbar from '@/components/navbar/Navbar';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Exciting Football Matches',
    description: 'Generated by create next app',
    keywords: ['football'],
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
                            {/* <h1 className="text-2xl lg:text-5xl font-bold">Exciting Football Matches</h1>
              <p className="py-6">Experience the thrill of every game!.</p> */}
                            <div className='w-full min-h-36 lg:h-full'>
                                {/* <iframe src="https://www.livesportsontv.com/match/charlotte-hornets-chicago-bulls-1357206" id="google_ads_iframe_/14604472,22190794056/livesportsontv_com/panorama_0" title="3rd party ad content" name="" width="970" height="250" data-is-safeframe="true" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" role="region" aria-label="Advertisement" data-google-container-id="1" data-load-complete="true"></iframe> */}
                                <div className='w-full h-full bg-green-400'>
                                    Google ads
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section>
                    <div className="container mx-auto">
                        <div className='grid lg:grid-cols-7 w-full'>
                            <div className='w-full min-w-[260px] min-h-36 lg:min-h-screen lg:col-span-2 bg-gray-200 lg:order-1'>
                                <div className='w-full h-full grid place-content-start lg:place-content-center'>
                                    <h1 className='bg-green-500'>Google ads</h1>
                                </div>
                            </div>
                            <div className='w-full min-h-screen lg:col-span-5'>
                                <Card />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
