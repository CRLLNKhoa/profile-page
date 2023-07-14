import { Inter } from 'next/font/google'
import Info from '@/components/Info'
import Skill from '@/components/Skill'
import Interest from '@/components/Interest'
import Images from '@/components/Images'
import Event from '@/components/Event'
import Book from '@/components/Book'
import Music from '@/components/Music'
import SocialMoble from '@/components/SocialMoble'
import Project from '@/components/Project'
import MyHead from '@/components/MyHead'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
   <>
       <MyHead
        title="Lương Khoa"
        description="Website cá nhân của Lương Khoa"
        image="/aaa.jpg"
        url="https://luongkhoa.vercel.app/"
      />
      <main className='flex flex-col gap-8 pb-12'>
        <Info />
        <SocialMoble />
        <Skill />
        <Interest />
        <Images />
        <Event />
        <Book />
        <Music />
        <Project />
        <Footer />
      </main>
   </>
  )
}
