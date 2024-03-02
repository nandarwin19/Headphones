import React from "react";

const Client = () => {
  return (
    <div className="py-6 laptop:py-20 rounded-tl-[1.5rem] rounded-tr-[1.5rem] tablet:rounded-tl-[3rem] tablet:rounded-tr-[3rem] bg-white1 -mt-12">
      <div className="max-container ">
        <h1 className="Aquatico tablet:text-sm text-[12px] my-4">/Clients</h1>
        <h1 className="tablet:text-[2rem] text-[1.4rem]">
          They trust us for their first steps in this journey.
        </h1>

        <div className="slider">
          <ul className="flex items-center justify-center">
            {[...Array(18)].map((_, index) => (
              <li key={index}>
                <img
                  className="h-[100px] w-[100px] tablet:h-[200px] tablet:w-[200px]"
                  src={`/public/img/l${(index % 6) + 1}.png`}
                  alt={`Logo ${index + 1}`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Client;
