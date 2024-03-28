import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BlobOptions } from "buffer";

const HeaderFN = () => {
  const [list, setList] = useState<boolean>(false);

  return (
    <header>
      {/* <Image
        width={1920}
        height={110}
        src={"/images/banner_header_top.jpg"}
        alt="banner header top"
      /> */}
      {/* ================================== */}
      <div className="py-4 px-4 flex flex-nowrap justify-between min-[450px]:px-8 sm:px-16 lg:py-5 lg:px-0 lg:justify-center lg:items-center lg:gap-x-20">
        {/* Tìm kiếm */}
        <div className="lg:flex w-fit h-full p-0.5 pl-4 hidden flex-row flex-nowrap gap-x-4 border border-[#6e7673] rounded-[30px] cursor-pointer">
          <input
            type="text"
            placeholder="Tìm sản phẩm"
            style={{ outline: "none" }}
            className="text-base"
          />
          <div className="group/search hover:bg-white w-12 h-12 flex justify-center items-center bg-[#339538] rounded-full">
            <i className="bi bi-search text-[20px] text-white group-hover/search:text-[#339538]"></i>
          </div>
        </div>

        <div className="flex flex-row flex-nowrap items-center gap-x-3">
          {/* menu list */}
          <button className="lg:hidden">
            <i className="bi bi-list text-[24px]"></i>
          </button>

          {/* Logo */}
          <Image
            width={247}
            height={67}
            src={"/images/logo.jpg"}
            alt="banner header top"
            className="w-[160px] h-[43px] lg:w-[247px] lg:h-[67px] cursor-pointer"
          />
        </div>

        <div className="flex flex-row flex-nowrap justify-center items-center gap-3">
          {/* Hỗ trợ */}
          <div className="lg:flex py-1 px-4 hidden flex-row flex-nowrap justify-center items-center gap-3 border border-[#6e7673] text-[#349545] rounded-[30px]">
            <i className="bi bi-telephone text-[30px] font-bold"></i>
            <div>
              <p>Hỗ trợ</p>
              <p className="hover:text-[#ff7800] font-bold leading-none cursor-pointer">
                1900 6750
              </p>
            </div>
          </div>
          {/* Giỏ hàng */}
          <div className="w-9 h-9 lg:w-14 lg:h-14 relative flex items-center justify-center bg-[#339538] rounded-full cursor-pointer">
            <i className="bi bi-cart3 text-[20px] lg:text-[28px] text-white"></i>
            <span className="lg:right-0 absolute -right-2 top-0  w-5 h-5 flex justify-center items-center text-sm text-white leading-[0] rounded-full bg-[#FF7800]">
              0
            </span>
          </div>
        </div>
      </div>

      {/* menu list */}
      <div className="fixed top-0 w-full h-screen pr-2 z-50 bg-slate-950/70">
        <div className="w-fit h-full flex flex-row flex-nowrap items-start bg-white">
          <ul className="w-[250px] py-6 pl-4 flex flex-col flex-nowrap gap-4 font-medium">
            <li className="pb-1.5 hover:border-b border-[#FF7800] hover:text-[#FF7800]">
              <Link href={"#"}>
                <span>Trang chủ</span>
              </Link>
            </li>

            <li className="pb-1.5 hover:border-b border-[#FF7800] hover:text-[#FF7800]">
              <Link href={"#"}>
                <span>Giới thiệu</span>
              </Link>
            </li>

            <li className=" group/el_list_menu pb-1.5 hover:border-b border-[#FF7800]">
              <div className="flex flex-nowrap justify-between items-center">
                <Link
                  href={"https://www.w3schools.com/"}
                  className="group-hover/el_list_menu:text-[#FF7800]"
                >
                  Sản phẩm
                </Link>
                <button
                  onClick={() => setList(!list)}
                  className="group-hover/el_list_menu:text-[#FF7800]"
                >
                  <i className="bi bi-caret-down-fill"></i>
                </button>
              </div>
              {/* Danh sách sản phẩm */}
              {list ? (
                <ul className="mt-3 pl-4 flex flex-col flex-nowrap gap-2">
                  <li className="pb-1.5 hover:text-[#FF7800]">
                    <Link href={"#"}>
                      <span>Rau các loại</span>
                    </Link>
                  </li>
                  <li className="pb-1.5 hover:text-[#FF7800]">
                    <Link href={"#"}>
                      <span>Thực phẩm</span>
                    </Link>
                  </li>
                  <li className="pb-1.5 hover:text-[#FF7800]">
                    <Link href={"#"}>
                      <span>Trái cây</span>
                    </Link>
                  </li>
                </ul>
              ) : null}
            </li>

            <li className="pb-1.5 hover:border-b border-[#FF7800] hover:text-[#FF7800]">
              <Link href={"#"}>
                <span>Đặt hàng</span>
              </Link>
            </li>

            <li className="pb-1.5 hover:border-b border-[#FF7800] hover:text-[#FF7800]">
              <Link href={"#"}>
                <span>Tin tức</span>
              </Link>
            </li>

            <li className="pb-1.5 hover:border-b border-[#FF7800] hover:text-[#FF7800]">
              <Link href={"#"}>
                <span>Liên hệ</span>
              </Link>
            </li>
          </ul>

          <button>
            <i className="bi bi-x text-4xl"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderFN;
