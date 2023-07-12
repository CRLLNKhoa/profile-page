import React from "react";

function Header() {
  return (
    <header className="col-span-4 bg-white py-2 flex justify-between items-center w-full px-8 lg:px-0">
      <img className="h-10" src="/logo.png" alt="" />
      <div className="flex gap-8 font-mono">
        <a
          className="hover:text-sky-600 duration-500 hover:underline underline-offset-4 transition-all"
          href=""
        >
          Home
        </a>
        <a
          className="hover:text-sky-600 duration-500 hover:underline underline-offset-4 transition-all"
          href=""
        >
          Skill
        </a>
        <a
          className="hover:text-sky-600 duration-500 hover:underline underline-offset-4 transition-all"
          href=""
        >
          Interest
        </a>
        <a
          className="hover:text-sky-600 duration-500 hover:underline underline-offset-4 transition-all"
          href=""
        >
          Images
        </a>
        <a
          className="hover:text-sky-600 duration-500 hover:underline underline-offset-4 transition-all"
          href=""
        >
          Event
        </a>
        <a
          className="hover:text-sky-600 duration-500 hover:underline underline-offset-4 transition-all"
          href=""
        >
          Project
        </a>
      </div>
    </header>
  );
}

export default Header;
