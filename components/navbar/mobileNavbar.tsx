import Link from 'next/link'
import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

export const MobileNavbar = () => {
    return (
        <>
            <div className="drawer drawer-end relative z-50">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">
                        <GiHamburgerMenu size={20} />
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        <li><Link href={'/match'} className='text-black flex items-center gap-2'>Match</Link></li>
                        <li><Link href={'/about'} className='text-black flex items-center gap-2'>About</Link></li>
                        <li><Link href={'/blog'} className='text-black flex items-center gap-2'>Blogs</Link></li>
                        <li><Link href={'/termsofservice'} className='text-black flex items-center gap-2'>Terms of Service</Link></li>
                        <li><Link href={'/faq'} className='text-black flex items-center gap-2'>FAQ</Link></li>
                        <li><Link href={'/contactus'} className='text-black flex items-center gap-2'>Contact us</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
