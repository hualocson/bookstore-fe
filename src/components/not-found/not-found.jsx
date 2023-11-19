import { useRouter } from "next/router";

import { Button } from "@nextui-org/react";

import SectionLayout from "@/components/landing-page/section-layout";

const NotFoundSection = () => {
  const router = useRouter();
  return (
    <SectionLayout className="mt-16 flex flex-col items-center">
      <p className="text-8xl font-bold uppercase text-primary-400">404</p>
      <p className="my-8 text-6xl font-bold uppercase text-primary-400">
        Page not found
      </p>
      <p className="my-4 w-3/4 text-center text-xl">
        The page you are looking for might have been removed had its name
        changed or temporarily unavailable
      </p>
      <Button
        className="mt-4 capitalize"
        size="lg"
        variant="solid"
        color="primary"
        onPress={() => router.push("/")}
      >
        Go back home
      </Button>
    </SectionLayout>
  );
};

export default NotFoundSection;
