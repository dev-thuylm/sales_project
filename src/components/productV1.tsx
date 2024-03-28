import Image from "next/image";

const ProductV1 = () => {
  return (
    <div className=" rounded-lg lg:w-[250px]">
      <div className="relative rounded-lg lg:w-[250px] lg:h-[250px]">
        <Image
          src={"/images/product_1.jpg"}
          alt=""
          width={250}
          height={250}
          className="rounded-lg lg:w-auto lg:h-auto"
        />
        <span
          className="absolute top-0 right-0 px-1 pt-0.5 pb-3 text-xs font-semibold text-white bg-[#FF7800] lg:px-1.5 lg:pt-1 lg:pb-8 lg:text-sm"
          style={{ borderRadius: "0px 8px 0px 100%" }}
        >
          -20%
        </span>
      </div>
      <div className="mt-3">
        <p className=" text-sm text-center font-medium text-[#4d4d4d] lg:text-base">
          Chuối Nam Mỹ
        </p>
        <p className="flex flex-row flex-nowrap items-center justify-center gap-3">
          <span className=" text-base font-bold text-[#ff7800] lg:text-lg">
            120.000₫
          </span>
          {/* <span className="text-sm font-semibold text-[#7f7f7f] line-through">
            150.000₫
          </span> */}
        </p>
      </div>
    </div>
  );
};

export default ProductV1;
