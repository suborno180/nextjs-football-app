import React from 'react'

const Loading = () => {
    return (
        <div className='fixed top-0 left-0 w-screen h-screen bg-gray-800'>
            <div className='w-full h-screen grid place-content-center'>
                <span className="loading loading-ring loading-lg scale-125 bg-slate-100"></span>
            </div>
        </div>
    )
}

export default Loading