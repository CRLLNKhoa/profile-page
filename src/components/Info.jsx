import React from "react";
import { Button } from "@material-tailwind/react";
import {LuMail} from "react-icons/lu"
import {FaShare} from "react-icons/fa" 
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/solid";

function Info() {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
  return (
    <>
      <section id="info" className="bg-white shadow-md rounded-lg font-mono overflow-hidden w-full">
        <div className="h-[160px] bg-gradient-to-r from-pink-200 to-blue-200">
          <img className="w-full h-full object-cover" src="/src.gif" alt="" />
        </div>
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
            <Button onClick={handleOpen} size="sm" variant="gradient" className="flex items-center gap-3">
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
      <Dialog open={open} handler={handleOpen}>
        <div className="flex items-center justify-between">
          <DialogHeader>New message to @</DialogHeader>
          <XMarkIcon className="mr-3 h-5 w-5" onClick={handleOpen} />
        </div>
        <DialogBody divider>
          <div className="grid gap-6">
            <Input label="Username" />
            <Textarea label="Message" />
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="outlined" color="red" onClick={handleOpen}>
            close
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            send message
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default Info;
