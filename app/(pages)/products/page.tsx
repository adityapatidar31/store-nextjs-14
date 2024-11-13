import ProductsContainer from "@/app/_components/products/ProductsContainer";

type PropType = {
  searchParams: { layout?: string; search?: string };
};

function ProductsPage({ searchParams }: PropType) {
  const layout = searchParams.layout || "grid";
  const search = searchParams.search || "";
  return <ProductsContainer layout={layout} search={search} />;
}
export default ProductsPage;
