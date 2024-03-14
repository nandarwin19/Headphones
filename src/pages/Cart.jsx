import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { IoMdRemove } from "react-icons/io";

const Cart = () => {
  const { getTotalCartAmount, all_headphones, cartItems, removeFromCart } =
    useContext(ShopContext);

  return (
    <div className="w-full pt-[15vh] min-h-[100vh] bg-gray-100 font-poppins">
      <div className="w-11/12 mx-auto">
        <h1 className="text-3xl mb-7">Your Bag</h1>
        <div className="lg:grid grid-cols-12 flex flex-col space-y-16 lg:space-y-0">
          <div className="col-span-9">
            <div className="grid grid-cols-[1fr_2fr_1fr_1fr_1fr] gap-2 text-md md:text-lg items-center">
              <p>Products</p>
              <p className="">Title</p>
              <p className="">Price</p>
              <p className="">Quantity</p>
              <p>Remove</p>
            </div>
            <hr className="h-1 bg-gray-300 border-0" />
            {Object.keys(cartItems).some((id) => cartItems[id] > 0) ? (
              <>
                {all_headphones.map((e) => {
                  if (cartItems[e.id] > 0) {
                    return (
                      <>
                        <div className="grid grid-cols-[1fr_2fr_1fr_1fr_1fr] items-center gap-2 px-6 py-4 md:gap-7">
                          <img
                            src={e.image}
                            alt=""
                            className="h-12 w-16  md:h-20 md:w-20 -ml-5"
                          />
                          <p className="text-sm md:text-base -ml-5">{e.name}</p>
                          <p className="text-sm md:text-base">${e.price}</p>
                          <button className=" w-16 h-10 bg-white border-2 border-gray-300">
                            {cartItems[e.id]}
                          </button>

                          <IoMdRemove
                            className="w-4 md:w-6 ml-8 md:ml-4 cursor-pointer"
                            onClick={() => removeFromCart(e.id)}
                          />
                        </div>
                        <hr className="h-1 bg-gray-300 border-0" />
                      </>
                    );
                  }
                  return null;
                })}
              </>
            ) : (
              <div className="flex flex-col mt-[100px] items-center justify-center">
                <h1 className="text-xl">Nothing in your cart yet</h1>
                <img
                  src="/img/cart.gif"
                  alt="cart gif"
                  className="w-1/2 md:w-1/3 mx-auto"
                />
              </div>
            )}
          </div>
          <div className="col-span-3 lg:px-10 px-0">
            <h1 className="text-lg  -mt-1 font-semibold">Cart Total</h1>
            <hr className="h-[0.5px] bg-gray-300 border-0" />
            <div className="flex flex-col gap-4">
              <hr className="h-1 bg-gray-300 border-0" />
              <div className="flex justify-between my-3">
                <p>Shipping Free</p>
                <p>Free</p>
              </div>
              <hr className="h-1 bg-gray-300 border-0" />
              <div className="flex justify-between bg-[#fbe5bf] py-2 md:py-4 px-2">
                <p>Total</p>
                <h3>${Math.round(getTotalCartAmount())}</h3>
              </div>
            </div>
            <button className="w-full h-[45px] lg:h-[50px] bg-black2 text-white font-semibold mt-4 md:mt-8">
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
