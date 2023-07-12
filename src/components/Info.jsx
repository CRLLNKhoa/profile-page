import React from "react";
import { Button } from "@material-tailwind/react";
import {LuMail} from "react-icons/lu"
import {FaShare} from "react-icons/fa" 

function Info() {
  return (
    <section className="bg-white shadow-md rounded-lg font-mono overflow-hidden w-full">
      <div class="h-[160px] bg-gradient-to-r from-pink-200 to-blue-200"></div>
      <div className="relative pt-16 pl-8 pb-8 flex flex-col justify-start gap-2">
        <div className="rounded-full overflow-hidden border-4 border-white absolute -top-1/2 translate-y-[56px] left-8">
          <img className="w-28 h-28 rounded-full" src="/aaa.jpg" alt="" />
        </div>
        <h1 className="font-semibold text-[20px]">Lương Khoa</h1>
        <div className="flex gap-2 items-center">
          <img src="/flag.png" className="w-6 h-4 rounded-sm" />
          <p className="text-[15px]">An Giang, Việt Nam</p>
        </div>
        <div className="flex gap-1 items-center text-[13px] flex-wrap">
          <p>🆔 @lnkhoa</p>
          <img className="w-6" src="/dot.svg" alt="" />
          <p>💻 FrontEnd Developer</p>
          <img className="w-6" src="/dot.svg" alt="" />
          <p className="text-gray-600">🕒 Full time</p>
        </div>
        <div className="flex gap-4">
          <Button size="sm" variant="gradient" className="flex items-center gap-3">
            <LuMail size={16} />
            Nhắn Tin
          </Button>
          <Button color="green" variant="gradient" className="flex items-center gap-3">
            <FaShare size={16} />
            Chia sẻ
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Info;
