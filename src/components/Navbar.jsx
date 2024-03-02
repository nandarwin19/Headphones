import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <ul className="h-12 px-14 font-bold flex text-black1 text-sm gap-12 border-2 border-black2 border-l-0 border-r-0 bg-white1 items-center justify-start">
        <li className="tracking-wider cursor-pointer">
          <Link to={"/headphones"} className="tracking-wider cursor-pointer">
            HEADPHONES
          </Link>
        </li>
        <li>
          <a
            href="#moreus"
            className="tracking-wider cursor-pointer"
            onClick={(event) => handleClick(event, "moreus")}
          >
            MORE
          </a>
        </li>
        <li className="tracking-wider cursor-pointer">
          <a
            href="#team"
            className="tracking-wider cursor-pointer"
            onClick={(event) => handleClick(event, "team")}
          >
            TEAM
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
