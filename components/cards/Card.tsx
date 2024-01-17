'use client'
import { convertToSlug } from '@/helper/functions';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { IoFootball } from "react-icons/io5";

interface MatchDataItem {
    [x: string]: any;
    // Add other properties as needed
}

const Card: React.FC = async () => {
    const [page, setPage] = useState<number>(1)
    console.log(page);

    const [scrollHight, setScrollHight] = useState<number>(0)
    // console.log('scroll Hight', scrollHight);

    // const res = await fetch(`https://script.google.com/macros/s/${process.env.GOOGLE_SHEET_SECRET}/exec`, {cache: 'no-cache'});
    // const result = await res.json();

    // // Time formatting
    // const data: MatchDataItem[] = result.data.output;

    // const Timeoptions: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: '2-digit', hour12: true };
    // const Dateoptions: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' as const };

    const getScrollHight = async () => {
        try {
            const scrlHight = document.documentElement.scrollHeight
            const scrlTopHight = document.documentElement.scrollTop
            // setScrollHight(scrlHight)
            if (window.innerHeight + scrlTopHight + 10 >= scrlHight) {
                setPage((prev) => prev + 1)
            }

        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        window.addEventListener('scroll', getScrollHight)
        return () => window.removeEventListener('scroll', getScrollHight)
    }, [])

    return (
        <>
            <div >

                {/* {data?.slice(1).map((e, index) => (
                    <React.Fragment key={index}>
                        <div>
                            <Link href={`/${convertToSlug(e.teams_home_name)}-vs-${convertToSlug(e.teams_away_name)}-${e.fixture_id}`}>
                                <div className='card px-4 py-2 hover:bg-[#eef8fc] transition-all rounded-none'>
                                    <div className="container max-w-[1000px] mx-auto">
                                        <div className='flex items-center gap-4'>
                                            <div className='icon'>
                                                <IoFootball size={30} />
                                            </div>
                                            <div className='flex flex-col text-[12px]'>
                                                <span className='text-black text-nowrap'>{new Date(e.fixture_date).toLocaleTimeString('en-US', Timeoptions)}</span>
                                                <span className='text-black text-nowrap'>{new Date(e.fixture_date).toLocaleDateString('en-US', Dateoptions)}</span>
                                            </div>
                                            <div>
                                                <h1 className='text-[13px] text-black font-bold'>{e.teams_home_name} vs {e.teams_away_name} </h1>
                                                <h2 className='text-[12px] text-gray-600'>{e.league_round} - {e.league_country ?? 'N/A'}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </React.Fragment>
                ))} */}
            </div>
        </>
    );
};

export default Card;
