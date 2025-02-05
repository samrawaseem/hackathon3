import Category from "@/components/Category";
import HomeGallery from "@/components/HomeGallery";
import HomeHero from "@/components/HomeHero";
import HomeProducts from "@/components/HomeProducts";
import HomeSlider from "@/components/HomeSlider";


export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <HomeHero />
      <Category />
      <HomeProducts />
      <HomeSlider />
      <HomeGallery />
    </div>
  );
}
