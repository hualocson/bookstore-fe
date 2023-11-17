import useCategories from "@/hooks/useCategories";

const CategoriesListing = () => {
  const { data } = useCategories();

  return (
    <div className="flex flex-col gap-6">
      {data.map((category) => {
        return (
          <div key={category.id} className="flex flex-col gap-4">
            <p className="text-lg font-bold">{category.name}</p>
            {category.children.map((child) => (
              <p key={child.id} className="px-2 text-grayscale-400">
                {child.name}
              </p>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default CategoriesListing;
