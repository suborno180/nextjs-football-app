import Link from 'next/link'
import React from 'react'
import { FaHome } from 'react-icons/fa'

const Navbar = () => {
    return (
        <>
            <div className='navbar px-6 lg:px-0 bg-white'>
                <div className="container mx-auto max-w-[1000px]">
                    <Link href={'/'} className='text-black flex items-center gap-2'><FaHome size="30" />Home</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar