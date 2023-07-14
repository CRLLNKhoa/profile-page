import React from "react";

function Book() {
  return (
    <section
      id="book"
      className="bg-white rounded-lg shadow-lg font-mono overflow-hidden w-full p-4"
    >
      <h1 className="font-bold mb-14 text-[20px]">Sách đọc gần đây</h1>
      <div className="grid grid-cols-5 gap-4 mt-4 pb-2">
        <div className="col-span-2 group cursor-pointer lg:col-span-1">
          <div className="h-[120px] bg-[#F8BACF] flex items-center justify-center rounded-lg">
            <img
              src="/dnt.jpg"
              className="w-24 h-36 group-hover:w-28 group-hover:h-40 duration-500 rounded-lg shadow-xl -translate-y-6"
              alt=""
            />
          </div>
          <h1 className="text-center mt-2">Đắc Nhân Tâm</h1>
        </div>
        <div className="col-span-2 group cursor-pointer lg:col-span-1">
          <div className="h-[120px] bg-[#ACDBF2] flex items-center justify-center rounded-lg">
            <img
              src="/ngk.jpg"
              className="w-24 h-36 group-hover:w-28 group-hover:h-40 duration-500 rounded-lg shadow-xl -translate-y-6"
              alt=""
            />
          </div>
          <h1 className="text-center mt-2">Nhà Giả Kim</h1>
        </div>
        <div className="col-span-2 cursor-pointer group mt-12 lg:mt-0 lg:col-span-1">
          <div className="h-[120px] bg-[#AEDBD8] flex items-center justify-center rounded-lg">
            <img
              src="/bg.png"
              className="w-24 h-36 group-hover:w-28 group-hover:h-40 duration-500 rounded-lg shadow-xl -translate-y-6"
              alt=""
            />
          </div>
          <h1 className="text-center mt-2">Bố Già</h1>
        </div>
        <div className="col-span-2 group cursor-pointer mt-12 lg:mt-0 lg:col-span-1">
          <div className="h-[120px] bg-[#CDAED3] flex items-center justify-center rounded-lg">
            <img
              src="/one.png"
              className="w-24 h-36 group-hover:w-28 group-hover:h-40 duration-500 rounded-lg shadow-xl -translate-y-6"
              alt=""
            />
          </div>
          <h1 className="text-center mt-2">The One Thing</h1>
        </div>
      </div>
    </section>
  );
}

export default Book;
