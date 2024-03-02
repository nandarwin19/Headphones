// import { products } from "./constants/constant";
import { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";
import { useGsapHeroImgReveal } from "../hooks/gsap";
import h7 from "./../../public/img/h7.jpg";
import { products } from "./constants/constant";
import { Link } from "react-router-dom";

// const data = {
//   img1: h7,
//   img2: h7,
// };

const Products = ({ mouseLeave, mouseEnter }) => {
  // const heroImgRef = useRef(null);

  // useHoverEffect(heroImgRef, data.img1, data.img2);

  // useGsapHeroImgReveal(heroImgRef, 0.5);

  return (
    <div className="grid grid-cols-1 laptop:grid-cols-12 w-full h-full">
      <div className="col-span-9 h-full flex w-full bg-black">
        <div className="laptop:w-[55px] bg-white1 h-full border-1 border-r-black"></div>
        <div className="h-full grid laptop:grid-cols-2  w-full">
          {products.map((product, index) => (
            <Link to={`/${product.id}`} key={product.id}>
              <div
                key={index}
                className={`laptop:w-49% ${
                  product.id === 1 || product.id === 3 || product.id === 5
                    ? "border-r-0"
                    : ""
                } w-full h-[400px] laptop:h-[500px] overflow-hidden col-span-1 border-b-0 border-2 border-black`}
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
              >
                <img
                  src={product.img}
                  alt="headphone"
                  className="w-full hover:scale-105 duration-100 ease-in h-full object-cover hover:skew-20"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full col-span-3 laptop:h-[1500px]">
        {/* <div className="hero-img" ref={heroImgRef}></div> */}

        <img
          src="/public/img/h7.jpg"
          alt=""
          className="object-cover hidden laptop:flex w-full h-full"
        />
      </div>
    </div>
  );
};

export default Products;
