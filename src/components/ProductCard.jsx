"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Eye,
  ChevronRightCircleIcon,
  Share2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import seoFriendlySlug from "@/lib/seoFriendlySlug";

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  reviewCount,
  badge,
  description,
  categoryName,
  subCategoryName,
}) {
  const [copied, setCopied] = useState(false);

  const productUrl = `/products/${seoFriendlySlug(categoryName)}/${seoFriendlySlug(
    subCategoryName
  )}/${seoFriendlySlug(name)}`;

  const handleShare = async () => {
    const shareUrl = `${window.location.origin}${productUrl}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: name,
          url: shareUrl,
        });
      } catch (err) {
        console.log("Share cancelled");
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Copy failed");
      }
    }
  };

  return (
    <Card className="group relative w-full max-w-sm overflow-hidden rounded-sm border-0 shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 pt-0">
      
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden bg-gray-100">

        {/* 🔥 Share Button */}
        <button
          onClick={handleShare}
          className="absolute top-3 right-3 z-20 bg-white/80 backdrop-blur-md hover:bg-white shadow-md p-2 rounded-full transition hover:scale-110 active:scale-95"
        >
          <Share2 size={16} />
        </button>

        {/* ✅ Copy Toast */}
        {copied && (
          <div className="absolute top-12 right-3 bg-black text-white text-xs px-3 py-1 rounded shadow z-20">
            Copied!
          </div>
        )}

        {/* Product Image */}
        <Image
          src={image || "/images/placeholder.jpeg"}
          alt={name}
          fill
          sizes="400px"
          className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105 py-5"
        />

        {/* 👁 View Button (Hover) */}
        <div className="absolute right-3 top-14 flex flex-col gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10">
          <Button
            size="icon"
            variant="secondary"
            className="!h-10 !w-10 rounded-full bg-primary cursor-pointer"
            asChild
          >
            <Link href={productUrl}>
              <Eye className="h-5 w-5 text-white" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Content */}
      <CardContent className="pt-0">
        <div className="mb-3">
          <h3 className="line-clamp-1 text-lg font-semibold tracking-tight">
            {name}
          </h3>
          <p className="line-clamp-2 text-sm text-muted-foreground mt-1">
            {description}
          </p>
        </div>

        {/* Read More */}
        <Button className="w-full gap-2" size="sm" asChild>
          <Link href={productUrl}>
            Read More
            <ChevronRightCircleIcon />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
