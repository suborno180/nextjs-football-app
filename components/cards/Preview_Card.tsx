import { convertToSlug } from '@/helper/functions';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface MatchDataItem {
    [x: string]: any;
    // Add other properties as needed
}

const Preview_Card: React.FC = async ({ id }: any) => {
    const res = await fetch('https://script.google.com/macros/s/AKfycbzfIt7RlOUeOOVhB8LfP5aQjR1EcyVk1Ojnc4Uo06jwecu5VP0Rwc8pGHRnobidY8EV/exec');
    const result = await res.json();

    // Time formatting
    const data: MatchDataItem[] = result.data.output;

    const Timeoptions: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: '2-digit', hour12: true };
    const Dateoptions: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' as const };

    return (
        <>
            <div>
                {data?.slice(1).map((e, index) => (
                    <React.Fragment key={index}>
                        <div className='border-y-[1px] border-y-gray-200'>
                            <Link href={`/${convertToSlug(e.teams_home_name)}`}>
                                <div className='card px-4 py-2 hover:bg-[#eef8fc] rounded-none'>
                                    <div className="container max-w-[1000px] mx-auto">
                                        <div className='flex items-center gap-4'>
                                            <div className='icon'>
                                                <Image src="/ball-football-icon.svg" alt="" width={30} height={30} loading='lazy' />
                                            </div>
                                            <div className='flex flex-col text-[12px]'>
                                                <span className='text-black'>{new Date(e.fixture_date).toLocaleTimeString('en-US', Timeoptions)}</span>
                                                <span className='text-black'>{new Date(e.fixture_date).toLocaleDateString('en-US', Dateoptions)}</span>
                                            </div>
                                            <div>
                                                <h1 className='text-[13px] text-black font-bold'>{e.teams_home_name} vs Independiente Res. </h1>
                                                <h2 className='text-[12px] text-gray-600'>Tigre Res. vs Independiente Res. </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </>
    );
};

export default Preview_Card;
