import React from "react";
import SocialIcons from "./SocialIcons";

const Contact = () => {
  return (
    <div className="w-full py-10 bg-white1 h-full text-black1">
      <div className="max-container flex  tablet:flex-row items-start justify-between">
        <p className="tablet:text-[6rem] text-[3rem] Roslindale tracking-tighter">
          Want to <br /> &nbsp; Start <br />a new
          <br />
          &nbsp; project?
        </p>

        <div className="">
          <div className="ml-2 mt-8 gap-2 flex flex-col">
            <a href="mailto:nwin21210@gmail.com">
              <p className="tablet:text-2xl text-sm aye underline">
                nwin21210@gmail.com
              </p>
            </a>
          </div>
          <div className="mt-10">
            <SocialIcons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
