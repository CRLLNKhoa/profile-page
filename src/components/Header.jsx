import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";

function Header() {
  function scrollToTestDiv(id) {
    const divElement = document.getElementById(id);
    divElement.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <header className="col-span-4 bg-white py-4 flex justify-center lg:justify-between items-center w-full lg:px-0">
      <img className="h-10" src="/logo.png" alt="" />
      <div className="hidden lg:flex gap-8">
        <p
          className="hover:text-blue-600 duration-500 hover:underline underline-offset-4 transition-all"
          onClick={() => scrollToTestDiv("info")}
        >
          Home
        </p>
        <p
          className="hover:text-blue-600 duration-500 hover:underline underline-offset-4 transition-all"
          onClick={() => scrollToTestDiv("skill")}
        >
          Skills
        </p>
        <p
          className="hover:text-blue-600 duration-500 hover:underline underline-offset-4 transition-all"
          onClick={() => scrollToTestDiv("interest")}
        >
          Interests
        </p>
        <p
          className="hover:text-blue-600 duration-500 hover:underline underline-offset-4 transition-all"
          onClick={() => scrollToTestDiv("images")}
        >
          Images
        </p>
        <p
          className="hover:text-blue-600 duration-500 hover:underline underline-offset-4 transition-all"
          onClick={() => scrollToTestDiv("event")}
        >
          Events
        </p>
        <p
          className="hover:text-blue-600 duration-500 hover:underline underline-offset-4 transition-all"
          onClick={() => scrollToTestDiv("book")}
        >
          Books
        </p>
        <p
          className="hover:text-blue-600 duration-500 hover:underline underline-offset-4 transition-all"
          onClick={() => scrollToTestDiv("playlist")}
        >
          Playlists
        </p>
        <p
          className="hover:text-blue-600 duration-500 hover:underline underline-offset-4 transition-all"
          onClick={() => scrollToTestDiv("project")}
        >
          Project
        </p>
      </div>
    </header>
  );
}

export default Header;
