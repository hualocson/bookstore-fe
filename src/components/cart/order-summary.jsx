import { priceFormatter } from "@/lib/utils";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { useSelector } from "react-redux";

import { getCart } from "@/store/features/cart/cart-selector";

const shipMethods = [
  {
    id: 1,
    name: "Standard Delivery",
  },
];
const OrderSummary = () => {
  const cart = useSelector(getCart);
  return (
    <div className="col-span-4 flex w-full flex-col gap-6 rounded-lg bg-grayscale-200 px-8 pb-4">
      <p className="border-b-2 border-grayscale-400/30 py-4 text-xl font-bold">
        Order Summary
      </p>
      <div className="flex justify-between text-lg font-bold ">
        <p className="uppercase">{`Items ${cart.length}`}</p>
        <p>{priceFormatter(cart.total)}</p>
      </div>
      <div className="flex flex-col gap-4">
        <Select
          placeholder="Shipping"
          aria-label="shipping-select"
          items={shipMethods}
          size="sm"
        >
          {(method) => (
            <SelectItem
              key={method.name}
              textValue={method.name}
              aria-label={method.name}
            >
              {method.name}
            </SelectItem>
          )}
        </Select>
        <Input
          label="Promo Code"
          aria-label="promo-input"
          type="text"
          size="sm"
        />
        <Button variant="ghost" color="primary">
          <span className="text-left">Apply</span>
        </Button>
      </div>
      <div className="flex items-center justify-between border-t-2 border-grayscale-400 pt-4">
        <p className="text-lg font-bold">Total Cost</p>
        <p className="text-lg font-bold">{priceFormatter(cart.total)}</p>
      </div>
      <Button variant="solid" color="primary">
        <span className="text-left uppercase">Checkout</span>
      </Button>
    </div>
  );
};

export default OrderSummary;
