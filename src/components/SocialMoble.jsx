import React from "react";

function SocialMoble() {
  return (
    <section className="p-4 justify-evenly flex flex-col col-span-4 lg:hidden shadow-lg">
      <h1 className="font-bold mb-4 text-[20px]">Các liên kết mạng xã hội của tôi</h1>
      <div className="flex flex-wrap gap-4">
        <a
          target="_blank"
          href="mailto:?subject=testbody=this is a test"
          className="flex items-center gap-2 hover:bg-gray-200 py-2 px-2 rounded-lg duration-500"
        >
          <div className=" rounded-full ">
            <img className="w-8" src="/gmail.svg" alt="" />
          </div>
          
        </a>

        <a
          target="_blank"
          href="https://www.facebook.com/lnkhoa1205"
          className="flex items-center gap-2 hover:bg-gray-200 py-2 px-2 rounded-lg duration-500"
        >
          <div className="border-2 rounded-full border-white">
            <img className="w-8 rounded-full" src="/facebook.svg" alt="" />
          </div>
       
        </a>

        <a
          target="_blank"
          href="https://github.com/CRLLNKhoa"
          className="flex items-center gap-2 hover:bg-gray-200 py-2 px-2 rounded-lg duration-500"
        >
          <div className="border-2 rounded-full border-white">
            <img className="w-8 rounded-full" src="/github.svg" alt="" />
          </div>
        
        </a>

        <a
          target="_blank"
          href="https://www.linkedin.com/in/lnkhoa-undefined-32494625b/"
          className="flex items-center gap-2 hover:bg-gray-200 py-2 px-2 rounded-lg duration-500"
        >
          <div className="">
            <img className="w-6 ml-2" src="/linkin.svg" alt="" />
          </div>
        
        </a>

        <a
          target="_blank"
          href="https://www.instagram.com/crl_lnkhoa/"
          className="flex items-center gap-2 hover:bg-gray-200 py-2 px-2 rounded-lg duration-500"
        >
          <div className="border-2 border-white">
            <img className="w-8" src="/ins.svg" alt="" />
          </div>
         
        </a>

        <a
          target="_blank"
          href="https://lienket.vercel.app/luongkhoa"
          className="flex items-center gap-2 hover:bg-gray-200 py-2 px-2 rounded-lg duration-500"
        >
          <div className="border-2 border-white">
            <img className="w-8" src="/link.jpg" alt="" />
          </div>
       
        </a>

      </div>
    </section>
  );
}

export default SocialMoble;
