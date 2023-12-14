import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  createOrder,
  createPayPalCapture,
  createPayPalOrder,
} from "@/apis/orders";
import { handleErrorResponse } from "@/lib/utils";
import { Button } from "@nextui-org/react";
import { ArrowLeft } from "lucide-react";
import toast from "react-hot-toast";

import ItemListing from "@/components/checkout/item-listing";
import PayPalCheckout from "@/components/checkout/paypal-checkout";
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
    const { error, data } = await createOrder({
      addressId: checkoutData.addressId,
      shippingFee: checkoutData.shippingFee,
    });
    if (error) {
      const { message } = handleErrorResponse(error);
      throw new Error(message);
    } else {
      router.push(`/checkout/complete?id=${data.id}`, "/checkout/complete");
      return "Order created successfully";
    }
  };

  const addressRef = useRef({
    addressId: 0,
    shippingFee: "0",
  });
  useEffect(() => {
    addressRef.current = {
      addressId: checkoutData.addressId,
      shippingFee: checkoutData.shippingFee,
    };
  }, [checkoutData.addressId, checkoutData.shippingFee]);

  const handleCreatePalPalOrder = async () => {
    if (addressRef.current.addressId === 0) {
      toast.error("Please select an address");
    } else {
      try {
        const response = await createPayPalOrder({
          shippingFee: addressRef.current.shippingFee,
        });

        if (response.data.id) {
          return response.data.id;
        } else {
          const errorDetail = response.data?.details?.[0];
          const errorMessage = errorDetail
            ? `${errorDetail.issue} ${errorDetail.description} (${response.data.debug_id})`
            : JSON.stringify(response.data);

          throw new Error(errorMessage);
        }
      } catch (error) {
        toast.error("Could not initiate PayPal Checkout...");
      }
    }
  };

  const handleCaptureOrder = async (data, actions) => {
    try {
      const response = await createPayPalCapture({
        orderId: data.orderID,
      });

      const orderData = response.data;
      // Three cases to handle:
      //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
      //   (2) Other non-recoverable errors -> Show a failure message
      //   (3) Successful transaction -> Show confirmation or thank you message

      const errorDetail = orderData?.details?.[0];

      if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
        // (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
        // recoverable state, per https://developer.paypal.com/docs/checkout/standard/customize/handle-funding-failures/
        return actions.restart();
      } else if (errorDetail) {
        // (2) Other non-recoverable errors -> Show a failure message
        throw new Error(`${errorDetail.description} (${orderData.debug_id})`);
      } else {
        // (3) Successful transaction -> Show confirmation or thank you message
        // Or go to another URL:  actions.redirect('thank_you.html');
        const { error, data } = await createOrder({
          addressId: addressRef.current.addressId,
          shippingFee: addressRef.current.shippingFee,
        });
        if (error) {
          const { message } = handleErrorResponse(error);
          throw new Error(message);
        } else {
          router.push(`/checkout/complete?id=${data.id}`, "/checkout/complete");
          toast.success("Order created successfully");
        }
      }
    } catch (error) {
      toast.error("Sorry, your transaction could not be processed...");
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
            Books
            <span className="font-bold text-primary">land</span>
          </span>
        </div>
      </Link>
      <div className="mt-10 grid h-[calc(100vh-180px)] grid-cols-12 place-items-start">
        <div className="col-span-2 flex items-center gap-6">
          <Button
            size="sm"
            startContent={<ArrowLeft size={16} />}
            onPress={() => router.back()}
            variant="flat"
            color="primary"
            radius="full"
            isIconOnly
          />
          <h2 className="text-xl font-semibold">Checkout</h2>
        </div>
        <div className="col-span-10 flex flex-col gap-4">
          <span className="text-lg font-semibold">
            Where would you like your order sent?
          </span>
          <div className="max-w-screen-lg">
            <AddressesListing
              onSelectAddress={(addressId) => {
                setCheckoutData((prev) => ({
                  ...prev,
                  addressId: addressId,
                }));
              }}
            />
          </div>
          <ShippingMethodSection
            selected={checkoutData.shippingFee}
            setSelected={(shippingFee) =>
              setCheckoutData((prev) => ({ ...prev, shippingFee }))
            }
          />

          <div className="flex gap-x-4 items-center">
          <h2>Choose payment method:</h2>
            <Button
              className="uppercase"
              variant="shadow"
              color="primary"
              onPress={notifyCheckout}
            >
              Cash on delivery
            </Button>
            <PayPalCheckout
              onCreateOrder={handleCreatePalPalOrder}
              onCaptureOrder={handleCaptureOrder}
            />
          </div>
        </div>
      </div>
      <ItemListing shippingFee={checkoutData.shippingFee} />
    </div>
  );
};

export default CheckoutPage;
