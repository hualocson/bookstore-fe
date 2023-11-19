import OrderItemsListing from "@/components/settings/order-history/order-items-listing";

const OrderHistoryLayout = () => {
  return (
    <div className="col-span-9 mb-10 flex flex-col gap-3 rounded-lg bg-grayscale-50/20 px-10 py-5 shadow-lg">
      <h2 className="text-xl font-bold">Order history</h2>
      <p>
        Check the status of recent orders, manage returns, and discover similar
        products
      </p>

      <OrderItemsListing />
    </div>
  );
};

export default OrderHistoryLayout;
