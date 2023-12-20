import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <main className='min-h-screen'>
        {/* Hero section */}
        <div className="hero min-h-96 bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-full">
              <h1 className="text-5xl font-bold">Exciting Football Matches</h1>
              <p className="py-6">Experience the thrill of every game!.</p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
        <section>
          <Link href="/">
            <div className='card px-4 py-2 hover:bg-[#eef8fc] rounded-none'>
              <div className="container max-w-[1000px] mx-auto">
                <div className='flex items-center gap-4'>
                  <div className='icon'>
                    <Image src="/ball-football-icon.svg" alt="" width={30} height={30} />
                  </div>
                  <div className='flex flex-col text-[12px]'>
                    <span className='text-black'>05:00 AM</span>
                    <span className='text-black'>03 Dec 2023</span>
                  </div>
                  <div>
                    <h1 className='text-[13px] text-black font-bold'>Tigre Res. vs Independiente Res. </h1>
                    <h2 className='text-[12px] text-gray-600'>Tigre Res. vs Independiente Res. </h2>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </section>
      </main>
    </>
  )
}
