import Image from "next/image";
import Link from "next/link";

const NavigationFN = () => {
  return (
    <div className=" relative flex flex-col flex-nowrap justify-center items-center">
      {/* Thanh điều hướng */}
      <ul className="lg:flex hidden w-full py-5 flex-row flex-nowrap justify-center items-center uppercase font-bold text-white bg-[#339538] z-20">
        <li className="w-40 text-center text-[#FF7800]">
          <Link href={"#"}>
            <span>Trang chủ</span>
          </Link>
        </li>

        <li className="w-40 text-center">
          <Link href={"#"}>
            <span>Giới thiệu</span>
          </Link>
        </li>

        <li className="group/product_nav relative w-40 text-center">
          <Link href={"#"} className="group-hover/product_nav:text-[#FF7800]">
            <span className="pr-1.5">Sản phẩm</span>
            <i className="bi bi-chevron-down text-sm"></i>
          </Link>

          <ul className="hidden absolute w-48 p-5 group-hover/product_nav:flex flex-col flex-nowrap justify-center items-start gap-y-2.5 normal-case font-normal text-black bg-white rounded-sm">
            <li className="hover:text-[#FF7800]">
              <Link href={"#"}>Củ quả các loại</Link>
            </li>

            <li className="hover:text-[#FF7800]">
              <Link href={"#"}>Rau các loại</Link>
            </li>

            <li className="hover:text-[#FF7800]">
              <Link href={"#"}>Trái cây</Link>
            </li>
          </ul>
        </li>

        <li className="w-40 text-center">
          <Link href={"#"}>
            <span>Đặt hàng</span>
          </Link>
        </li>

        <li className="w-40 text-center">
          <Link href={"#"}>
            <span>Tin tức</span>
          </Link>
        </li>

        <li className="w-40 text-center">
          <Link href={"#"}>
            <span>Liên Hệ</span>
          </Link>
        </li>
      </ul>
      {/* <Image
          src={"/images/bg_menu.jpg"}
          alt=""
          width={1920}
          height={36}
          className="absolute top-full z-10"
        /> */}
      <div className="relative">
        {/* slider */}
        <Image
          src={"/images/slider_1.jpg"}
          alt=""
          width={1920}
          height={810}
          className="w-full h-[280px] object-cover object-center lg:h-auto"
        />
        {/* Danh mục sản phẩm */}
        <div className="py-3 static bottom-0 w-full z-10 lg:absolute lg:h-32 lg:py-0">
          <div className=" static top-1/2 w-full flex flex-row flex-wrap justify-center items-center gap-x-5 gap-y-3 lg:flex-nowrap lg:gap-x-20 lg:absolute">
            {/* select 1 */}
            <div className="group/menu_nav">
              <div className="lg:w-32 lg:h-32 sm:w-20 sm:h-20 relative w-16 h-16 ">
                <div className="w-full h-full p-0.5 flex justify-center items-center bg-white rounded-full border-2 border-slate-400/35">
                  <Image
                    src={"/images/nav_cate-1.jpg"}
                    alt=""
                    width={121}
                    height={90}
                  />
                </div>

                <div className="lg:flex group-hover/menu_nav:opacity-100 hidden absolute top-0 w-32 h-32 flex-col flex-nowrap justify-center items-center opacity-0 border-2 border-slate-200 bg-slate-600/60 text-white rounded-full">
                  <p>6</p>
                  <p>Sản phẩm</p>
                </div>
              </div>
              <p className="mt-1 text-center text-sm lg:text-base">Gạo</p>
            </div>
            {/* select 2 */}
            <div className="group/menu_nav">
              <div className="lg:w-32 lg:h-32 sm:w-20 sm:h-20 relative w-16 h-16">
                <div className="w-full h-full p-0.5 flex justify-center items-center bg-white rounded-full border-2 border-slate-400/35">
                  <Image
                    src={"/images/nav_cate-1.jpg"}
                    alt=""
                    width={121}
                    height={90}
                  />
                </div>

                <div className="lg:flex group-hover/menu_nav:opacity-100 hidden absolute top-0 w-32 h-32 flex-col flex-nowrap justify-center items-center opacity-0 border-2 border-slate-200 bg-slate-600/60 text-white rounded-full">
                  <p>6</p>
                  <p>Sản phẩm</p>
                </div>
              </div>
              <p className="mt-1 text-center text-sm lg:text-base">Gạo</p>
            </div>
            {/* select 3 */}
            <div className="group/menu_nav">
              <div className="lg:w-32 lg:h-32 sm:w-20 sm:h-20 relative w-16 h-16">
                <div className="w-full h-full p-0.5 flex justify-center items-center bg-white rounded-full border-2 border-slate-400/35">
                  <Image
                    src={"/images/nav_cate-1.jpg"}
                    alt=""
                    width={121}
                    height={90}
                  />
                </div>

                <div className="lg:flex group-hover/menu_nav:opacity-100 hidden absolute top-0 w-32 h-32  flex-col flex-nowrap justify-center items-center opacity-0 border-2 border-slate-200 bg-slate-600/60 text-white rounded-full">
                  <p>6</p>
                  <p>Sản phẩm</p>
                </div>
              </div>
              <p className="mt-1 text-center text-sm lg:text-base">Gạo</p>
            </div>
            {/* select 4 */}
            <div className="group/menu_nav">
              <div className="lg:w-32 lg:h-32 sm:w-20 sm:h-20 relative w-16 h-16">
                <div className="w-full h-full p-0.5 flex justify-center items-center bg-white rounded-full border-2 border-slate-400/35">
                  <Image
                    src={"/images/nav_cate-1.jpg"}
                    alt=""
                    width={121}
                    height={90}
                  />
                </div>

                <div className="lg:flex group-hover/menu_nav:opacity-100 hidden absolute top-0 w-32 h-32  flex-col flex-nowrap justify-center items-center opacity-0 border-2 border-slate-200 bg-slate-600/60 text-white rounded-full">
                  <p>6</p>
                  <p>Sản phẩm</p>
                </div>
              </div>
              <p className="mt-1 text-center text-sm lg:text-base">Gạo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationFN;
