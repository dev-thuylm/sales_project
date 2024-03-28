import IntroductionFN from "./introduction";
import ProductsFN from "./products";
import SalesFN from "./sales";

const ContentFN = () => {
  return (
    <div className="mt-2 lg:mt-28">
      <IntroductionFN />
      <ProductsFN
        title="Trái cây nội địa"
        info="Là nhà cung cấp thực phẩm tươi sạch hàng đầu khu vực miền trung"
      />
      <SalesFN />
      <ProductsFN
        title="Trái cây nhập khẩu"
        info="Là nhà cung cấp thực phẩm tươi sạch hàng đầu khu vực miền trung"
      />
    </div>
  );
};

export default ContentFN;
