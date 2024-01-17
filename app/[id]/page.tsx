import { BackBotton } from '@/components/BackBotton'
import Navbar from '@/components/navbar/Navbar'
import dynamic from 'next/dynamic'
import React from 'react'

const Preview = dynamic(() => import('./preview'), {
  loading: () => <>
  
  </>
})

const page = ({ params }: { params: { id: string } }) => {
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
              <Preview id={params.id} />
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

  )
}

export default page