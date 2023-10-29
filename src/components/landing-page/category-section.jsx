import { Button } from "@/components/ui/button";

import SectionLayout from "@/components/landing-page/section-layout";

const categories = [
  {
    id: 1,
    slug: "/fiction",
    name: "new releases",
  },
  {
    id: 2,
    slug: "/non-fiction",
    name: "Best sellers",
  },

  {
    id: 3,
    slug: "/non-fiction",
    name: "Featured",
  },

  {
    id: 4,
    slug: "/non-fiction",
    name: "Award Winners",
  },
];

const CategorySection = () => {
  return (
    <SectionLayout className="mt-6">
      <div className="flex items-end justify-between border-b border-grayscale-300 py-4">
        <h2 className="max-w-sm text-4xl font-bold capitalize">
          {"Let's dive into thoughtful words"}
        </h2>

        <div className="flex gap-4">
          {categories.map((c, index) => (
            <Button
              key={c.id}
              className="capitalize"
              size="lg"
              variant={index !== 0 ? "outline" : "default"}
            >
              {c.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Present image have many book */}
    </SectionLayout>
  );
};

export default CategorySection;
