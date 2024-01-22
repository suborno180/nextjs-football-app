import React from 'react'

const CardSklitan = () => {
    return (
        <>
            <div className="flex gap-4 w-52">
                <div className="skeleton min-h-10 min-w-10 rounded-full"></div>
                <div className='flex gap-4 items-center justify-between'>
                    <div className='flex flex-col gap-2  justify-center'>
                        <div className="skeleton h-4 w-20"></div>
                        <div className="skeleton h-4 w-28"></div>
                    </div>
                    <div className='flex flex-col gap-2 justify-center'>
                        <div className="skeleton h-4 w-32"></div>
                        <div className='flex items-center gap-4'>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardSklitan