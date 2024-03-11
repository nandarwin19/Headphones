import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);
  const fetchInfo = async () => {
    await fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const remove_product = async (id) => {
    await fetch(`http://localhost:4000/removeproduct`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    await fetchInfo();
  };

  return (
    <div className="w-full h-[740px] py-2 md:px-[50px] m-0 md:m-8 rounded-sm bg-white shadow-xl">
      <h1 className="text-center text-2xl mb-4">All Products List</h1>
      <table className="w-full table-auto divide-y divide-gray-200 overflow-y-auto">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Products
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Remove
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {allproducts.map((product, index) => {
            return (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img src={product.image} alt="" className="h-12 w-12" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {product.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    ${product.price}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <RxCross2
                    onClick={() => {
                      remove_product(product.id);
                    }}
                    className="cursor-pointer ml-5"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListProduct;
