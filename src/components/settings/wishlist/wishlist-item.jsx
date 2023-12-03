import Image from "next/image";

import coverBook from "@/resources/images/landing/cover-book.jpg";
import { Button } from "@nextui-org/react";

const WishlistItem = ({ image, name, author, price }) => {
  return (
    <div
      className={cn(
        "group relative grid grid-cols-12 rounded-lg p-4 transition-all duration-250 hover:bg-grayscale-400/30",
        isChecked && "bg-grayscale-500/30"
      )}
    >
      <div className="col-span-5 grid grid-cols-12 gap-4">
        <div className="relative col-span-5 h-44 translate-x-0 transition-all duration-250 group-hover:translate-x-2">
          <Image
            src={image ?? coverBook}
            alt="Cover Book"
            fill
            className="rounded-md object-cover shadow-lg"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="col-span-7 flex flex-col items-start justify-around">
          <p className="line-clamp-2 font-bold">{name}</p>
          <p className="line-clamp-1 text-sm text-primary-600">
            Classic Books & Novels
          </p>
          <Button variant="light" color="secondary" size="sm">
            Remove
          </Button>
        </div>
      </div>
      <p className="col-span-2 text-center font-bold text-grayscale-700">
        {priceFormatter(price)}
      </p>
    </div>
  );
};

export default WishlistItem;
