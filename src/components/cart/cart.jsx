import { useRouter } from "next/router";

import useCart from "@/hooks/useCart";
import { Button } from "@nextui-org/react";

import CartItem from "@/components/cart/cart-item";
import OrderSummary from "@/components/cart/order-summary";

const CartPage = () => {
  const { data, mutate } = useCart({ type: "full" });
  const router = useRouter();
  if (data.length === 0) {
    return (
      <div className="mx-auto grid h-[calc(100vh-140px)] max-w-lg">
        <div className="flex w-full flex-col items-center gap-4">
          <span className="h-72 w-72">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-grayscale-600"
            >
              <g id="cart-delete">
                <path d="M8,17a2,2,0,1,0,2,2A2.002,2.002,0,0,0,8,17Zm0,3a1,1,0,1,1,1-1A1.0013,1.0013,0,0,1,8,20Z" />
                <path d="M18,17a2,2,0,1,0,2,2A2.002,2.002,0,0,0,18,17Zm0,3a1,1,0,1,1,1-1A1.0013,1.0013,0,0,1,18,20Z" />
                <path d="M14.353,10.646a.5.5,0,1,1-.707.707L12.5,10.207l-1.147,1.147a.5.5,0,0,1-.707-.707L11.793,9.5,10.6465,8.3535a.5.5,0,0,1,.707-.707L12.5,8.793l1.1465-1.1465a.5.5,0,0,1,.707.707L13.207,9.5Z" />
                <path d="M21.7505,7.7759l-.5557,5A2.4979,2.4979,0,0,1,18.71,15H8.5A2.503,2.503,0,0,1,6,12.5v-5A1.5017,1.5017,0,0,0,4.5,6h-2a.5.5,0,0,1,0-1h2A2.503,2.503,0,0,1,7,7.5v5A1.5017,1.5017,0,0,0,8.5,14H18.71a1.4986,1.4986,0,0,0,1.4907-1.3345l.5556-5a1.5023,1.5023,0,0,0-.373-1.166A1.482,1.482,0,0,0,19.2656,6H16.5a.5.5,0,0,1,0-1h2.7656a2.5008,2.5008,0,0,1,2.4849,2.7759Z" />
              </g>
            </svg>
          </span>
          <h2 className="text-xl font-bold">Your cart is current empty!</h2>
          <p className="text-center">
            Looks like you hove not added anything to you cart. Go ahead &
            explore top categories.
          </p>
          <Button
            variant="solid"
            color="primary"
            onPress={() => router.push("/products")}
          >
            Goto Shop
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto grid min-h-[calc(100vh-140px)] max-w-screen-xl grid-cols-12 place-items-start py-6">
      <div className="col-span-8 w-full px-8">
        <div className="flex justify-between border-b-2 border-grayscale-400/30 py-4 text-xl">
          <p className="font-bold">Shopping Cart</p>
          <p className="font-bold">{`${data.length} Items`}</p>
        </div>
        <div className="grid grid-cols-12 gap-4 py-4 text-sm">
          <div className="col-span-5 text-gray-500">Product Details</div>
          <div className="col-span-3 text-center text-gray-500">Quantity</div>
          <div className="col-span-2 text-center text-gray-500">Price</div>
          <div className="col-span-2 text-end text-gray-500">Total</div>
        </div>
        <div className="flex flex-col gap-y-2">
          {data.cartItems.map((item) => (
            <CartItem
              key={item.productId}
              productId={item.productId}
              quantity={item.quantity}
              name={item.name}
              image={item.image}
              price={item.price}
              checked={item.checked}
              author={item.author}
              mutate={mutate}
            />
          ))}
        </div>
      </div>
      <OrderSummary />
    </div>
  );
};

export default CartPage;
