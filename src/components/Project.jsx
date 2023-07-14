import React from "react";
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

function Project() {
  const [active, setActive] = React.useState(1);

  const next = () => {
    if (active === 1) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const [open1, setOpen1] = useState(false);

  const handleOpen1 = () => setOpen1(!open1);
  return (
    <>
      <section
        id="project"
        className="bg-white rounded-lg font-mono overflow-hidden w-full p-4"
      >
        <h1 className="font-bold mb-4 text-[20px]">Các dự án cá nhân gần đây</h1>
        <div className="grid grid-cols-3 gap-4">
          <Card
            handleOpen={handleOpen}
            tech={"Nextjs,Nodejs"}
            img="/mtc.png"
            progress={"90%"}
            title={"Mê Truyện Chữ Clone"}
          />
          <Card
            handleOpen={handleOpen1}
            tech={"Reactjs,Nodejs"}
            img="/tiki.png"
            progress={"90%"}
            title={"Tiki version small"}
          />
          <CardDemo
            img="/lofi.png"
            title="Website Nghe Nhạc Lofi"
            progress="90%"
            tech="Reactjs"
            link= "https://lofi-with-carol.vercel.app/"
          />
          <CardDemo
            img="/linktree.png"
            title="Website Chia Sẻ Liên Kết"
            progress="100%"
            tech="Nextjs,Nodejs"
            link="https://linktree-crllnkhoa.vercel.app/"
          />
          <CardDemo
            img="/blog.png"
            title="Blog Cá Nhân"
            progress="100%"
            tech="Reactjs,GithubGhapQL"
            link="https://carolo-blog.vercel.app/"
          />
          <CardDemo
            img="/game.png"
            title="Website Download Game"
            progress="90%"
            tech="Reactjs"
            link="https://free-to-game.netlify.app/"
          />
        </div>
        <div className="flex items-center justify-center mt-4 gap-8">
          <IconButton
            size="sm"
            color="blue"
            onClick={prev}
            disabled={active === 1}
          >
            <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
          </IconButton>
          <Typography color="gray" className="font-normal">
            Page <strong className="text-blue-gray-900">1</strong> of{" "}
            <strong className="text-blue-gray-900">1</strong>
          </Typography>
          <IconButton
            size="sm"
            color="blue"
            onClick={next}
            disabled={active === 1}
          >
            <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
          </IconButton>
        </div>
      </section>

      <Dialog open={open} size="xxl" handler={handleOpen}>
        <DialogHeader>Mê Truyện Chữ Clone</DialogHeader>
        <DialogBody divider>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <h1 className="font-bold">Loại dự án:</h1>
              <p>Dự án cá nhân</p>
            </div>
            <div className="flex gap-4">
              <h1 className="font-bold">Vị trí:</h1>
              <p>Người sáng lập</p>
            </div>
            <div className="flex gap-4">
              <h1 className="font-bold">Công việc:</h1>
              <div className="flex flex-col flex-1 gap-2">
                <p className="text-justify">
                  - Xây dụng giao diện bằng Nextjs, Tailwindcss, các thư viện hỗ
                  trợ khác,..
                </p>
                <p className="text-justify">
                  - Xây dựng backend trả về các Api xử lí các chức nâng của
                  website bằng Nodejs, ExpressJS và sử dụng MongoDB để lưu dự
                  liệu
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <h1 className="font-bold">Demo:</h1>
              <div className="flex flex-col">
                <span>
                  Trang chủ:{" "}
                  <a
                    target="_blank"
                    href="https://metruyenchu.vercel.app/"
                    className="text-blue-600"
                  >
                    Đi đến!
                  </a>
                </span>
                <span>
                  Trang tác giả:{" "}
                  <a
                    target="_blank"
                    href="https://metruyenchu.vercel.app/"
                    className="text-blue-600"
                  >
                    Đi đến!
                  </a>
                </span>
                <span className="flex">
                  Trang Admin: <p className="text-red-600">Tạm khóa!</p>
                </span>
                <span>
                  Mã nguồn:{" "}
                  <a
                    href="https://github.com/CRLLNKhoa/metruyenchu-clone"
                    className="text-blue-600"
                  >
                    Đi đến!
                  </a>
                </span>
              </div>
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
        </DialogFooter>
      </Dialog>
      <Dialog open={open1} size="xxl" handler={handleOpen1}>
        <DialogHeader>Tiki Version Smal;</DialogHeader>
        <DialogBody divider>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <h1 className="font-bold">Loại dự án:</h1>
              <p>Dự án cá nhân</p>
            </div>
            <div className="flex gap-4">
              <h1 className="font-bold">Vị trí:</h1>
              <p>Người sáng lập</p>
            </div>
            <div className="flex gap-4">
              <h1 className="font-bold">Công việc:</h1>
              <div className="flex flex-col flex-1 gap-2">
                <p className="text-justify">
                  - Xây dụng giao diện bằng Reactjs, SCSS, các thư viện hỗ trợ
                  khác,..
                </p>
                <p className="text-justify">
                  - Xây dựng backend trả về các Api xử lí các chức nâng của
                  website bằng Nodejs, ExpressJS và sử dụng MongoDB để lưu dự
                  liệu
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <h1 className="font-bold">Demo:</h1>
              <div className="flex flex-col">
                <span>
                  Trang chủ:{" "}
                  <a
                    target="_blank"
                    href="https://tiki-small.netlify.app/"
                    className="text-blue-600"
                  >
                    Đi đến!
                  </a>
                </span>
                <span className="flex">
                  Trang Admin: <p className="text-red-600">Tạm khóa!</p>
                </span>
                <span>
                  Mã nguồn:{" "}
                  <a
                    href="https://github.com/CRLLNKhoa/tiki-frontend"
                    className="text-blue-600"
                  >
                    Đi đến!
                  </a>
                </span>
              </div>
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen1}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
export default Project;

const Card = ({ handleOpen, title, progress, tech, img }) => {
  return (
    <div className="flex flex-col col-span-3 lg:col-span-1 p-4 bg-[#3a3c3f] justify-start group rounded-lg gap-2">
      <div className="w-full h-40 lg:h-32 overflow-hidden">
        <img
          src={img}
          className="h-full w-full group-hover:scale-105 duration-500 cursor-pointer rounded-lg"
          alt=""
        />
      </div>
      <h1 className="text-white text-center">{title}</h1>
      <div className="w-full">
        <div className="flex items-center justify-between gap-4">
          <b className="text-white text-[13px]">Hoàn thành</b>
          <b className="text-white text-[13px]">{progress}</b>
        </div>
        <div className="flex items-center justify-between gap-4">
          <b className="text-white text-[13px]">Công nghệ</b>
          <b className="text-white text-[13px]">{tech}</b>
        </div>
      </div>
      <Button
        onClick={() => handleOpen()}
        className="w-[120px] mt-2 ml-auto"
        color="blue"
        size="sm"
      >
        Xem chi tiết
      </Button>
    </div>
  );
};
const CardDemo = ({ title, progress, tech, img ,link}) => {
  return (
    <div className="flex flex-col col-span-3 lg:col-span-1 p-4 bg-[#3a3c3f] justify-start group rounded-lg gap-2">
      <div className="w-full h-40 lg:h-32 overflow-hidden">
        <img
          src={img}
          className="h-full w-full group-hover:scale-105 duration-500 cursor-pointer rounded-lg"
          alt=""
        />
      </div>
      <h1 className="text-white text-center">{title}</h1>
      <div className="w-full">
        <div className="flex items-center justify-between gap-4">
          <b className="text-white text-[13px]">Hoàn thành</b>
          <b className="text-white text-[13px]">{progress}</b>
        </div>
        <div className="flex items-center justify-between gap-4">
          <b className="text-white text-[13px]">Công nghệ</b>
          <b className="text-white text-[13px]">{tech}</b>
        </div>
      </div>
      <a
        href={link}
        target="_blank"
        className="w-[120px] uppercase text-[14px] font-bold py-1 rounded-lg mt-2 ml-auto bg-green-600 flex justify-center items-center text-white"
      >
        Đến website
      </a>
    </div>
  );
};
