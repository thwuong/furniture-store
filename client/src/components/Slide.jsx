import srcItem1 from "../assets/slideshow_1.webp";
import srcItem2 from "../assets/slideshow_2.webp";
import srcItem3 from "../assets/slideshow_3.webp";

const SliderPage = () => {
  return (
    <div className="slider__container w-full relative overflow-hidden">
      <span className="absolute cursor-pointer left-4 top-[50%]">Prev</span>
      <div className="slider__list flex w-full">
        <div
          Style={`background-image: url(${srcItem1})`}
          className={`slider__item min-w-full flex justify-center items-center flex-col bg-no-repeat bg-cover bg-center min-h-[540px]`}
        >
          <h2 className="slider__sub text-xl font-semibold">
            Tinh tế sang trọng{" "}
          </h2>
          <h3 className="slider__title mt-2 text-3xl font-bold">
            BỘ SALON TRẮNG XÁM XEM NGAY
          </h3>
          <button>Xem Ngay</button>
        </div>
        <div
          Style={`background-image: url(${srcItem2})`}
          className="slider__item min-w-full flex justify-center items-center flex-col bg-no-repeat bg-cover bg-center min-h-[540px]"
        >
          <h2 className="slider__sub text-xl font-semibold">
            Tinh tế sang trọng{" "}
          </h2>
          <h3 className="slider__title mt-2 text-3xl font-bold">
            BỘ SALON TRẮNG XÁM XEM NGAY
          </h3>
          <button>Xem Ngay</button>
        </div>
        <div
          Style={`background-image: url(${srcItem3})`}
          className="slider__item min-w-full flex justify-center items-center flex-col bg-no-repeat bg-cover bg-center min-h-[540px]"
        >
          <h2 className="slider__sub text-xl font-semibold">
            Tinh tế sang trọng{" "}
          </h2>
          <h3 className="slider__title mt-2 text-3xl font-bold">
            BỘ SALON TRẮNG XÁM XEM NGAY
          </h3>
          <button>Xem Ngay</button>
        </div>
      </div>
      <span className="absolute cursor-pointer top-[50%] right-4">Next</span>
    </div>
  );
};

export default SliderPage;
