import Image from "next/image";
import { useRouter } from "next/router";

import { priceFormatter } from "@/lib/utils";
import book from "@/resources/images/landing/cover-book.jpg";
import { Button } from "@nextui-org/react";
import dayjs from "dayjs";
import { CheckCircle } from "lucide-react";

const getItemDate = (deliveryAt, canceledAt, completedAt) => {
  if (deliveryAt) {
    return (
      <div className="flex items-center gap-3">
        <CheckCircle size={20} className="fill-green-300" />
        <span>{`Delivered on ${dayjs(deliveryAt).format(
          "MMMM DD, YYYY"
        )}`}</span>
      </div>
    );
  } else if (canceledAt) {
    return (
      <span>{`Canceled on ${dayjs(canceledAt).format("MMMM DD, YYYY")}`}</span>
    );
  } else if (completedAt) {
    return (
      <span>{`Completed on ${dayjs(completedAt).format(
        "MMMM DD, YYYY"
      )}`}</span>
    );
  }
  return <span className="text-sm text-grayscale-400">{"Processing"}</span>;
};

const OrderItem = ({
  image,
  name,
  slug,
  quantity,
  author,
  price,
  deliveryAt,
  canceledAt,
  completedAt,
}) => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-10">
        <Image
          src={image || book}
          alt="Book Cover"
          width={120}
          height={160}
          className="basis-1/12 rounded-lg object-contain shadow-lg"
        />
        <div className="flex-grow">
          <div className="flex items-center justify-between font-bold">
            <p className="line-clamp-4 max-w-md">{name}</p>
            <p>{priceFormatter(price * quantity || 0)}</p>
          </div>
          <p>{author || "Unknown"}</p>
          <p>{`Qty - ${quantity || 0}`}</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        {getItemDate(deliveryAt, canceledAt, completedAt)}
        <div className="grid grid-cols-2 gap-x-4">
          <Button
            variant="flat"
            color="primary"
            onPress={() => router.push(`/products/${slug}`)}
          >
            View product
          </Button>
          <Button variant="solid" color="primary">
            Buy again
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
