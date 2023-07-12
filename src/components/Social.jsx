import React from "react";

function Social() {
  return (
    <section className="font-mono">
      <h1 className="font-bold">Các liên kết mạng xã hội của tôi</h1>
      <section className="flex flex-col gap-4 mt-4">
        <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <div className="border-2 rounded-full border-white">
            <img className="w-6 rounded-full" src="/aaa.jpg" alt="" />
          </div>
          <img className="w-4 h-4" src="/link.svg" alt="" />
          <img className="w-6 h-6" src="/gmail.svg" alt="" />
        </div>
        <h1 className="text-[13px]">lnkhoa1205@gmail.com</h1>
        </div>
      </section>
      <section className="flex flex-col gap-4 mt-4">
        <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <div className="border-2 rounded-full border-white">
            <img className="w-6 rounded-full" src="/aaa.jpg" alt="" />
          </div>
          <img className="w-4 h-4" src="/link.svg" alt="" />
          <img className="w-6 h-6" src="/gmail.svg" alt="" />
        </div>
        <h1 className="text-[13px]">lnkhoa1205@gmail.com</h1>
        </div>
      </section>
      <section className="flex flex-col gap-4 mt-4">
        <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <div className="border-2 rounded-full border-white">
            <img className="w-6 rounded-full" src="/aaa.jpg" alt="" />
          </div>
          <img className="w-4 h-4" src="/link.svg" alt="" />
          <img className="w-6 h-6" src="/gmail.svg" alt="" />
        </div>
        <h1 className="text-[13px]">lnkhoa1205@gmail.com</h1>
        </div>
      </section>
    </section>
  );
}

export default Social;
