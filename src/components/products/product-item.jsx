import { useRouter } from "next/router";

import { Button, Card, CardBody, Image } from "@nextui-org/react";
import { Heart, ShoppingCart } from "lucide-react";

import { getCategoryById } from "@/store/features/categories/categories-selector";
import { useSelector } from "@/store/redux-hook";

const ProductItem = ({ product: { name, image, slug, price, categoryId } }) => {
  const router = useRouter();
  const categories = useSelector(getCategoryById(categoryId));

  return (
    <div onClick={() => router.push(`/products/${slug}`)}>
      <Card
        shadow="lg"
        radius="md"
        className="border-none bg-light-200 outline-none hover:cursor-pointer"
      >
        <CardBody>
          <div className="relative grid grid-cols-12 items-center gap-6">
            <div className="relative col-span-5">
              <Image
                shadow="sm"
                radius="md"
                alt={name}
                width={"100%"}
                className="h-[150px] object-cover"
                src={image}
              />
            </div>
            <div className="col-span-7 grid grid-flow-row auto-rows-[minmax(48px,48px)]">
              <b className="row-span-1 line-clamp-2">{name}</b>
              <p className="self-end text-primary text-sm">{price}</p>
              <div className="flex items-center gap-2">
                {categories.map((category) => (
                  <span
                    key={category.id}
                    className="rounded-md bg-grayscale-600/20 p-1 text-xs text-grayscale-400"
                  >
                    {category.name}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-2 items-center justify-items-center gap-2">
                <Button
                  color="primary"
                  size="sm"
                  className="justify-self-stretch"
                  onPress={() => console.log("pres")}
                >
                  Buy now
                </Button>
                <div className="flex items-center justify-around">
                  <Button
                    isIconOnly
                    color="primary"
                    aria-label="Like"
                    size="sm"
                    variant="light"
                  >
                    <ShoppingCart size={16} />
                  </Button>
                  <Button
                    isIconOnly
                    color="primary"
                    aria-label="Like"
                    size="sm"
                    variant="light"
                  >
                    <Heart size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductItem;
