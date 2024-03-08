import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import banner from "/img/banner.jpg";
import { FaArrowDown } from "react-icons/fa";
import Item from "../components/Item";

const Headphones = () => {
  const { all_headphones } = useContext(ShopContext);
  return (
    <div className="bg-[#f5f5f5]">
      <img src={banner} alt="" className="h-[60vh] w-full object-cover" />
      <div>
        <p>
          <span>Showing 1-9</span> out of 15 products
        </p>
        <div>
          Sort by <FaArrowDown />
        </div>
      </div>
      <div className=" max-w">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {all_headphones.map((item, idx) => {
            return (
              <Item
                key={idx}
                price={item.price}
                img={item.image}
                name={item.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Headphones;
