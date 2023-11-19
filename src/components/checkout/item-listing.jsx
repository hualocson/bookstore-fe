import { useRouter } from "next/router";

import useCart from "@/hooks/useCart";
import { priceFormatter } from "@/lib/utils";
import { Button, Input } from "@nextui-org/react";

import OrderItem from "@/components/checkout/order-item";

const ItemListing = ({ shippingFee }) => {
  const { data } = useCart({ type: "full" });
  const router = useRouter();

  return (
    <div className="absolute inset-y-4 right-4 flex w-[22vw] flex-col justify-between rounded-lg bg-light-200 p-10">
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Items</h2>
          <Button variant="light" onPress={() => router.push("/cart")}>
            Edit cart
          </Button>
        </div>
        <div className=" mt-10 flex flex-col gap-6">
          {data.cartItems.map(
            (item) =>
              item.checked && <OrderItem key={item.productId} {...item} />
          )}
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        <div className="flex w-full">
          <Input
            label="Promo Code"
            aria-label="promo-input"
            labelPlacement="outside-left"
            type="text"
            variant="flat"
            color="secondary"
            placeholder="enter code"
            classNames={{
              base: ["justify-between"],
              input: [
                "bg-transparent",
                "flex-grow",
                "placeholder:text-grayscale-400",
              ],
              inputWrapper: [
                "bg-grayscale-300/80",
                "group-data-[focus=true]:bg-grayscale-200",
                "data-[hover=true]:bg-grayscale-200",
                "!cursor-text",
              ],
            }}
          />
        </div>
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold">Total Cost</p>
          <p className="text-lg font-bold">
            {priceFormatter(data.total + parseInt(shippingFee, 10))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemListing;
