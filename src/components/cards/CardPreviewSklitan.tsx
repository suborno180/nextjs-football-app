import React from 'react'

const CardPreviewSklitan = () => {
    return (
        <>
            <div>
                <div className='w-full min-h-24 py-8'>
                    <div className='grid place-content-center gap-2'>
                        <div className="skeleton w-32 h-32"></div>
                        <div className='text-center w-full flex flex-col gap-4'>
                            <h2 className='text-blue-500  font-bold text-2xl skeleton h-5'></h2>
                            <p className='skeleton w-[70px] h-3'></p>
                        </div>
                    </div>
                </div>
                <div className='w-full min-h-28 flex items-center justify-between py-4'>
                    <div className='w-full h-full'>
                        <div className='grid place-content-center gap-2'>
                            <div className="skeleton w-32 h-32"></div>
                            <h2 className='text-black text-center text-[1.2rem] skeleton w-14 h-[1.2rem]'></h2>
                        </div>
                    </div>
                    <div className='min-w-28 h-28 0 grid place-content-center '><h1 className='text-4xl text-black'>VS</h1></div>
                    <div className='w-full h-full'>
                        <div className='grid place-content-center gap-2 py-4'>
                            <div className="skeleton w-32 h-32"></div>
                            <h2 className='text-black text-center text-[1.2rem] skeleton w-[70px] h-[1.2rem]'></h2>
                        </div>
                    </div>
                </div>
                <div className='w-full grid place-content-center'>
                    <div className='min-w-11 flex flex-col items-center gap-4'>
                        <h3 className='text-red-600 font-bold text-2xl animate-bounce skeleton w-[70px] h-5'></h3>
                        <span className='text-black skeleton w-[70px] h-3'></span>
                        <span className='text-black skeleton w-[70px] h-3'></span>
                        <a href="http://" target="_blank" rel="noopener noreferrer" className='font-bold mt-4'>Watch Now</a>
                        <a href="http://" target="_blank" rel="noopener noreferrer" className='font-bold mt-4 btn btn-success btn-sm min-w-max text-white' title='chanel name - 1'>TV-1</a>
                        <a href="http://" target="_blank" rel="noopener noreferrer" className='font-bold mt-4 btn btn-success btn-sm min-w-max text-white' title='chanel name - 2'>TV-2</a>
                    </div>
                </div>
                <div className='w-full grid grid-cols-2 px-4 lg:px-0 py-4'>
                    <div className='flex flex-col items-start gap-2'>
                        <div className='skeleton w-[30px] h-[30px]'></div>
                        <span className='skeleton w-[70px] h-4'></span>
                    </div>
                    <div className='flex flex-col items-end gap-2'>
                        <span className='skeleton w-[70px] h-3'></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardPreviewSklitan