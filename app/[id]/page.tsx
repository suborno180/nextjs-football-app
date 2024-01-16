import { convertToSlug } from '@/helper/functions';
import { BackBotton } from '@/components/BackBotton'
import Image from 'next/image';
import React from 'react';
import Navbar from '@/components/navbar/Navbar';

interface MatchDataItem {
  [x: string]: any;
  // Add other properties as needed
}

const Page = async ({ params }: { params: { id: string } }) => {

  const id = params.id;
  
  const res = await fetch(`https://script.google.com/macros/s/${process.env.GOOGLE_SHEET_SECRET}/exec`);
  const result = await res.json();
  
  // Time formatting
  const data: MatchDataItem[] = result.data.output;

  const filteredData: MatchDataItem[] = data.filter((e: any) => {
    return `${convertToSlug(e.teams_home_name)}-vs-${convertToSlug(e.teams_away_name)}-${e.fixture_id}` === id;
  });

  if (!filteredData.length) {
    // Handle case where no data matches the provided ID
    return (
      <>
        <div className='w-full min-h-screen overflow-hidden grid place-content-center'>
          <p>No data found</p>
        </div>
      </>
    );
  }

  const match = filteredData[0];


  // Time formatting
  const Timeoptions: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: '2-digit', hour12: true };
  const Dateoptions: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' as const };


  return (
    <>

      <main className='min-h-screen bg-base-200'>

        <Navbar />
        <section className='w-full min-h-[35rem] py-4 bg-white'>
          <div className='container mx-auto'>
            <BackBotton />
          </div>
          <div className="container max-w-[1000px]  mx-auto">
            <div>
              <div className='w-full min-h-24 py-8'>
                <div className='grid place-content-center gap-2'>
                  {
                    match.respons_league_logo ?
                      (
                        <Image src={match.respons_league_logo} className='mx-auto' alt={match.respons_league_logo} width={100} height={100} loading='lazy' />
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
                          <Image src={match.teams_home_logo} className='mx-auto' alt={match.respons_league_logo} width={80} height={80} loading='lazy' />
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
                  <Image src={match.league_flag} alt={match.league_flag} width={30} height={30} loading='lazy' />
                  <span>{match.league_country ?? 'N/A'}</span>
                </div>
                <div className='flex flex-col items-end gap-2'>
                  <span><span className='text-black'>Venue:</span> {match.fixture_venue_city ?? 'N/A'}</span>
                </div>
              </div>
            </div>
            <div className='w-full min-h-36 bg-gray-300 grid place-content-center'>
              <h1 className='bg-green-400'>Google ads</h1>
            </div>
            <div className='w-full min-h-36 overflow-hidden my-2 grid place-content-center'>
              <div className="">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/YuVzI9H7QtA?si=yT2-01rmvIZpGe1e"
                  title="YouTube video player"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;


export async function generateMetadata({ params }: { params: { id: string } }) {
  const id = params.id;

  const res = await fetch(`https://script.google.com/macros/s/${process.env.GOOGLE_SHEET_SECRET}/exec`);
  const result = await res.json();

  // Time formatting
  const data: MatchDataItem[] = result.data.output;

  const filteredData: MatchDataItem[] = data.filter((e: any) => {
    return `${convertToSlug(e.teams_home_name)}-vs-${convertToSlug(e.teams_away_name)}-${e.fixture_id}` === id;
  });
  if (!filteredData.length) {
    // Handle case where no data matches the provided ID
    return (
      <>
        <div className='w-full min-h-screen grid place-content-center overflow-hidden'>
          <p>No data found</p>
        </div>
      </>
    );
  }

  const match = filteredData[0];
  // metatags
  return {
    title: `${match.teams_home_name} vs ${match.teams_away_name}`,
    description: `watch every ${match.teams_home_name} vs ${match.teams_away_name} every matchas online`,
    keywords: [`${match.teams_home_name}`,` ${match.teams_away_name}`, `hightight ${match.teams_home_name}`, `highlight ${match.teams_away_name}`, `${match.teams_home_name}-A stream`, `${match.teams_away_name}-B stream`, `live online ${match.teams_home_name}`, `live online ${match.teams_away_name}`],
  }
}