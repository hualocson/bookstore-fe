import { useState } from "react";

import { Input } from "@nextui-org/react";
import { Search } from "lucide-react";

import OrderItemsListing from "@/components/settings/order-history/order-items-listing";

const OrderHistoryLayout = () => {
  const [searchId, setSearchId] = useState("");
  return (
    <div className="col-span-9 mb-10 flex flex-col gap-3 rounded-lg bg-grayscale-50/20 px-10 py-5 shadow-lg">
      <div className="flex items-center justify-between">
        <h2 className="basis-2/3 text-xl font-bold">Order history</h2>

        <Input
          value={searchId}
          onValueChange={setSearchId}
          labelPlacement="outside"
          placeholder="Enter order id"
          startContent={<Search size={20} />}
        />
      </div>

      <p>
        Check the status of recent orders, manage returns, and discover similar
        products
      </p>
      <OrderItemsListing orderId={searchId} />
    </div>
  );
};

export default OrderHistoryLayout;
