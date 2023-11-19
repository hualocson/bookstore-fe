import { useRouter } from "next/router";

import { hashText } from "@/lib/utils";
import { Button, Input } from "@nextui-org/react";
import { CheckCircle, Copy } from "lucide-react";

import MainLayout from "@/components/layout/main-layout";

import SectionLayout from "@/components/landing-page/section-layout";

const CheckoutCompletePage = () => {
  const router = useRouter();
  return (
    <MainLayout>
      <SectionLayout className="mt-16 flex flex-col items-center">
        <CheckCircle size={80} className="fill-green-300" />
        <p className="my-8 text-6xl font-bold">Thank you for your order!</p>
        <p className="my-4 w-3/4 text-center text-4xl font-bold ">
          Your order was completed successfully!
        </p>
        <p className="my-4 w-3/4 text-center text-xl font-bold ">
          You can visit the My Account page at any time to check the status of
          your orders
        </p>
        <Input
          isReadOnly
          value={hashText("2")}
          className="max-w-lg text-grayscale-400"
          endContent={
            <Button
              onPress={() => {
                navigator.clipboard.writeText(hashText("2"));
              }}
              isIconOnly
              startContent={<Copy size={14} />}
            />
          }
          startContent={
            <span className="whitespace-nowrap text-sm">Order ID</span>
          }
        />

        <Button
          className="mt-4 capitalize"
          size="lg"
          variant="solid"
          color="primary"
          onPress={() => router.push("/products")}
        >
          Continue Shopping
        </Button>
      </SectionLayout>
    </MainLayout>
  );
};
export default CheckoutCompletePage;
