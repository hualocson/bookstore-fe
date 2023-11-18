import SectionLayout from "@/components/landing-page/section-layout";
import { Button } from "@nextui-org/react";
const NotFoundSection = () => {
  return (
    <SectionLayout className="flex flex-col items-center mt-16">
      <p className="text-primary-600 text-8xl font-bold uppercase">404</p>
      <p className="text-primary-600 text-6xl font-bold uppercase my-8">Page not found</p>
      <p className="text-primary-600 text-xl font-bold my-4 w-3/4 text-center">The page you are looking for might have been removed had its name changed or temporarily unavailble</p>
      <Button
              className="capitalize mt-4"
              size="lg"
              variant="solid"
              color="primary" >
            Go to HomePage
      </Button>
    </SectionLayout>
  );
};

export default NotFoundSection;