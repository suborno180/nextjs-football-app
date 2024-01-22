import PreviewCard from '@/components/cards/PreviewCard' 
import CardPreviewSklitan from '@/components/cards/CardPreviewSklitan'
import Navbar from '@/components/navbar/Navbar'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import React from 'react'
import { PrismaClient } from '@prisma/client'

interface params {
  params: {
    id: string
  }
}

// const PreviewCard = dynamic(() => import('@/components/cards/PreviewCard'), {
//   loading: () => <>
//     <div className='flex flex-col gap-4'>
//       <CardPreviewSklitan/>
//     </div>
//   </>,
// })

const page = async ({ params }: params) => {

  const matchResult = params.id.match(/(\d+)$/);
  const lastNumbers = matchResult ? matchResult[1] : '';

  const prisma = new PrismaClient();
  const getData = await prisma.match.findMany({
    where: {
      slug: {
        equals: lastNumbers
      }
    },
    take: 1
  });
  
  
  return (
    <>
      <main className='min-h-screen bg-base-200'>
        <Navbar />
        <section className='w-full min-h-[35rem] py-4 bg-white'>
          <div className='container mx-auto'>
            {/* <BackBotton /> */}
          </div>
          <div className="container max-w-[1000px]  mx-auto">

            <PreviewCard data={getData} />


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
  )
}

export default page



export async function generateMetadata({ params }: { params: { id: string } }) {
  const matchResult = params.id.match(/(\d+)$/);
  const lastNumbers = matchResult ? matchResult[1] : '';

  const prisma = new PrismaClient();
  const getData = await prisma.match.findMany({
    where: {
      slug: {
        equals: lastNumbers
      }
    },
    take: 1
  });

  // Check if getData is undefined or empty
  if (!getData || getData.length === 0) {
    // Handle the case where no match is found
    return {
      title: 'No Match Found',
      description: 'No match found for the specified ID',
      keywords: [],
      icons: {
        icon: '/default-icon.svg'
      },
    };
  }

  const match = getData[0];

  return {
    title: `${match.teams_away_name} vs ${match.teams_away_name}`,
    description: `Watch every ${match.teams_home_name} vs ${match.teams_away_name} match online`,
    keywords: [
      `${match.teams_home_name}`,
      `${match.teams_away_name}`,
      `highlight ${match.teams_home_name}`,
      `highlight ${match.teams_away_name}`,
      `${match.teams_home_name}-A stream`,
      `${match.teams_away_name}-B stream`,
      `live online ${match.teams_home_name}`,
      `live online ${match.teams_away_name}`
    ],
    icons: {
      icon: '/ball-football-icon.svg'
    },
};
}