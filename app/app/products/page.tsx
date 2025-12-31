"use client";

import { useEffect, useState } from "react";
import { getProducts, type Product } from "@/lib/api";
 codex/build-rtl-first-saas-dashboard-for-ideal-agent-25hvyg
import { LoadingSkeleton } from "@/components/ui/LoadingSkeleton";

import { LoadingSkeleton } from "@/components/shared/LoadingSkeleton";
 main
import { Search } from "lucide-react";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
 codex/build-rtl-first-saas-dashboard-for-ideal-agent-25hvyg
          <p className="text-sm text-textSecondary">المنتجات المتزامنة</p>
          <h1 className="text-2xl font-bold text-textPrimary">المنتجات</h1>
        </div>
        <div className="relative w-64">
          <input className="w-full input" placeholder="بحث / تصنيف" />
          <Search className="w-4 h-4 text-textSecondary absolute left-3 top-3" />

          <p className="text-sm text-slate-500">المنتجات المتزامنة</p>
          <h1 className="text-2xl font-bold">المنتجات</h1>
        </div>
        <div className="relative w-64">
          <input className="w-full" placeholder="بحث / تصنيف" />
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
 main
        </div>
      </div>
      {loading ? (
        <LoadingSkeleton rows={6} />
      ) : (
        <div className="grid md:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="card p-4 space-y-2">
              <p className="font-semibold">{product.name}</p>
 codex/build-rtl-first-saas-dashboard-for-ideal-agent-25hvyg
              <p className="text-sm text-textSecondary">{product.category}</p>
              <p className="font-bold">{product.price} ر.س</p>
              <p className="text-sm text-textSecondary">المخزون: {product.stock}</p>

              <p className="text-sm text-slate-500">{product.category}</p>
              <p className="font-bold">{product.price} ر.س</p>
              <p className="text-sm text-slate-500">المخزون: {product.stock}</p>
 main
              <button className="btn-secondary w-full">رابط وووكميرس</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
