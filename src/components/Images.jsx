import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Avatar,
  IconButton,
  Typography,
  Card,
} from "@material-tailwind/react";
import { HeartIcon, ShareIcon } from "@heroicons/react/24/solid";

function Images() {
  const [open, setOpen] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);
  const [img, setimg] = React.useState("");
  const handleOpen = () => {
    setOpen((cur) => !cur);
  };
  const handleIsFavorite = () => setIsFavorite((cur) => !cur);
  return (
    <>
      <section id="images" className="bg-white shadow-md rounded-lg font-mono overflow-hidden w-full p-4">
        <h1 className="font-bold text-[20px]">Ảnh</h1>
        <div className="container mx-auto mt-4">
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex w-1/2 flex-wrap">
              <div onClick={handleOpen} className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://firebasestorage.googleapis.com/v0/b/upload-getlink-ab132.appspot.com/o/myImages%2F19.jpg?alt=media&token=ae63222b-2647-4b5c-9457-3632446cbfa4"
                />
              </div>
              <div onClick={handleOpen} className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://firebasestorage.googleapis.com/v0/b/upload-getlink-ab132.appspot.com/o/myImages%2F18.jpg?alt=media&token=7b1416fb-3cdc-4001-a48e-0f1bef726724"
                />
              </div>
              <div onClick={handleOpen} className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://firebasestorage.googleapis.com/v0/b/upload-getlink-ab132.appspot.com/o/myImages%2F3.jpg?alt=media&token=6c49bac6-eaf3-4758-aa32-393c2a221965"
                />
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
              <div onClick={handleOpen} className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://firebasestorage.googleapis.com/v0/b/upload-getlink-ab132.appspot.com/o/myImages%2F5.jpg?alt=media&token=3b811589-8506-4d33-9a9e-65229ec7cda2"
                />
              </div>
              <div onClick={handleOpen} className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://firebasestorage.googleapis.com/v0/b/upload-getlink-ab132.appspot.com/o/myImages%2F17.jpg?alt=media&token=47e6d299-818b-4b78-ad61-6350dc589ad2"
                />
              </div>
              <div onClick={handleOpen} className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://firebasestorage.googleapis.com/v0/b/upload-getlink-ab132.appspot.com/o/myImages%2F12.jpg?alt=media&token=25d42b95-2fc1-421d-b88c-1a325ac28a59"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Dialog size="md" open={open} handler={handleOpen}>
        <DialogHeader className="justify-between">
          <div className="flex items-center gap-3">
            <Avatar size="sm" variant="circular" alt="tania andrew" src="/aaa.jpg" />
            <div className="-mt-px flex flex-col">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-medium"
              >
                Lương Khoa
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="text-xs font-normal"
              >
                @lnkhoa
              </Typography>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <IconButton
              variant="text"
              size="sm"
              color={isFavorite ? "red" : "blue-gray"}
              onClick={handleIsFavorite}
            >
              <HeartIcon className="h-5 w-5" />
            </IconButton>
            <Button color="green" size="sm">
              <a target="_blank" href="https://upload-getlink.vercel.app/home">Xem thêm ảnh</a>
            </Button>
          </div>
        </DialogHeader>
      </Dialog>
    </>
  );
}

export default Images;
