import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { createOrder } from "@/apis/orders";
import { handleErrorResponse } from "@/lib/utils";
import { Button } from "@nextui-org/react";
import toast from "react-hot-toast";

import ItemListing from "@/components/checkout/item-listing";
import ShippingMethodSection from "@/components/checkout/shipping-method";
import AddressesListing from "@/components/settings/addresses/addresses-listing";

import logo from "@/resources/images/landing/books-logo.svg";

const CheckoutPage = () => {
  const router = useRouter();
  const [checkoutData, setCheckoutData] = useState({
    addressId: 0,
    shippingFee: "0",
  });

  const handleOnCheckout = async () => {
    if (checkoutData.addressId === 0) {
      throw new Error("Please select an address");
    }
    const { error } = await createOrder({
      addressId: checkoutData.addressId,
      shippingFee: checkoutData.shippingFee,
    });
    if (error) {
      const { message } = handleErrorResponse(error);
      throw new Error(message);
    } else {
      router.push("/products");
      return "Order created successfully";
    }
  };
  const notifyCheckout = () => {
    toast.promise(handleOnCheckout(), {
      loading: "Checking out ...",
      success: (message) => <b>{message}</b>,
      error: (error) => <b>{error.message}</b>,
    });
  };

  return (
    <div className="p-10">
      {/* header */}
      <Link href="/">
        <div className="flex items-center gap-4">
          <Image
            src={logo}
            alt="Books Logo"
            width={60}
            height={60}
            className="object-contain"
            priority
          />
          <span className="text-2xl font-semibold">
            Book
            <span className="font-bold text-primary">lands</span>
          </span>
        </div>
      </Link>
      <div className="mt-10 grid h-[calc(100vh-180px)] grid-cols-12">
        <h2 className="col-span-2 text-xl font-semibold">Checkout</h2>
        <div className="col-span-10 flex flex-col gap-4">
          <span className="text-lg font-semibold">
            Where would you like your order sent?
          </span>
          <div className="max-w-screen-lg">
            <AddressesListing
              onSelectAddress={(addressId) =>
                setCheckoutData((prev) => ({
                  ...prev,
                  addressId: addressId,
                }))
              }
            />
          </div>
          <ShippingMethodSection
            selected={checkoutData.shippingFee}
            setSelected={(shippingFee) =>
              setCheckoutData((prev) => ({ ...prev, shippingFee }))
            }
          />

          <div>
            <Button
              className="uppercase"
              variant="shadow"
              color="primary"
              onPress={notifyCheckout}
            >
              Complete purchase
            </Button>
          </div>
        </div>
      </div>
      <ItemListing shippingFee={checkoutData.shippingFee} />
    </div>
  );
};

export default CheckoutPage;
