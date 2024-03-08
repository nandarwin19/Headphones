const Item = ({ price, img, name }) => {
  return (
    <div className="w-[25%] bg-[#f6f6f6] h-full rounded-lg border border-black1">
      <img
        src={img}
        alt=""
        className="w-full rounded-tl-lg rounded-tr-lg  h-[450px] object-fill object-center"
      />
      <div className="p-2">
        <p>{name}</p>
        <p>$ {price}</p>
      </div>
    </div>
  );
};

export default Item;
