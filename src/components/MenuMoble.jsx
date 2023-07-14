import React from 'react'
import {
    IconButton,
    SpeedDial,
    SpeedDialHandler,
    SpeedDialContent,
    SpeedDialAction,
    Typography,
  } from "@material-tailwind/react";
  import {
    PlusIcon,
    HomeIcon,
    CogIcon,
    Square3Stack3DIcon,
  } from "@heroicons/react/24/outline";

function MenuMoble() {
    function scrollToTestDiv(id) {
        const divElement = document.getElementById(id);
        divElement.scrollIntoView({ behavior: "smooth" });
      }
  return (

    <div className="fixed lg:hidden bottom-4 right-4">
      <SpeedDial>
        <SpeedDialHandler>
          <IconButton size="lg" className="rounded-full">
            <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
          </IconButton>
        </SpeedDialHandler>
        <SpeedDialContent>
          <SpeedDialAction className="h-16 w-16">
            <HomeIcon className="h-5 w-5" />
            <Typography color="blue-gray" className="text-xs font-normal">
              Home
            </Typography>
          </SpeedDialAction>
          <SpeedDialAction className="h-16 w-16">
            <CogIcon className="h-5 w-5" />
            <Typography color="blue-gray" className="text-xs font-normal">
              Links
            </Typography>
          </SpeedDialAction>
          <SpeedDialAction className="h-16 w-16">
            <Square3Stack3DIcon className="h-5 w-5" />
            <Typography color="blue-gray" className="text-xs font-normal">
              Skills
            </Typography>
          </SpeedDialAction>
          <SpeedDialAction onClick={() => scrollToTestDiv("interest")} className="h-16 w-16">
            <Square3Stack3DIcon className="h-5 w-5" />
            <Typography color="blue-gray" className="text-xs font-normal">
            Interests
            </Typography>
          </SpeedDialAction>
          <SpeedDialAction onClick={() => scrollToTestDiv("images")} className="h-16 w-16">
            <Square3Stack3DIcon className="h-5 w-5" />
            <Typography color="blue-gray" className="text-xs font-normal">
              Images
            </Typography>
          </SpeedDialAction>
          <SpeedDialAction onClick={() => scrollToTestDiv("event")} className="h-16 w-16">
            <Square3Stack3DIcon className="h-5 w-5" />
            <Typography color="blue-gray" className="text-xs font-normal">
              Events
            </Typography>
          </SpeedDialAction>
          <SpeedDialAction onClick={() => scrollToTestDiv("book")} className="h-16 w-16">
            <Square3Stack3DIcon className="h-5 w-5" />
            <Typography color="blue-gray" className="text-xs font-normal">
              Books
            </Typography>
          </SpeedDialAction>
          <SpeedDialAction  onClick={() => scrollToTestDiv("playlist")} className="h-16 w-16">
            <Square3Stack3DIcon className="h-5 w-5" />
            <Typography color="blue-gray" className="text-xs font-normal">
              Playlists
            </Typography>
          </SpeedDialAction>
          <SpeedDialAction  onClick={() => scrollToTestDiv("project")} className="h-16 w-16">
            <Square3Stack3DIcon className="h-5 w-5" />
            <Typography color="blue-gray" className="text-xs font-normal">
              Project
            </Typography>
          </SpeedDialAction>
        </SpeedDialContent>
      </SpeedDial>
    </div>

  )
}

export default MenuMoble