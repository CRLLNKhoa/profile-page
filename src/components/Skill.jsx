import React from "react";
import { Chip } from "@material-tailwind/react";

function Skill() {
  return (
    <section id="skill" className="bg-white shadow-md rounded-lg font-mono overflow-hidden w-full p-4">
      <h1 className="font-bold text-[20px]">Kỉ năng & Công Cụ</h1>
      <div className="flex gap-4 items-center mt-4">
        <div className="flex gap-4 flex-wrap">
          <Chip variant="outlined" size="sm" value="HTML" />
          <Chip variant="outlined" size="sm" value="CSS" />
          <Chip variant="outlined" size="sm" value="SASS" />
          <Chip variant="outlined" size="sm" value="PUG" />
          <Chip variant="outlined" size="sm" value="Javascript" />
          <Chip variant="outlined" size="sm" value="TypeScript" />
          <Chip variant="outlined" size="sm" value="Reactjs" />
          <Chip variant="outlined" size="sm" value="React nav" />
          <Chip variant="outlined" size="sm" value="Nextjs" />
          <Chip variant="outlined" size="sm" value="Nodejs" color="red" />
          <Chip variant="outlined" size="sm" value="ExpressJs" color="red" />
          <Chip variant="outlined" size="sm" value="Mongodb" color="red" />
          <Chip variant="outlined" size="sm" value="firebase" color="red" />
          <Chip variant="outlined" size="sm" value="figma" color="green"/>
          <Chip variant="outlined" size="sm" value="GIt" color="orange"/>
          <Chip variant="outlined" size="sm" value="postman" color="orange" />
          <Chip variant="outlined" size="sm" value="vscode" color="orange" />
          <Chip variant="outlined" size="sm" value="github" color="orange" />
          <Chip variant="outlined" size="sm" value="gitlab" color="orange" />
        </div>
      </div>
    </section>
  );
}

export default Skill;
