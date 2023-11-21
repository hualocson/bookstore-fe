import { Button, Input } from "@nextui-org/react";
import { Facebook, Instagram } from "lucide-react";

import SectionLayout from "@/components/landing-page/section-layout";

const FeedbackSection = () => {
  return (
    <SectionLayout className="flex h-auto flex-col items-center justify-start py-20">
      <div className="flex w-full flex-col items-center justify-center rounded-lg bg-grayscale py-10 text-light">
        <div className="w-[780px] grow flex-col">
          <p className="text-center text-5xl font-bold text-primary">
            Weekly digest
          </p>
          <p className="my-4 text-center text-3xl font-bold">
            Latest new of books
          </p>
          <div className="mt-4 flex items-center justify-between gap-4">
            <Input color="primary" labelPlacement="outside" />
            <Button size="lg" color="primary">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-16 flex w-1/2 flex-col">
        <p className="my-8 text-center text-5xl font-bold text-primary">
          {"What's your idea?"}
        </p>
        <p className="my-4 text-center text-3xl font-bold text-grayscale">
          Let chat and see hou we can help
        </p>

        <div className="mt-4 flex items-center justify-around">
          <div className="box-content flex h-16 w-56 items-center justify-start rounded-lg bg-primary-400 p-4">
            <Facebook className="mr-4 h-10 w-10"></Facebook>
            <div className="flex flex-col items-start">
              <p className="text-lg font-bold text-grayscale-950">Facebook</p>
              <p className="text-base font-bold text-grayscale-600">
                @bookland_team
              </p>
            </div>
          </div>
          <div className="box-content flex h-16 w-56 items-center justify-start rounded-lg bg-primary-300 p-4">
            <Instagram className="mr-4 h-10 w-10"></Instagram>
            <div className="flex flex-col items-start">
              <p className="text-lg font-bold text-grayscale-950">Instagram</p>
              <p className="text-base font-bold text-grayscale-600">
                @bookland_team
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default FeedbackSection;
