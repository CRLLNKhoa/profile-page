import React from "react";

function Social() {
  return (
    <section className="pt-0 flex flex-col col-span-4 lg:col-span-1 mt-7 h-[40vh] sticky top-4">
      <h1 className="font-bold mb-4">Các liên kết mạng xã hội của tôi</h1>
      <div className="flex flex-col gap-4">
        <a
          target="_blank"
          href="mailto:?subject=testbody=this is a test"
          className="flex items-center gap-2 hover:bg-gray-200 py-2 px-2 rounded-lg duration-500"
        >
          <div className=" rounded-full ">
            <img className="w-8" src="/gmail.svg" alt="" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-[15px] font-bold flex items-center gap-1">
              <img src="/unnamed.jpg" alt="ava" className="h-4 rounded-full w-4" />{" "}
              LNKhoa1205@gmail.com
            </h1>
            <p className="text-[12px]">Liên hệ với tôi qua gmail</p>
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
          <div className="flex flex-col">
            <h1 className="text-[15px] font-bold flex items-center gap-1">
              <img src="/aaa.jpg" alt="ava" className="h-4 rounded-full w-4" />{" "}
              Lương Khoa
            </h1>
            <p className="text-[12px]">Kết bạn và trò truyện với tôi</p>
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
          <div className="flex flex-col">
            <h1 className="text-[15px] font-bold flex items-center gap-1">
              <img src="/aaa.jpg" alt="ava" className="h-4 rounded-full w-4" />{" "}
              Lương Khoa (CRLLNKhoa)
            </h1>
            <p className="text-[12px]">Nơi lưu các mã nguồn của tôi</p>
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
          <div className="flex flex-col">
            <h1 className="text-[15px] font-bold flex items-center gap-1">
              <img src="/aaa.jpg" alt="ava" className="h-4 rounded-full w-4" />{" "}
              Lương Khoa
            </h1>
            <p className="text-[12px]">Kết bạn và trò truyện với tôi</p>
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
          <div className="flex flex-col">
            <h1 className="text-[15px] font-bold flex items-center gap-1">
              <img src="/aaaa.jpg" alt="ava" className="h-4 rounded-full w-4" />{" "}
              Lương Khoa
            </h1>
            <p className="text-[12px]">Kết bạn và trò truyện với tôi</p>
          </div>
        </a>

        <a
          target="_blank"
          href="https://www.instagram.com/crl_lnkhoa/"
          className="flex items-center gap-2 hover:bg-gray-200 py-2 px-2 rounded-lg duration-500"
        >
          <div className="border-2 border-white">
            <img className="w-8" src="/lol.png" alt="" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-[15px] font-bold flex items-center gap-1">
              <img src="/aaaa.jpg" alt="ava" className="h-4 rounded-full w-4" />{" "}
              Cá heo chinn
            </h1>
            <p className="text-[12px]">Kết bạn và chơi game với tôi</p>
          </div>
        </a>

      </div>
    </section>
  );
}

export default Social;
