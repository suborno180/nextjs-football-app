import { convertToSlug } from '@/helper/functions';
import { BackBotton } from '@/components/BackBotton'
import Image from 'next/image';
import React from 'react';

interface MatchDataItem {
  [x: string]: any;
  // Add other properties as needed
}

const Page = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const res = await fetch('https://script.google.com/macros/s/AKfycbzfIt7RlOUeOOVhB8LfP5aQjR1EcyVk1Ojnc4Uo06jwecu5VP0Rwc8pGHRnobidY8EV/exec');
  const result = await res.json();

  // Time formatting
  const data: MatchDataItem[] = result.data.output;

  const filteredData: MatchDataItem[] = data.filter((e: any) => {
    return convertToSlug(e.teams_home_name) === id;
  });

  if (!filteredData.length) {
    // Handle case where no data matches the provided ID
    return <p>No data found</p>;
  }

  const match = filteredData[0];

  console.log(match);


  return (
    <>
      <main className='min-h-screen bg-base-200'>
        <div className='fixed top-5 left-5 py-4'>
          <BackBotton />
        </div>
        {
          match && (
            <div className='w-full py-4 '>
              <div className='w-full grid place-content-center'>
                <div className='flex items-center flex-col gap-4'>
                  <Image src={match.respons_league_logo} alt={match.respons_league_logo} width={80} height={80} />
                  <div className='text-center'>
                    <h1>{match.teams_home_name}</h1>
                    <p>{match.league_round} - {match.league_country}</p>
                  </div>
                </div>
              </div>
              <div className='flex items-center'>

              </div>
            </div>
          )
        }

      </main>
    </>
  );
};

export default Page;
