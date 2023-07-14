import React from 'react'
import { Typography } from "@material-tailwind/react";

function Footer() {
  return (
    <footer className="flex w-full border-blue-200 pt-2 flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
    <Typography color="blue-gray" className="font-normal">
      &copy; 2023 Lương Khoa
    </Typography>
    <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">    
      <li>
        <Typography
          as="a"
          href="#"
          color="blue-gray"
          className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
        >
          Cảm ơn bạn đã quan tâm đến tôi!
        </Typography>
      </li>
    </ul>
  </footer>
  )
}

export default Footer