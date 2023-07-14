import React from 'react'

function Event() {
  return (
    <section id='event' className="bg-white rounded-lg font-mono overflow-hidden w-full p-4">
        <h1 className="font-bold text-[20px]">Sự kiện</h1>
        <div className='grid grid-cols-3 gap-4 mt-4 pb-2'>
            <div className='col-span-3 lg:col-span-1 flex cursor-pointer hover:bg-gray-200 duration-500 border-2 flex-col items-center py-8 gap-2 rounded-lg'>
                <div className='bg-red-600 w-8 h-8 flex justify-center items-center rounded-full'>
                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/u7xRLKQS6N1.png" alt="" />
                </div>
                <h2 className='text-center text-[14px] px-8 font-semibold'>Đang hẹn hò với Ng***n Th*nh P****g</h2>
                <p className='text-[13px]'>4 tháng 2</p>
            </div>
            <div className='col-span-3 lg:col-span-1 flex cursor-pointer hover:bg-gray-200 duration-500 border-2 flex-col items-center py-8 gap-2 rounded-lg'>
                <div className='bg-blue-600 w-8 h-8 flex justify-center items-center rounded-full'>
                    <img className='w-5 h-5' src="/bag.svg" alt="" />
                </div>
                <h2 className='text-center text-[14px] px-8 font-semibold'>Làm việc tại một nơi nào đó trên trái đất này</h2>
                <p className='text-[13px]'>2 tháng 4</p>
            </div>
            <div className='col-span-3 lg:col-span-1 flex cursor-pointer hover:bg-gray-200 duration-500 border-2 flex-col items-center py-8 gap-2 rounded-lg'>
                <div className='bg-orange-600 w-8 h-8 flex justify-center items-center rounded-full'>
                    <img className='w-5 h-5' src="/cake.svg" alt="" />
                </div>
                <h2 className='text-center text-[14px] px-8 font-semibold'>Ngày sinh nhật của Lương Nguyễn Khoa</h2>
                <p className='text-[13px]'>12 tháng 5</p>
            </div>
        </div>
    </section>
  )
}

export default Event