import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Category from "./components/Category";
import { filterProductByCategory } from "./products/product";
import AboutUs from "./components/AboutUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Gallery />
      <Category
        title="Most Popular Tours"
        data={filterProductByCategory("mpt")}
        itemsPerPage={3}
      ></Category>
      <Category
        title="Airport Transfers"
        data={filterProductByCategory("at")}
        itemsPerPage={3}
      ></Category>
      <AboutUs />
    </>
  );
}
