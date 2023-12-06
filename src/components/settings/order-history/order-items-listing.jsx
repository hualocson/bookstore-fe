import OrderStatus from "@/lib/constants/order-status";
import { getLastCharacters, hashText, priceFormatter } from "@/lib/utils";
import { Accordion, AccordionItem } from "@nextui-org/react";
import dayjs from "dayjs";

import OrderItem from "@/components/settings/order-history/order-item";

const getOrderStatus = (status) => {
  switch (status) {
    case OrderStatus.PENDING:
      return (
        <span className="rounded-lg bg-grayscale-500/30 p-2 text-sm text-grayscale-500">
          Pending
        </span>
      );
    case OrderStatus.PROCESSED:
      return (
        <span className="rounded-lg bg-blue-400/30 p-2 text-sm text-blue-500">
          Delivering
        </span>
      );
    case OrderStatus.DELIVERED:
      return (
        <span className="rounded-lg bg-green-300/30 p-2 text-sm text-green-600">
          Delivered
        </span>
      );
    case OrderStatus.CANCELED:
      return (
        <span className="rounded-lg bg-primary-600/30 p-2 text-sm text-primary-600">
          Cancelled
        </span>
      );
    default:
      return (
        <span className="rounded-lg bg-primary-400/30 p-2 text-sm text-primary-500">
          Unknown
        </span>
      );
  }
};

const OrderItemsListing = ({ data, orderId = "" }) => {
  return (
    <Accordion hideIndicator>
      {data.orders
        .filter((item) =>
          orderId !== "" ? hashText(String(item.id)).includes(orderId) : true
        )
        .map((order) => (
          <AccordionItem
            key={order.id}
            textValue={order.id}
            title={
              <div className="flex items-center justify-between rounded-lg bg-grayscale-400/30 p-4">
                <div className="grid grid-cols-3 gap-8">
                  <div className="flex flex-col gap-2">
                    <span className="font-bold">Order Id</span>
                    <span>{getLastCharacters(hashText(String(order.id)))}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-bold">Date placed</span>
                    <span>{dayjs(order.createdAt).format("MMM DD, YYYY")}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-bold">Total amount</span>
                    <span>{priceFormatter(order.total)}</span>
                  </div>
                </div>
                <span>{getOrderStatus(order.status)}</span>
              </div>
            }
          >
            <div className="flex flex-col gap-6 p-4">
              {data.orderItems[order.id].map((item) => (
                <OrderItem key={item.id} {...item} />
              ))}
            </div>
          </AccordionItem>
        ))}
    </Accordion>
  );
};

export default OrderItemsListing;
