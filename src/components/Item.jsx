import { Link } from "react-router-dom";

const Item = ({ price, img, name, id }) => {
  const goTop = () => {
    document.body.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div
      onClick={goTop}
      className=" group relative cursor-pointer w-[400px] shadow-2xl bg-[#f6f6f6] h-full rounded-xl border border-[#c1c0c0]"
    >
      <Link to={`/products/${id}`}>
        <img
          src={img}
          alt=""
          className="w-full  duration-500 ease-in-out rounded-tl-xl rounded-tr-xl  h-[410px] object-fill object-center"
        />
        <div className="p-2 text-black2 text-center space-y-2 mb-3">
          <p className="text-sm">{name}</p>
          <p className="text-sm">Price: ${price}</p>
          <button className="py-[2px] px-4 border border-black2 bg-black2 text-white1 rounded-md">
            Buy
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Item;
