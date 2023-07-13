import React from "react";

function Header() {
  function scrollToTestDiv(id){
    const divElement = document.getElementById(id);
    divElement.scrollIntoView({behavior: 'smooth' });
  }
  return (
    <header className="col-span-4 bg-white py-2 flex justify-between items-center w-full px-8 lg:px-0">
      <img className="h-10" src="/logo.png" alt="" />
      <div className="flex gap-8">
        <p
          className="hover:text-blue-600 duration-500 hover:underline underline-offset-4 transition-all"
          onClick={() =>scrollToTestDiv("info")}
        >
          Home
        </p>
        <p
          className="hover:text-blue-600 duration-500 hover:underline underline-offset-4 transition-all"
          onClick={() =>scrollToTestDiv("skill")}
        >
          Skill
        </p>
        <p
          className="hover:text-blue-600 duration-500 hover:underline underline-offset-4 transition-all"
          onClick={() =>scrollToTestDiv("interest")}
        >
          Interest
        </p>
        <p
          className="hover:text-blue-600 duration-500 hover:underline underline-offset-4 transition-all"
          onClick={() =>scrollToTestDiv("images")}
        >
          Images
        </p>
        <p
          className="hover:text-blue-600 duration-500 hover:underline underline-offset-4 transition-all"
          onClick={() =>scrollToTestDiv("event")}
        >
          Event
        </p>
        <p
          className="hover:text-blue-600 duration-500 hover:underline underline-offset-4 transition-all"
          onClick={() =>scrollToTestDiv("project")}
        >
          Project
        </p>
      </div>
    </header>
  );
}

export default Header;
