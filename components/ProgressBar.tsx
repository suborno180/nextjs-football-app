'use client'
import React from 'react'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export const ProgressLoding = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <>
            <ProgressBar
                height="4px"
                color="#22c55e"
                options={{ showSpinner: false }}
                shallowRouting
            />
            {children}
        </>
    )
}

export default ProgressLoding