import Image from "next/image";

const SalesFN = () => {
  return (
    <div className="py-3 flex flex-col flex-nowrap justify-center items-center gap-3 bg-white lg:py-12 lg:flex-row lg:gap-5">
      <Image
        src={"/images/banner_1.jpg"}
        alt=""
        width={250}
        height={387}
        className=" hidden lg:block"
      />

      <Image
        src={"/images/banner_2.jpg"}
        alt=""
        width={520}
        height={387}
        className="px-3"
      />

      <Image
        src={"/images/banner_3.jpg"}
        alt=""
        width={250}
        height={387}
        className=" hidden lg:block"
      />
    </div>
  );
};

export default SalesFN;
