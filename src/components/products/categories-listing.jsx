import Link from "next/link";
import { useRouter } from "next/router";

import useCategories from "@/hooks/useCategories";
import { cn } from "@/lib/utils";

const CategoriesListing = () => {
  const { data } = useCategories();

  const router = useRouter();

  return (
    <div className="flex flex-col gap-6">
      {data.map((category) => {
        return (
          <div key={category.id} className="flex flex-col gap-2">
            <Link
              href={{
                pathname: "/products/categories/[slug]",
                query: { slug: category.slug },
              }}
              className="text-lg font-bold"
            >
              {category.name}
            </Link>
            {category.children.map((child) => (
              <Link
                href={{
                  pathname: "/products/categories/[slug]",
                  query: { slug: child.slug },
                }}
                key={child.id}
                className={cn(
                  "px-2 text-grayscale-400",
                  router.query.slug === child.slug && "text-primary"
                )}
              >
                {child.name}
              </Link>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default CategoriesListing;
