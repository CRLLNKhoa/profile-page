import React from "react";

function Music() {
  return (
    <section
      id="playlist"
      className="bg-white rounded-lg font-mono overflow-hidden w-full p-4"
    >
      <h1 className="font-bold text-[20px]">Playlist thường nghe</h1>
      <div className="grid grid-cols-3 mt-4 gap-6">
      <iframe className="rounded-lg col-span-3 h-[150px] lg:col-span-1 w-full" src="https://www.youtube-nocookie.com/embed/y9Wn53rgz4o?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe className="rounded-lg col-span-3 h-[150px] lg:col-span-1 w-full" src="https://www.youtube-nocookie.com/embed/ZevJUwmiO4U?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe className="rounded-lg col-span-3 h-[150px] lg:col-span-1 w-full" src="https://www.youtube-nocookie.com/embed/aCGQ6_E7w1s?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </section>
  );
}

export default Music;
