import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const FooterFN = () => {
  const [widthScreen, setWidthScreen] = useState<number>(0);
  const [listOne, setListOne] = useState<boolean>(false);
  const [listTwo, setListTwo] = useState<boolean>(false);

  useEffect(() => {
    setWidthScreen(window.screen.width);
  }, []);

  return (
    <footer className="bg-white text-[#656565]">
      {/* Thanh thông tin */}
      <div className="px-2 my-2 relative flex justify-center lg:my-4 lg:px-0">
        <div
          className="w-full py-2 px-3 flex flex-col flex-nowrap items-center gap-2 bg-[#FF7800] text-white lg:w-fit lg:px-16 lg:py-5 lg:flex-row lg:gap-16"
          style={{ borderRadius: "0 50px 0 50px" }}
        >
          <div className=" flex flex-row flex-nowrap justify-center items-center gap-x-3">
            <div>
              <p className="text-base text-right font-bold lg:text-lg">
                Hỗ trợ 24/7
              </p>
              <p className="text-sm text-right font-medium lg:text-base">
                Liên hệ chúng tôi 24h
              </p>
            </div>
            <i className="bi bi-headset text-4xl text-white lg:text-5xl"></i>
          </div>

          <div className="h-0.5 w-full lg:h-full lg:w-0.5 bg-white"></div>

          <div className="flex flex-row flex-nowrap justify-center items-center gap-x-3">
            <div>
              <p className="text-right text-base font-bold lg:text-lg">
                Thanh toán
              </p>
              <p className="text-sm text-right font-medium lg:text-base">
                Bảo mật thanh toán
              </p>
            </div>
            <i className="bi bi-wallet2 text-4xl text-white lg:text-5xl"></i>
          </div>

          <div className="h-0.5 w-full lg:h-full lg:w-0.5 bg-white"></div>

          <div className=" flex flex-row flex-nowrap justify-center items-center gap-x-3">
            <div>
              <p className=" text-right font-bold lg:text-lg">Giao hàng</p>
              <p className="text-sm text-right font-medium lg:text-base">
                Giao hàng tận nhà
              </p>
            </div>
            <i className="bi bi-truck text-4xl text-white lg:text-5xl"></i>
          </div>
        </div>
      </div>

      {/* Hỗ trợ */}
      <div className="px-2.5 py-4 flex flex-col flex-nowrap justify-center gap-3 bg-[#F2F2F2] lg:py-8 lg:flex-row">
        <div className="w-full flex flex-col gap-y-3 lg:w-[334px] lg:gap-y-6">
          <button>
            <Image
              width={247}
              height={67}
              src={"/images/logo.jpg"}
              alt="banner header top"
              className="w-[200px] lg:w-[247px]"
            />
          </button>

          <p className="leading-loose">
            Cửa hàng <strong className=" text-[#339538]">Nông sản sạch</strong>{" "}
            là một website cũng cấp thực phẩm an toàn, nông sản sạch cho người
            dân.
          </p>
          <div className="flex flex-row flex-nowrap justify-start items-center gap-x-4">
            <i className="bi bi-geo-alt-fill text-lg text-[#339538]"></i>
            <p>Tâng 6 toà nhà Ladeco, 266 Đội Cấn, phường Liễu Giai, Hà Nội</p>
          </div>
          <div className="flex flex-row flex-nowrap justify-start items-center gap-x-4">
            <i className="bi bi-telephone-fill text-lg text-[#339538]"></i>
            <p className=" hover:text-[#339538] text-2xl font-extrabold text-[#ff7800]">
              1900 6750
            </p>
          </div>
        </div>

        {/* Điều hướng - Email */}
        <div className="mb-16 flex flex-col flex-nowrap gap-8 lg:w-fit lg:mb-0 lg:mt-12">
          <div className="flex flex-col gap-3 lg:w-fit lg:mt-12 lg:flex-row lg:gap-28">
            {/* Về chúng tôi */}
            <div>
              <div
                onClick={() => setListOne(!listOne)}
                className="mb-3 py-2.5 flex justify-between text-[#656565] font-bold border-b border-slate-400 lg:py-0 lg:mb-5 lg:border-none"
              >
                <span>Về chúng tôi</span>
                {listOne ? (
                  <i className="bi bi-chevron-up"></i>
                ) : (
                  <i className="bi bi-chevron-down"></i>
                )}
              </div>

              {listOne ? (
                <div className="flex flex-col flex-nowrap items-start gap-3 lg:flex-row lg:items-center lg:gap-28">
                  <ul className="flex flex-col justify-start gap-3">
                    <li className=" hover:text-black hover:font-medium">
                      <Link href={"#"}>
                        <span>Trang chủ</span>
                      </Link>
                    </li>
                    <li className=" hover:text-black hover:font-medium">
                      <Link href={"#"}>
                        <span>Giới thiệu</span>
                      </Link>
                    </li>
                    <li className=" hover:text-black hover:font-medium">
                      <Link href={"#"}>
                        <span>Sản phẩm</span>
                      </Link>
                    </li>
                  </ul>

                  <ul className="flex flex-col justify-start gap-3">
                    <li className=" hover:text-black hover:font-medium">
                      <Link href={"#"}>
                        <span>Đặt hàng</span>
                      </Link>
                    </li>
                    <li className=" hover:text-black hover:font-medium">
                      <Link href={"#"}>
                        <span>Tin tức</span>
                      </Link>
                    </li>
                    <li className=" hover:text-black hover:font-medium">
                      <Link href={"#"}>
                        <span>Liên hệ</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : null}
            </div>
            {/* Hỗ trợ khách hàng */}
            <div>
              <div
                onClick={() => setListTwo(!listTwo)}
                className="mb-3 py-2.5 flex justify-between text-[#656565] font-bold border-b border-slate-400 lg:py-0 lg:mb-5 lg:border-none"
              >
                <span>Hỗ trợ khách hàng</span>
                {listTwo ? (
                  <i className="bi bi-chevron-up"></i>
                ) : (
                  <i className="bi bi-chevron-down"></i>
                )}
              </div>
              {listTwo ? (
                <ul className="flex flex-col justify-start gap-3">
                  <li>
                    <Link href={"#"}>
                      <span className=" hover:text-black hover:font-medium">
                        Trang chủ
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>
                      <span className=" hover:text-black hover:font-medium">
                        Giới thiệu
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>
                      <span className="hover: text-black hover:font-medium">
                        Sản phẩm
                      </span>
                    </Link>
                  </li>
                </ul>
              ) : null}
            </div>
          </div>

          <div className="w-full flex flex-col flex-nowrap items-center gap-6 lg:w-fit lg:gap-16 lg:flex-row">
            {/* Tiêu đề */}
            <div className="flex flex-row flex-nowrap items-center gap-x-5">
              <Image width={64} height={64} src={"/i-mail-f.svg"} alt="" />
              <div>
                <p className=" text-xl font-bold text-black">Đăng ký</p>
                <p>nhận thông tin khuyến mãi</p>
              </div>
            </div>

            {/* Email */}
            <div
              className="w-full h-[52px] pl-3 flex flex-row flex-nowrap justify-between items-center bg-white lg:pl-6 lg:w-fit"
              style={{ borderRadius: "0 24px" }}
            >
              <input
                type="text"
                placeholder="Email"
                className="w-[60%] outline-none text-black lg:w-auto"
              />
              <button className="h-full px-3 bg-[#339538] font-black text-white rounded-tr-3xl lg:ml-5 lg:px-6">
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterFN;
