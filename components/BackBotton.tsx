'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaAngleLeft } from "react-icons/fa";

export const BackBotton = () => {
    const router = useRouter();
    return (
        <>
            <button onClick={()=> router.back()} className="btn btn-ghost"><FaAngleLeft/> Back</button>
        </>
    )
}