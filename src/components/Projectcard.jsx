import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

function Projectcard({ name, desc, imgurl, url }) {
  return (
    <a className="flex gap-4 px-2 py-4 border-b rounded-md" href={url}>
      <img
        src={imgurl}
        alt=""
        height="50"
        width="50"
        className="object-contain "
      />
      <div>
        <p className="text-lg  font-semibold text-blue-600">{name}</p>
        <p>{desc}</p>
      </div>
      <div className="flex items-center justify-center text-center ">
      <RiArrowRightSLine />
      </div>
    </a>
  );
}

export default Projectcard;
