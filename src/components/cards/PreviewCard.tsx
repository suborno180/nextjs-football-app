import { PrismaClient } from '@prisma/client';
import Image from 'next/image';
import React from 'react'

const PreviewCard = async ({ data }: any) => {

    const Timeoptions: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: '2-digit', hour12: true };
    const Dateoptions: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' as const };
    const match = data[0];

    return (
        <>
            <div>
                <div className='w-full min-h-24 py-8'>
                    <div className='grid place-content-center gap-2'>
                        {
                            match.response_league_logo ?
                                (
                                    <Image src={match.response_league_logo} className='mx-auto' alt={match.response_league_logo} width={80} height={80} loading='lazy' />
                                ) :
                                (
                                    <div className="skeleton w-32 h-32"></div>
                                )
                        }
                        <div className='text-center w-full'>
                            <h2 className='text-blue-500  font-bold text-2xl'>{match.league_round ?? 'N/A'}</h2>
                            <p className=''> {match.league_country ?? 'N/A'}</p>
                        </div>
                    </div>
                </div>
                <div className='w-full min-h-28 flex items-center justify-between py-4'>
                    <div className='w-full h-full'>
                        <div className='grid place-content-center gap-2'>
                            {
                                match.teams_home_logo ?
                                    (
                                        <Image src={match.teams_home_logo} className='mx-auto' alt={match.response_league_logo} width={80} height={80} loading='lazy' />
                                    ) :
                                    (
                                        <div className="skeleton w-32 h-32"></div>
                                    )
                            }
                            <h2 className='text-black text-center text-[1.2rem]'>{match.teams_home_name ?? 'N/A'}</h2>
                        </div>
                    </div>
                    <div className='min-w-28 h-28 0 grid place-content-center '><h1 className='text-4xl text-black'>VS</h1></div>
                    <div className='w-full h-full'>
                        <div className='grid place-content-center gap-2 py-4'>
                            {
                                match.teams_away_logo ?
                                    (
                                        <Image src={match.teams_away_logo} className='mx-auto' alt={match.teams_away_logo} width={80} height={80} loading='lazy' />
                                    ) :
                                    (
                                        <div className="skeleton w-32 h-32"></div>
                                    )
                            }
                            <h2 className='text-black text-center text-[1.2rem]'>{match.teams_away_name ?? 'N/A'}</h2>
                        </div>
                    </div>
                </div>
                <div className='w-full grid place-content-center'>
                    <div className='min-w-11 flex flex-col items-center'>
                        <h3 className='text-red-600 font-bold text-2xl animate-bounce'>Time ({match.fixture_timezone})</h3>
                        <span className='text-black'>{new Date(match.fixture_date).toLocaleTimeString('en-US', Timeoptions)}</span>
                        <span className='text-black'>{new Date(match.fixture_date).toLocaleDateString('en-US', Dateoptions)}</span>
                        <a href="http://" target="_blank" rel="noopener noreferrer" className='font-bold mt-4'>Watch Now</a>
                        <a href="http://" target="_blank" rel="noopener noreferrer" className='font-bold mt-4 btn btn-success btn-sm min-w-max text-white' title='chanel name - 1'>TV-1</a>
                        <a href="http://" target="_blank" rel="noopener noreferrer" className='font-bold mt-4 btn btn-success btn-sm min-w-max text-white' title='chanel name - 2'>TV-2</a>
                    </div>
                </div>
                <div className='w-full grid grid-cols-2 px-4 lg:px-0 py-4'>
                    <div className='flex flex-col items-start gap-2'>
                        {/* <Image src={"match.league_flag"} alt={"match.league_flag"} width={30} height={30} loading='lazy' /> */}
                        <span>{match.league_country ?? 'N/A'}</span>
                    </div>
                    <div className='flex flex-col items-end gap-2'>
                        <span><span className='text-black'>Venue:</span> {match.fixture_venue_city ?? 'N/A'}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PreviewCard