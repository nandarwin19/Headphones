import { Link } from "react-router-dom";

const Navbar = () => {
  const handleClick = (event, targetId) => {
    event.preventDefault();

    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        // Scroll to the target element after scrolling to the top
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }, 500); // Adjust the delay as needed
      }
    }
  };

  return (
    <div>
      <ul className="h-12 px-1 md:px-14 font-bold flex text-black1 text-sm gap-12 border-2 border-black2 border-l-0 border-r-0 bg-white1 items-center justify-start">
        <li className="tracking-wider cursor-pointer">
          <Link
            to={"/products"}
            className="tracking-wider cursor-pointer"
            onClick={() => handleClick(event, null)}
          >
            HEADPHONES
          </Link>
        </li>
        <li>
          <a href="#moreus" className="tracking-wider cursor-pointer">
            ABOUT-US
          </a>
        </li>
        <li className="tracking-wider cursor-pointer">
          <a href="#team" className="tracking-wider cursor-pointer">
            TEAM
          </a>
        </li>
        <li>
          <Link to={"/reviews"} onClick={() => handleClick(event, null)}>
            REVIEWS
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
