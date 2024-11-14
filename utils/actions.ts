import db from "@/utils/db";
import { redirect } from "next/navigation";

export async function fetchFeaturedProducts() {
  const products = await db.product.findMany({
    where: {
      featured: true,
    },
  });
  return products;
}

export async function fetchAllProducts() {
  const products = await db.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return products;
}

export async function fetchSingleProduct(productId: string) {
  const singleProduct = await db.product.findUnique({
    where: {
      id: productId,
    },
  });
  if (!singleProduct) redirect("/products");
  return singleProduct;
}
