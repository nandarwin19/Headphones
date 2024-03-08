import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { features } from "../components/constants/constant";
import { useParams } from "react-router-dom";
import RelatedProducts from "../components/RelatedProducts";

const EachIteamPage = () => {
  const { all_headphones, addToCart } = useContext(ShopContext);

  const { productId } = useParams();

  const product = all_headphones
    ? all_headphones.find((e) => e.id === parseInt(productId))
    : null;

  return (
    <div className="min-h-screen laptop:grid grid-cols-12  relative  bg-white1  pt-[10vh] w-full">
      <div className="col-span-9 c relative h-full flex w-full bg-black">
        <div className="laptop:w-[55px] fixed bg-white1 h-full border-1 border-r-black"></div>
        <div className="pl-[55px] h-full w-full border border-black">
          <img
            src={product?.image}
            alt=""
            className="w-full h-[90vh] object-center object-fill"
          />
          <RelatedProducts />
        </div>
      </div>
      <div className="laptop:col-span-3 col-span-12 w-full bg-white1 sticky">
        <div className="laptop:fixed bg-white1 z-10 p-6 ">
          <p className="text-lg tablet:text-xl italic">
            Immerse yourself in a symphony of sound, where crisp notes of melody
            intertwine with deep bass tones.
          </p>
          <div className="my-6">
            <h2 className="text-md uppercase">{product.name}</h2>

            <ul className="my-2">
              <li className="text-xl tablet:text-2xl">
                Over-ear headphones / <span className="italic">2021</span>
              </li>
            </ul>
            <div className="w-full flex items-center justify-between">
              <p>Bianco (White)</p>
              <p>${product.price}</p>
            </div>
          </div>

          <ul className="mt-10">
            {features.flatMap((feature, index) => [
              <li key={index}>{feature}</li>,
              index !== features.length - 1 && (
                <li
                  key={`separator-${index}`}
                  className="w-full h-[0.7px] bg-black/60 my-1"
                ></li>
              ),
            ])}
          </ul>
          <button
            onClick={() => {
              addToCart(product.id);
            }}
            className="w-full h-10 mt-16 bg-black1 text-white"
          >
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default EachIteamPage;
