import Header from "../components/layout/Header/Header";
import { NeedHelp } from "../components/sections/NeedHelp/NeedHelp";
import { FAQ } from "../components/sections/FAQ/FAQ";
import { FeaturedCollection } from "../components/sections/FeaturedCollection/FeaturedCollection";
import { Hero } from "../components/sections/Hero/Hero";
import ProductSpotlight from "../components/sections/ProductSpotlight/ProductSpotlight";
import { Footer } from "../components/layout/Footer/Footer";
import { PopupBanner } from "../components/layout/PopupBanner/ PopupBanner";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedCollection />
      <FAQ />
      <ProductSpotlight />
      <NeedHelp />
      <Footer />
      <PopupBanner />
    </>
  );
}
