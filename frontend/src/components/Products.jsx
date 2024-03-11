import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Products = ({ mouseLeave, mouseEnter }) => {
  const [home_products, setHome_products] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/homeproducts")
      .then((respnose) => respnose.json())
      .then((data) => setHome_products(data));
  }, []);

  return (
    <div className="grid grid-cols-1  laptop:grid-cols-12 w-full h-full">
      <div className="col-span-9 h-full flex w-full bg-black">
        <div className="laptop:w-[55px] bg-white1 h-full border-1 border-r-black"></div>
        <div className="h-full grid laptop:grid-cols-2 tablet:grid-cols-2  w-full">
          {home_products.map((product, index) => (
            <Link to={`/products/${product.id}`} key={product.id}>
              <div
                key={index}
                className={`laptop:w-49% ${
                  product.id === 1 || product.id === 3 || product.id === 5
                    ? "tablet:border-r-0"
                    : ""
                } w-full border-1  h-[400px] laptop:h-[500px] overflow-hidden col-span-1 ${
                  product.id === 5 || product.id === 6
                    ? "border-1 border-black"
                    : ""
                }  border border-black`}
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
              >
                <img
                  src={product.image}
                  alt="headphone"
                  className="w-full hover:scale-105 duration-100 ease-in h-full object-cover hover:skew-20"
                  loading="lazy"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
      {home_products ? (
        <div className="w-full col-span-3 laptop:h-full border-b-2 border-black">
          <img
            src="/img/common.jpg"
            alt=""
            className="object-cover hidden laptop:flex w-full h-full"
          />
        </div>
      ) : null}
    </div>
  );
};

Products.propTypes = {
  mouseLeave: PropTypes.func,
  mouseEnter: PropTypes.func,
};

export default Products;
