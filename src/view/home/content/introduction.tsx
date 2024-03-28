import Image from "next/image";

const IntroductionFN = () => {
  return (
    <div className="mb-8 flex flex-col flex-nowrap gap-7 lg:mb-28 lg:flex-row lg:justify-center">
      <Image
        src={"/images/banner_intro.jpg"}
        alt=""
        width={476}
        height={582}
        className="w-full lg:w-auto px-3 object-cover lg:px-0"
      />
      <div className="relative lg:w-[520px] text-[#656565] order-first lg:order-none">
        <p className="mb-2 text-lg text-center text-black lg:mb-10 lg:text-4xl">
          Chúng tôi cung cấp
        </p>
        <p className="mb-3 uppercase text-xl font-semibold text-center text-[#339538] lg:mb-12 lg:text-4xl">
          Các sản phẩm nông sản tươi - sạch
        </p>
        <p className="px-2 leading-loose text-center lg:p-0 lg:text-start">
          Cửa hàng <strong className="text-[#339538]">Nông sản sạch</strong> là
          một website cung cấp thực phẩm an toàn, nông sản sạch cho người dân.
          Với mong muốn mang tới mọi gia đình những thực phẩm an toàn nhất trước
          mối lo ngại về thực phẩm bẩn tại Việt Nam.
        </p>
        <p className="px-2 mt-2 text-center lg:mt-2.5">
          Với mục đích là{" "}
          <strong>&ldquo;Mang thiên nhiên về với căn nhà của bạn&rdquo;</strong>
        </p>
        <div className="hidden absolute mt-24 -left-24 lg:flex flex-row flex-nowrap">
          <Image
            src={"/images/img_intro_1.jpg"}
            alt=""
            width={187}
            height={173}
            className=" border-[10px] border-white rounded-xl"
          />
          <Image
            src={"/images/img_intro_1.jpg"}
            alt=""
            width={187}
            height={173}
            className=" border-[10px] border-white rounded-xl"
          />
          <Image
            src={"/images/img_intro_1.jpg"}
            alt=""
            width={187}
            height={173}
            className=" border-[10px] border-white rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default IntroductionFN;
