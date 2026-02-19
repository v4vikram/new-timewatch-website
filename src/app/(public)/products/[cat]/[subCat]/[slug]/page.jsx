export const dynamic = "force-dynamic";

import ProductDetails from "@/components/ProductDetails";
import axiosInstance from "@/lib/axiosInstance";
import { notFound } from "next/navigation";

const BASE_URL = "https://www.timewatchindia.com";

// Generate metadata dynamically
export async function generateMetadata({ params }) {
  const { cat, subCat, slug } = params;

  try {
    const res = await axiosInstance.get(`/product/slug/${slug}`);
    const product = res?.data?.product;

    if (!product || product?.status === "draft") {
      return {};
    }

    console.log(`${BASE_URL}/products/${cat}/${subCat}/${slug}`)

    return {
      title: `${product.productName} | TimeWatch Infocom`,
      description:
        product.description || product.shortDesc || product.productName,
      alternates: {
        canonical: `${BASE_URL}/products/${cat}/${subCat}/${slug}`,
      },
      openGraph: {
        title: product.productName,
        description: product.description || product.shortDesc,
        url: `${BASE_URL}/products/${cat}/${subCat}/${slug}`,
        images: product.productImage,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error.message);
    return {};
  }
}

// Product details page
export default async function ProductDetailsPage({ params }) {
  const { slug } = params;

  let product = null;

  try {
    const res = await axiosInstance.get(`/product/slug/${slug}`, {
      next: { revalidate: 1 },
    });
    product = res?.data?.product;
  } catch (err) {
    return notFound();
  }

  if (!product || product?.status === "draft") {
    return notFound();
  }

  return <ProductDetails product={product} />;
}
