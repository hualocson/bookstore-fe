import { useState } from "react";

import { useRouter } from "next/router";

import { useOrdersHistory } from "@/hooks";
import { Button, Input } from "@nextui-org/react";
import { Search } from "lucide-react";

import OrderItemsListing from "@/components/settings/order-history/order-items-listing";

const OrderHistoryLayout = () => {
  const [searchId, setSearchId] = useState("");
  const { data } = useOrdersHistory();
  const router = useRouter();

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
      {data?.orders.length > 0 ? (
        <>
          <p>
            Check the status of recent orders, manage returns, and discover
            similar products
          </p>
          <OrderItemsListing data={data} orderId={searchId} />
        </>
      ) : (
        <div className="flex flex-col gap-2 p-5">
          <p>{"You don't have any orders yet."}</p>
          <div>
            <Button color="primary" onPress={() => router.push("/products")}>
              Shopping now
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderHistoryLayout;
