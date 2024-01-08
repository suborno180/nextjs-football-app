import Link from 'next/link'
import React from 'react'
import { FaHome } from 'react-icons/fa'
import { MobileNavbar } from './mobileNavbar'

const Navbar = () => {
    return (
        <>
            <div className='navbar px-6 lg:px-0 bg-white relative z-50'>
                <div className="container mx-auto max-w-[1000px]">
                    <div className='w-full flex items-start justify-between lg:justify-start'>
                        <div className='min-h-[50px] grid place-content-center'><Link href={'/'} className='text-black flex items-center gap-2 mr-4'><FaHome size="30" />Home</Link></div>
                        <ul className='lg:flex items-center gap-4 hidden min-h-[50px]'>
                            <li><Link href={'/match'} className='text-black flex items-center gap-2'>Match</Link></li>
                            <li><Link href={'/about'} className='text-black flex items-center gap-2'>About</Link></li>
                            <li><Link href={'/blog'} className='text-black flex items-center gap-2'>Blogs</Link></li>
                            <li><Link href={'/termsofservice'} className='text-black flex items-center gap-2'>Terms of Service</Link></li>
                            <li><Link href={'/faq'} className='text-black flex items-center gap-2'>FAQ</Link></li>
                            <li><Link href={'/contactus'} className='text-black flex items-center gap-2'>Contact us</Link></li>
                            <li><Link href={'/privacypolicy'} className='text-black flex items-center gap-2'>Privacy Policy</Link></li>
                        </ul>
                        <div className='lg:hidden'>
                            <MobileNavbar />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar