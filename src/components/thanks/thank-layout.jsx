import SectionLayout from "@/components/landing-page/section-layout";
import { Button } from "@nextui-org/react";
const Thanksection = () => {
  return (
    <SectionLayout className="flex flex-col items-center mt-16">
      <p className="text-primary-600 text-6xl font-bold uppercase my-8">Thank You.</p>
      <p className="text-primary-600 text-4xl font-bold my-4 w-3/4 text-center">Your order was completed successfully!</p>
      <p className="text-primary-600 text-xl font-bold my-4 w-3/4 text-center">You can visit the My Account page at any time to check the status of your orders</p>
      <Button
              className="capitalize mt-4"
              size="lg"
              variant="solid"
              color="primary" >
            Continute Shopping
      </Button>
    </SectionLayout>
  );
};

export default Thanksection;