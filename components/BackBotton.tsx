'use client'
import { useRouter } from 'next/navigation'
import React from 'react'


export const BackBotton = () => {
    const router = useRouter();
    return (
        <>
            <button onClick={()=> router.back()} className="btn btn-ghost">Back</button>
        </>
    )
}