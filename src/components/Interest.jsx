import { Chip } from '@material-tailwind/react'
import React from 'react'

function Interest() {
  return (
    <section id='interest' className="bg-white shadow-md rounded-lg font-mono overflow-hidden w-full p-4">
        <h1 className="font-bold text-[20px]">Sở Thích</h1>
        <div className='flex gap-4 mt-4 flex-wrap'>
        <Chip variant="outlined" value="💥 Đọc Sách" />
        <Chip variant="outlined" value="📸 Nhiếp Ảnh Gia Thiên Nhiên" />
        <Chip variant="outlined" value="⚽ Bóng Đá" />
        <Chip variant="outlined" value="🎮 Trò Chơi Điện Tử" />
        </div>
    </section>
  )
}

export default Interest