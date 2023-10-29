import React from "react";
import datas from "../../data/products.json";
import SectionStyleFour from "../Helpers/SectionStyleFour";
import SectionStyleOneHmFour from "../Helpers/SectionStyleOneHmFour";
import SectionStyleThreeHmFour from "../Helpers/SectionStyleThreeHmFour";
import BrandSection from "../Home/BrandSection";
import ProductsAds from "../Home/ProductsAds";
import LayoutHomeFour from "../Partials/LayoutHomeFour";
import Banner from "./Banner";
import CampaignCountDown from "./CampaignCountDown";

function Index() {
  const { products } = datas;
  return (
    <LayoutHomeFour>
      <Banner className="mb-[60px]" />
      <SectionStyleOneHmFour
        products={products.slice(16, 20)}
        sectionTitle="Trendy Design"
        seeMoreUrl="/all-products"
        className="new-products mb-[60px]"
      />
      <BrandSection className="mb-[60px]" />
      <CampaignCountDown lastDate="2023-10-04 4:00:00" className="mb-[60px]" />
      <SectionStyleOneHmFour
        products={products.slice(20, 24)}
        sectionTitle="Feature Design"
        seeMoreUrl="/all-products"
        className="new-products mb-[60px]"
      />
      <ProductsAds
        ads={[`${process.env.PUBLIC_URL}/assets/images/ads-3.png`]}
        className="products-ads-section mb-[60px]"
      />
      <SectionStyleThreeHmFour
        sectionTitle="New Arrival"
        seeMoreUrl="/all-products"
        products={products.slice(16, 28)}
        className="mb-[60px]"
      />

      <ProductsAds
        sectionHeight="164"
        ads={[`${process.env.PUBLIC_URL}/assets/images/ads-4.png`]}
        className="products-ads-section mb-[60px]"
      />
      <SectionStyleFour
        products={products.slice(16, 28)}
        sectionTitle="Vendas Populares"
        seeMoreUrl="/all-products"
        className="mb-[60px]"
      />
    </LayoutHomeFour>
  );
}

export default Index;
