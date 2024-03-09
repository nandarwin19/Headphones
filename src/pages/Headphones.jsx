import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import banner from "/img/bannerp.jpg";
import { CiShop } from "react-icons/ci";
import Item from "../components/Item";
import Contact from "../components/Contact";

const Headphones = () => {
  const { all_headphones } = useContext(ShopContext);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  // Calculate the index range for the current page
  const indexOfLastProduct = currentPage * productsPerPage; // 9
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage; // 0

  const currentProducts = all_headphones.slice(
    indexOfFirstProduct,
    indexOfLastProduct // 0, 9
  );

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-[#f5f5f5]">
      <img
        src={banner}
        alt=""
        className="h-[35vh] md:h-[60vh] w-full object-cover"
      />
      <div className=" max-w">
        <div className="flex items-center justify-between my-2">
          <p>
            <span className="font-semibold">
              Showing {indexOfFirstProduct + 1}-
              {Math.min(indexOfLastProduct, all_headphones.length)}
            </span>{" "}
            out of {all_headphones.length} products
          </p>
          <div className="flex items-center gap-2 bg-black1 text-white1 mt-10 mb-12 p-2 px-3">
            <CiShop />
          </div>
        </div>

        <div className="flex flex-wrap   items-center justify-center md:justify-between ">
          {currentProducts.map((item, idx) => {
            return (
              <Item
                key={idx}
                id={item.id}
                price={item.price}
                img={item.image}
                name={item.name}
              />
            );
          })}
        </div>
        <div className="flex items-center justify-center my-12 text-white1">
          {Array.from(
            { length: Math.ceil(all_headphones.length / productsPerPage) },
            (_, i) => i + 1
          ).map((pageNumber) => (
            <div
              key={pageNumber}
              className={`px-6 py-2 bg-black/70  cursor-pointer ${
                currentPage === pageNumber ? "bg-black/90" : ""
              }`}
              onClick={() => handlePageClick(pageNumber)}
            >
              {pageNumber}
            </div>
          ))}
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Headphones;
