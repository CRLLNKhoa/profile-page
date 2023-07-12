import { Inter } from 'next/font/google'
import Info from '@/components/Info'
import Skill from '@/components/Skill'
import Interest from '@/components/Interest'
import Images from '@/components/Images'
import Event from '@/components/Event'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex flex-col gap-8 pb-12'>
      <Info />
      <Skill />
      <Interest />
      <Images />
      <Event />
    </main>
  )
}
