import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex md:flex-col md:space-y-8 py-[30px] items-center justify-center md:justify-start md:pt-[30px] w-full md:max-w-[250px] h-full md:h-screen bg-white">
      <Link to={"/addproduct"}>
        <div className="py-3 px-5 items-center justify-center bg-[#f6f6f6] rounded-[6px] flex mx-6">
          <h1>Add Product</h1>
        </div>
      </Link>
      <Link to={"/listproduct"}>
        <div className="py-3 px-5 items-center justify-center bg-[#f6f6f6] rounded-[6px] flex mx-6">
          <h1>Product List</h1>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
