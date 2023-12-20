import React from 'react'

const Loading = () => {
    return (
        <div className='fixed top-0 left-0 w-screen h-screen'>
            <div className='w-full h-screen grid place-content-center'>
                <span className="loading loading-ring loading-lg"></span>
            </div>
        </div>
    )
}

export default Loading