import { useState } from "react";
import upload_area from "./../../assets/upload-area.png";

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    price: "",
    image: "",
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const Add_Product = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append("product", image);

    await fetch("http://localhost:4000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        responseData = data;
      });

    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product);
      await fetch("http://localhost:4000/addproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((resp) => resp.json())
        .then((data) => {
          data.success ? alert("Product Added") : alert("Failed");
        });
    }
  };

  return (
    <div className="p-4 space-y-8 max-w-[800px] py-[30px] px-[50px] my-[20px] mx-[30px] rounded-md bg-white shadow-2xl">
      <div className="w-full text-[#7b7b7b] text-md md:text-lg">
        <p>Product Title</p>
        <input
          type="text"
          name="name"
          placeholder="Type here"
          value={productDetails.name}
          onChange={changeHandler}
          className="w-full h-[50px] rounded-md placeholder:text-[#7b7b7b] pl-4 outline-none bg-[#cbcbcb] text-[#484848] text-md"
        />
      </div>
      <div className="w-full text-[#7b7b7b] text-md md:text-lg">
        <p>Price</p>
        <input
          type="text"
          className="w-full h-[50px] rounded-md placeholder:text-[#7b7b7b] pl-4 outline-none bg-[#cbcbcb] text-[#484848] text-md"
          name="price"
          value={productDetails.price}
          onChange={changeHandler}
          placeholder="Type here"
        />
      </div>
      <div>
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            className="h-[120px] w-[120px] rounded-md object-contain mb-4"
            alt=""
          />
        </label>
        <input
          type="file"
          onChange={imageHandler}
          className="w-full"
          name="image"
          id="file-input"
        />
      </div>
      <button
        onClick={() => Add_Product()}
        className="py-2 px-4 bg-[#0a0a0a] text-white rounded-md "
      >
        add
      </button>
    </div>
  );
};

export default AddProduct;
