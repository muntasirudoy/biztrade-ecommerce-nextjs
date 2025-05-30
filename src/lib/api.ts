import { REVALIDATE } from "@/constrant/products-const";

export async function getProducts() {
  const res = await fetch("https://dummyjson.com/products", {
    next: { revalidate: REVALIDATE },
  });
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}
export async function getProductDetailsById(id: number) {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: REVALIDATE },
  });
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}
export async function getProductsByCategory(name: string) {
  const res = await fetch(`https://dummyjson.com/products/category/${name}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}

export async function getCategorys() {
  const res = await fetch(`https://dummyjson.com/products/categories`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}
