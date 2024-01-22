import { MatchCardPropsType } from '@/Types/AllTypes';
import { convertToSlug } from '@/helper/functions';
import Link from 'next/link';
import React from 'react'
import { IoFootball } from 'react-icons/io5';

export const MatchTimeCard = ({key, teams_home_name, teams_away_name, fixture_id, fixture_date, league_round, league_country, slug }: MatchCardPropsType) => {
    const Timeoptions: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: '2-digit', hour12: true };
    const Dateoptions: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' as const };
    return (
        <>
            <Link key={key} href={`/${convertToSlug(teams_home_name)}-vs-${convertToSlug(teams_away_name)}-${slug}`}>
                <div className='card px-4 py-2 hover:bg-[#eef8fc] transition-all rounded-none'>
                    <div className="container max-w-[1000px] mx-auto">
                        <div className='flex items-center gap-4'>
                            <div className='icon'>
                                <IoFootball size={30} />
                            </div>
                            <div className='flex flex-col text-[12px]'>
                                <span className='text-black text-nowrap'>{new Date(fixture_date).toLocaleTimeString('en-US', Timeoptions)}</span>
                                <span className='text-black text-nowrap'>{new Date(fixture_date).toLocaleDateString('en-US', Dateoptions)}</span>
                            </div>
                            <div>
                                <h1 className='text-[13px] text-black font-bold'>{teams_home_name} vs {teams_away_name} </h1>
                                <h2 className='text-[12px] text-gray-600'>{league_round} - {league_country ?? 'N/A'}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}
