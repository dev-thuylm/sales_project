import ContentFN from "./content";
import FooterFN from "./footer";
import HeaderFN from "./header";
import NavigationFN from "./navigation";

const HomePage = () => {
  return (
    <>
      <HeaderFN />
      <NavigationFN />
      <ContentFN />
      <FooterFN />
    </>
  );
};

export default HomePage;
