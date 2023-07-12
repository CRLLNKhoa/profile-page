import Header from "@/components/Header";
import Social from "@/components/Social";
import "@/styles/globals.css";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <div className="w-full flex justify-center flex-col items-center ">
      <main className="grid grid-cols-4 w-full lg:w-[1200px]">
        <Header /> 
        <section className="col-span-4 lg:col-span-3 lg:mr-4 mt-8">
          <Component {...pageProps} />
        </section>
        <section className="mt-8">
          <Social />
        </section>
      </main>
    </div>
  );
}
