import { useRouter } from "next/router";

import { priceFormatter } from "@/lib/utils";
import { Button, Input } from "@nextui-org/react";
import { useSelector } from "react-redux";

import { getCart } from "@/store/features/cart/cart-selector";

const OrderSummary = () => {
  const cart = useSelector(getCart);
  const router = useRouter();
  return (
    <div className="sticky top-[104px] col-span-4 flex w-full flex-col gap-6 rounded-lg bg-grayscale-200 px-8 pb-4">
      <p className="border-b-2 border-grayscale-400/30 py-4 text-xl font-bold">
        Summary
      </p>
      <div className="flex justify-between text-lg font-bold ">
        <p>Subtotal</p>
        <p>{priceFormatter(cart.total)}</p>
      </div>
      <div className="flex justify-between text-lg font-bold ">
        <p>Shipping</p>
        <p>{priceFormatter(0)}</p>
      </div>
      <div className="mt-5 flex w-full">
        <Input
          label="Promo Code"
          aria-label="promo-input"
          labelPlacement="outside-left"
          type="text"
          variant="flat"
          color="secondary"
          fullWidth
          classNames={{
            base: ["justify-between"],
            input: ["bg-transparent", "flex-grow"],
            inputWrapper: [
              "bg-grayscale-300/80",
              "group-data-[focus=true]:bg-grayscale-200",
              "data-[hover=true]:bg-grayscale-200",
              "!cursor-text",
            ],
          }}
        />
      </div>
      <div className="flex items-center justify-between border-t-2 border-grayscale-400 pt-4">
        <p className="text-lg font-bold">Total Cost</p>
        <p className="text-lg font-bold">{priceFormatter(cart.total)}</p>
      </div>
      <Button
        variant="solid"
        color="primary"
        onPress={() => router.push("/checkout")}
      >
       Checkout
      </Button>
    </div>
  );
};

export default OrderSummary;
