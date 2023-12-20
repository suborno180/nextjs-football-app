import Image from 'next/image';
import Link from 'next/link';
import Card from '@/components/cards/Card';

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
          <Card />
        </section>
      </main>
    </>
  );
}
