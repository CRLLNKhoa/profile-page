import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";

function Project() {
  return (
    <section
      id="project"
      className="bg-white rounded-lg font-mono overflow-hidden w-full p-4"
    >
      <h1 className="font-bold mb-4">Các dự án gần đây</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col">
            <img className="w-full h-40" src="/mtc.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Project;
