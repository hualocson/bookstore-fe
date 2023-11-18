import { priceFormatter } from "@/lib/utils";

const OrderItem = ({ name, author, quantity, price }) => {
  return (
    <div className="flex items-start justify-between">
      <div className="flex w-2/3 flex-col gap-y-2">
        <p className="line-clamp-2 font-semibold">{name}</p>
        <p className="line-clamp-1 text-sm text-grayscale-500">{author}</p>
      </div>
      <p>{`${quantity}x`}</p>
      <p>{priceFormatter(price)}</p>
    </div>
  );
};

export default OrderItem;
