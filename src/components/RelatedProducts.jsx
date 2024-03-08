import { useNavigate } from "react-router-dom/dist";
import { relatedData } from "./constants/constant";
import Item from "./Item";

const RelatedProducts = () => {
  const navigate = useNavigate();
  const goToProducts = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    navigate("/products");
  };

  return (
    <div className="w-full h-screen bg-white">
      <div className="flex items-center justify-between px-[90px] py-6">
        <h1 className="font-bold text-xl">YOU MIGHT ALSO LIKE</h1>
        <button
          onClick={goToProducts}
          className="py-2 px-4 border-2 border-black2 text-black2 font-bold"
        >
          CHECK MORE
        </button>
      </div>
      <div className="flex flex-wrap items-center justify-evenly gap-4 mt-4">
        {relatedData.map((item, idx) => {
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
    </div>
  );
};

export default RelatedProducts;
