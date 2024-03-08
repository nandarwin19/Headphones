import { RiHeadphoneFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed top-0 z-50 bg-white1 w-full border border-[#000000] font-bold">
      <div className="grid  grid-cols-12 h-[10vh] w-full place-items-center">
        <Link
          to={`/home`}
          className=" w-full h-full col-span-9 flex items-center laptop:border border-l-[#0000] border-r-[#242424]"
        >
          <p className="tablet:pl-12 pl-6 cursor-pointer Aquatico flex items-center">
            N. HEADPHONES
          </p>
        </Link>
        <Link
          to={`/cart`}
          className="tablet:pr-12 pr-6 cursor-pointer col-span-3 flex w-full h-full justify-end items-center"
        >
          <p className="tablet:pr-12 pr-6 cursor-pointer col-span-3 flex w-full h-full justify-end items-center">
            <RiHeadphoneFill className="text-2xl" />
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
