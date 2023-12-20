import { BackBotton } from '@/components/BackBotton'
import React from 'react'

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <main className='min-h-screen'>
        <div className='container mx-auto'>
          <div className='py-4'>
            <BackBotton/>
          </div>
        </div>
        {params.id}
      </main>
    </>
  )
}

export default Page