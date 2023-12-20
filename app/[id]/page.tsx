import { BackBotton } from '@/components/BackBotton'
import React from 'react'

function convertToSlug(inputString:string) {
  return inputString
    .replace(/\d+/g, '')   // Remove digits
    .replace(/\s+/g, '-')  // Replace spaces with dashes
    .toLowerCase();        // Convert to lowercase
}

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