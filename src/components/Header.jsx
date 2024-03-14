import { useContext, useState } from "react";
import { RiHeadphoneFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);

  const toggleMenuBtn = () => {
    setToggleMenu(!toggleMenu);
  };

  // const goToLogin = () => {
  //   setToggleMenu(false);
  //   window.location.href = "/loginSignup";
  // };

  const closeMenu = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setToggleMenu(false);
  };

  return (
    <div className="fixed top-0 z-50 bg-white1 w-[100vw] border border-[#000000] font-bold">
      <div className="grid  grid-cols-12 h-[10vh] w-full place-items-center">
        <Link
          to={`/`}
          className=" w-full h-full col-span-9 flex items-center laptop:border border-l-[#0000] border-r-[#242424]"
        >
          <p className="tablet:pl-12 pl-6 cursor-pointer Aquatico flex items-center">
            N. HEADPHONES
          </p>
        </Link>
        <div className="hidden cursor-pointer col-span-3 md:flex w-full h-full justify-end gap-8 items-center">
          {localStorage.getItem("auth-token") ? (
            <button
              className="py-2 px-4 bg-black2 text-white1"
              onClick={() => {
                localStorage.removeItem("auth-token");
                window.location.href = "/";
              }}
            >
              Logout
            </button>
          ) : (
            <Link to="/loginSignup">
              <button className="py-2 px-4 bg-black2 text-white1 rounded-sm ">
                Login
              </button>
            </Link>
          )}
          <Link to={`/cart`}>
            <p className="tablet:pr-12 relative pr-6 cursor-pointer col-span-3 flex w-full h-full justify-end items-center">
              <RiHeadphoneFill className="text-2xl" />
              <small className="absolute top-[-10px]">
                {getTotalCartItems()}
              </small>
            </p>
          </Link>
        </div>
        <div
          onClick={toggleMenuBtn}
          className="flex cursor-pointer items-center justify-end text-3xl ml-24 md:hidden"
        >
          {toggleMenu ? <IoMdClose /> : <IoIosMenu />}
        </div>
        {toggleMenu && (
          <div className="md:hidden w-1/2 absolute top-12 right-0 bg-white1 h-screen">
            <ul className="w-full uppercase text-center flex flex-col h-screen  items-center justify-center gap-8">
              <li>
                <Link
                  to={"/"}
                  onClick={closeMenu}
                  className="tracking-wider cursor-pointer"
                >
                  HOME
                </Link>
              </li>
              <Link
                onClick={closeMenu}
                to={"/products"}
                className="tracking-wider cursor-pointer"
              >
                HEADPHONES
              </Link>
              <Link
                onClick={closeMenu}
                to={"/reviews"}
                className="tracking-wider cursor-pointer"
              >
                REVIEWS
              </Link>
              <li>
                <Link
                  to={"/cart"}
                  onClick={closeMenu}
                  className="tracking-wider cursor-pointer"
                >
                  CART
                </Link>
              </li>

              {localStorage.getItem("auth-token") ? (
                <button
                  className="py-2 px-4 bg-black2 text-white1"
                  onClick={() => {
                    localStorage.removeItem("auth-token");
                    window.location.href = "/";
                  }}
                >
                  Logout
                </button>
              ) : (
                <Link to="/loginSignup">
                  <button className="py-2 px-4 bg-black2 text-white1 rounded-sm ">
                    Login
                  </button>
                </Link>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
