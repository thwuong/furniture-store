import srcProduct1 from "../assets/upload_1aa6f23a22d74fa88509f30ff89740b1_large.webp";
import srcProduct2 from "../assets/upload_large.webp";
import avatar from "../assets/profile.jpg";
import Category from "../components/Category";
import ProductItem from "../components/ProductItem";
import CommentForm from "../components/CommentForm";
import { MdShoppingCart, MdDone, MdMoreHoriz } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const ProductDetail = () => {
  let { productId } = useParams();
  const [option, setOption] = useState(false);
  const [size, setSize] = useState("s");
  const [index, setIndex] = useState(0);
  const [color, setColor] = useState("red");
  const data = [srcProduct1, srcProduct2];
  const handleChooseSize = (event) => {
    setSize(event.target.value);
  };
  const handleChooseColor = (event) => {
    setColor(event.target.value);
  };
  const handleChooseImgae = (event) => {
    setIndex(event.target.dataset.index);
  };
  useEffect(() => {
    const slides = document.querySelectorAll(".slide-img");
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[index].classList.add("active");
  });
  return (
    <div className="app__container my-8 pb-16">
      <section className="grid grid-cols-4">
        <Category />
        <div className="col-span-3 ">
          <div className="grid grid-cols-2 ">
            <div>
              <figure>
                <img src={data[index]} alt="" className="scale-90" />
              </figure>
              <div className="flex gap-4">
                <div
                  className="w-14 slide-img border hover:border-primary"
                  onClick={handleChooseImgae}
                >
                  <figure>
                    <img src={srcProduct1} alt="" data-index={0} />
                  </figure>
                </div>
                <div
                  className="w-14 slide-img border hover:border-primary"
                  onClick={handleChooseImgae}
                >
                  <figure>
                    <img src={srcProduct2} alt="" data-index={1} />
                  </figure>
                </div>
              </div>
            </div>
            <div>
              <h1 className="font-semibold text-xl">
                B??n Sofa Th???i Trang Noguchi Home'furni
              </h1>
              <p className="text-base">SKU: SF022-1</p>
              <h5 className="text-red-400 text-2xl font-medium mt-2">
                1,200,000???
              </h5>
              <div className="h-[1px] w-full bg-gray-300 my-2"></div>
              <div>
                <label htmlFor="size" className="block text-sm font-semibold">
                  K??ch th?????c
                </label>
                <select
                  name="size"
                  value={size}
                  onChange={handleChooseSize}
                  className="p-2 border w-48 my-4 text-gray-700"
                >
                  <option value="s">S</option>
                  <option value="m">M</option>
                </select>
              </div>
              <div>
                <label htmlFor="color" className="block text-sm font-semibold">
                  K??ch th?????c
                </label>
                <select
                  name="color"
                  value={color}
                  onChange={handleChooseColor}
                  className="p-2 border w-48 my-4 text-gray-700"
                >
                  <option value="red">red</option>
                  <option value="white">white</option>
                </select>
              </div>
              <div>
                <label htmlFor="color" className="block text-sm font-semibold">
                  S??? l?????ng
                </label>
                <input
                  type="number"
                  name="quantiy"
                  defaultValue={1}
                  min={1}
                  max={28}
                  className="p-2 my-4 w-16 border"
                />
              </div>
              <div className="flex gap-4 mb-11">
                <div className="flex items-center bg-primary text-white w-full px-4 py-2 gap-2 cursor-pointer hover:bg-hover">
                  <MdShoppingCart className="text-2xl" />
                  <span>Th??m v??o gi???</span>
                </div>
                <div className="flex items-center bg-primary text-white w-full px-4 py-2 gap-2 cursor-pointer hover:bg-hover">
                  <MdDone className="text-2xl" />
                  <span>Mua ngay</span>
                </div>
              </div>
              <div>
                <p className="font-bold text-lg">
                  Tags:
                  <span className="text-gray-500 text-sm font-normal bg-gray-200 p-1 rounded-sm ml-2">
                    B??n
                  </span>
                </p>
              </div>
            </div>
          </div>
          <section className="mt-20">
            <h2 className="font-medium">M?? T??? S???N PH???M</h2>
            <div className="h-[1px] w-full bg-black my-2"></div>
            <p>
              M???t b??n ???????c l??m b???ng k??nh b???n ?????p. Ch??n b??n ch???c ch???n, ch???ng
              tr?????t. Th??ch h???p s??? d???ng trong gia ????nh, c??c nh?? h??ng, kh??ch
              s???n...
            </p>
            <div>
              <p className="mt-6">Th??ng s??? k??? thu???t:</p>

              <table className="my-6">
                <tbody>
                  <tr>
                    <td className="border px-2 py-2 font-medium border-slate-300">
                      Xu???t x???
                    </td>
                    <td className="border px-2 py-2 border-slate-300">
                      Malaysia
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-2 border-slate-300 font-medium">
                      Ch???t li???u
                    </td>
                    <td className="border px-2 py-2 border-slate-300">
                      K??nh, ch??n g??? beech (g??? d??? gai)
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-2 border-slate-300 font-medium">
                      K??ch th?????c
                    </td>
                    <td className="border px-2 py-2 border-slate-300 ">
                      125 x 89 x 40 (cm)
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-2 border-slate-300 font-medium">
                      12 th??ng
                    </td>
                    <td className="border px-2 py-2 border-slate-300">
                      Trong su???t
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-2 border-slate-300 font-medium">
                      B???o h??nh
                    </td>
                    <td className="border px-2 py-2 border-slate-300">
                      12 th??ng
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <p className="mb-6">Th??ng tin s???n ph???m:</p>
              <span>
                Ch???t li???u b???n b???, ch???u va ?????p B??n sofa th???i trang Noguchi
                Home'furni 125 x 89 x 40 cm (Trong su???t) c?? m???t b??n ???????c l??m
                b???ng k??nh b???n ?????p, ch???u l???c t???t. Ch???t li???u k??nh ch???ng tr???y x?????c,
                ch???ng b??m b???n n??n d??? d??ng v??? sinh, lau ch??i. M???t b??n c?? ki???u
                d??ng h??nh tam gi??c v???i c??c g??c bo tr??n ?????p m???t, l??m t??ng th??m v???
                m???m m???i v?? t??nh th???m m??? cho s???n ph???m. Ch??n b??n c?? ????? ???n ?????nh cao
                Ch??n b??n ???????c l??m t??? g??? beech (g??? d??? gai) c???ng ch???c. Ch???t li???u
                g??? ???? ???????c x??? l?? ch???ng m???i m???t, ch???ng ???m m???c v?? kh??ng c?? m??i kh??
                ch???u. Kh??? n??ng ch???u l???c cao, ch???u ???????c c??c va ?????p n??n kh??ng b???
                bi???n d???ng, cong v??nh trong qu?? tr??nh s??? d???ng. Ch??n b??n ???????c
                thi???t k??? ?????c ????o v???i ????? c??n b???ng cao, ch???ng tr?????t, gi??p b??n
                kh??ng b??? ch??ng ch??nh, rung l???c khi ng???i. Ph?? h???p v???i nhi???u phong
                c??ch n???i th???t B??n sofa th???i trang Noguchi Home'furni s??? h???u
                thi???t k??? ?????c ????o v?? tinh t???, ph?? h???p v???i nhi???u phong c??ch n???i
                th???t kh??c nhau, t??? ????n gi???n ?????n sang tr???ng, c??? ??i???n ?????n hi???n
                ?????i. S???n ph???m th??ch h???p s??? d???ng trong gia ????nh, c??c nh?? h??ng,
                qu??n c?? ph??, kh??ch s???n... g??p ph???n t?? ??i???m cho kh??ng gian s???ng
                th??m trang nh??.
              </span>
            </div>
          </section>
          <section className="mt-11">
            <h2 className="font-semibold">B??NH LU???N</h2>
            <div className="h-[1px] w-full bg-black my-2"></div>
            <CommentForm />
            <ul className="mx-8 mt-8">
              <li className="mt-4 p-4 border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <figure className="w-8 h-8 rounded-full overflow-hidden">
                      <img src={avatar} alt="avatar" />
                    </figure>
                    <span className="text-sm text-gray-500 font-medium">
                      Michael Gough
                    </span>
                    <span className="text-sm text-gray-500 font-medium">
                      Feb. 8, 2022
                    </span>
                  </div>
                  <span className="relative p-1 rounded-md cursor-pointer hover:bg-gray-200">
                    <MdMoreHoriz
                      className="text-2xl text-gray-400"
                      onClick={() => {
                        setOption(!option);
                      }}
                    />
                    {option ? (
                      <ul className="absolute top-10 left-0 bg-white shadow-md ">
                        <li className="p-2">Edit</li>
                        <li className="p-2">Remove</li>
                      </ul>
                    ) : null}
                  </span>
                </div>
                <p className="mt-4 text-gray-500 text-justify">
                  Very straight-to-point article. Really worth time reading.
                  Thank you! But tools are just the instruments for the UX
                  designers. The knowledge of the design tools are as important
                  as the creation of the design strategy.
                </p>
              </li>
            </ul>
          </section>
          <section className="mt-11">
            <h4 className="font-medium">S???N PH???M KH??C</h4>
            <div className="h-[1px] w-full bg-black my-2"></div>
            <ul className="grid grid-cols-4">
              <li>
                <ProductItem />
              </li>
            </ul>
          </section>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
