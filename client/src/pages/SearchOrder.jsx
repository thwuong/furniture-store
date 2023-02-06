import { Link } from "react-router-dom";

const SearchOrder = () => {
  return (
    <main className="app__container mt-8">
      <h1 className="text-2xl font-bold text-center">TRA CỨU ĐƠN HÀNG</h1>

      <input
        className="mt-10 w-2/3 block mx-auto py-1 px-1 outline-[#d9bb36]"
        type="text"
        name="sku"
        placeholder="Mã đơn hàng"
      />

      <input
        className="mt-10 w-2/3 block mx-auto py-1 px-1 outline-[#d9bb36]"
        type="tel"
        name="phone"
        placeholder="Số điện thoại"
      />

      <div className="mt-10 flex justify-center">
        <Link to={"/tracking-order"}>
          <button className="px-8 py-3 bg-primary cursor-pointer text-white font-bold ">
            TRA CỨU ĐƠN HÀNG
          </button>
        </Link>
      </div>
    </main>
  );
};

export default SearchOrder;
