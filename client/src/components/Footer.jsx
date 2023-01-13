import {
  MdOutlineHome,
  MdMail,
  MdPhone,
  MdPrint,
  MdFacebook,
} from "react-icons/md";
const Footer = () => {
  return (
    <div className="mt-12 bg-black">
      <div className="app__container py-11">
        <div className="grid grid-cols-4 gap-x-4">
          <div>
            <h5 className="font-bold text-white mb-4">GIỚI THIỆU</h5>
            <span className="text-sm text-gray-400">
              Với hơn 100 nhân viên tư vấn trên mọi phương diện, không chỉ là
              hướng dẫn và xử lý các vấn đề từ Haravan, chúng tôi luôn mong cùng
              chia sẻ các kinh nghiệm giúp bạn bán được nhiều hàng hơn.
            </span>
            <ul className="mt-4 text-gray-400">
              <li className="flex gap-2 mb-2 items-center">
                <MdOutlineHome className="text-lg" />
                <span className="text-sm">
                  {" "}
                  Thường thạnh, Cái Răng, Cần Thơ
                </span>
              </li>
              <li className="flex gap-2 mb-2 items-center">
                <MdMail className="text-lg" />
                <span className="text-sm">tietngocnhu0103@gmail.com</span>
              </li>
              <li className="flex gap-2 mb-2 items-center">
                <MdPhone className="text-lg" />
                <span className="text-sm">0378056713</span>
              </li>
              <li className="flex gap-2 mb-2 items-center">
                <MdPrint className="text-lg" />
                <span className="text-sm">0378056713</span>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-white mb-4">LIÊN KẾT</h5>
            <ul>
              <li className="mb-2">
                <span className="text-sm cursor-pointer text-gray-400 hover:text-primary ease-linear duration-300">
                  Trang chủ
                </span>
              </li>
              <li className="mb-2">
                <span className="text-sm cursor-pointer text-gray-400 hover:text-primary ease-linear duration-300">
                  Sản phẩm
                </span>
              </li>
              <li className="mb-2">
                <span className="text-sm cursor-pointer text-gray-400 hover:text-primary ease-linear duration-300">
                  Blog
                </span>
              </li>
              <li className="mb-2">
                <span className="text-sm cursor-pointer text-gray-400 hover:text-primary ease-linear duration-300">
                  Giới thiệu
                </span>
              </li>
              <li className="mb-2">
                <span className="text-sm cursor-pointer text-gray-400 hover:text-primary ease-linear duration-300">
                  Liên hệ
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-white mb-4">ĐĂNG KÝ NHẬN MAIL</h5>
            <div className="my-8">
              <input
                type="email"
                className="w-full outline-none border-b border-gray-300 bg-transparent text-sm text-gray-400 p-2"
                placeholder="Nhập email của bạn"
                name="email"
              />
            </div>
            <span className="text-sm text-gray-400">
              Hãy nhập email của bạn vào đây để nhận tin!
            </span>
          </div>
          <div>
            <h5 className="font-bold text-white mb-4">ĐĂNG KÝ NHẬN MAIL</h5>
            <div className="mt-4">
              <input
                type="email"
                className="w-full outline-none border-b border-gray-300 bg-transparent text-sm text-gray-400 p-2"
                placeholder="Nhập email của bạn"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
