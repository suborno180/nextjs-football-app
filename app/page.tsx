import Image from 'next/image';
import Link from 'next/link';
import Card from '@/components/cards/Card';
import { FaHome } from "react-icons/fa";
import Navbar from '@/components/navbar/Navbar';



export default function Home() {


  return (
    <>
      <main className='min-h-screen'>
        {/* Hero section */}
        <Navbar />
        <div>
          <div className='container max-w-[1000px] mx-auto px-3 lg:px-0'>

          <Card />
        </div>
      </div>
    </main >
    </>
  );
}
