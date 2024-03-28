import ProductV1 from "@/components/productV1";
import SalesFN from "./sales";
import Link from "next/link";

interface Props {
  title: string;
  info: string;
}

const ProductsFN = (props: Props) => {
  const { title, info } = props;
  return (
    <div className="py-5 bg-[#F2F2F2] lg:py-12">
      <p className="mb-1 text-xl font-medium uppercase text-center lg:mb-3 lg:text-4xl">
        {title}
      </p>
      <p className="text-sm text-center lg:text-base">{info}</p>
      {/* Bộ lọc */}
      {/* <div className="flex flex-row flex-nowrap justify-center items-center gap-4">
        <button className="px-4 py-2.5 border-2 border-[#339538] rounded-3xl text-white bg-[#339538]">
          <span className="font-medium">Tất cả</span>
        </button>
        <button className="px-4 py-2.5 border-2 border-[#339538] rounded-3xl">
          <span className="font-medium">Củ quả các loại</span>
        </button>
        <button className="px-4 py-2.5 border-2 border-[#339538] rounded-3xl">
          <span className="font-medium">Rau các loại</span>
        </button>
      </div> */}
      {/* Danh sách sản phẩm */}
      <div className="px-1 mt-5 mb-4 lg:mt-11 lg:mb-8 lg:px-56">
        <div className=" grid grid-cols-2 justify-items-center gap-x-1.5 gap-y-2 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-10">
          <ProductV1 />
          <ProductV1 />
          <ProductV1 />
          <ProductV1 />
          <ProductV1 />
          <ProductV1 />
          <ProductV1 />
          <ProductV1 />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <Link
          href={"#"}
          className="px-1.5 border-2 border-[#339538] rounded-3xl lg:px-2.5 lg:py-1"
        >
          <span className=" text-[13px] text-center font-medium lg:text-sm">Xem thêm</span>
        </Link>
      </div>
    </div>
  );
};

export default ProductsFN;
