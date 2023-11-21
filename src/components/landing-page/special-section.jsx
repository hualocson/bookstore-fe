import Image from "next/image";
import { useRouter } from "next/router";

import themebook from "@/resources/images/landing/themebook.jpg";
import { Button } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";

import SectionLayout from "@/components/landing-page/section-layout";

const items = [
  {
    id: 1,
    name: "The Women Kingdom",
    desc: "The Women Kingdom",
  },
  {
    id: 2,
    name: "The Women Kingdom",
    desc: "The Women Kingdom",
  },

  {
    id: 3,
    name: "The Women Kingdom",
    desc: "The Women Kingdom",
  },
];
const ProductSpecialSection = () => {
  const router = useRouter();
  return (
    <SectionLayout className="grid h-auto min-h-fit grid-cols-12 gap-8 text-light">
      <div className="col-span-2 justify-self-end">
        <div className="mb-8 truncate text-3xl font-bold text-primary">
          Latest News
        </div>
        <div className="flex flex-col items-end gap-5 text-lg">
          <p className="rounded-md border-r border-primary-500 bg-gradient-to-l from-primary-400 to-primary-200 p-2 text-grayscale">
            Work Books
          </p>
          <p>Kid Books</p>
          <p>Graphic Design</p>
          <p>Photography</p>
          <p>Travel & tour</p>
          <p>Heath & beauty</p>
        </div>
      </div>
      <div className="col-span-10">
        <div className="grid grid-cols-3 place-items-center">
          {items.map((c) => (
            <div
              key={c.id}
              className="flex h-full flex-col items-start justify-between gap-4"
            >
              <span className="relative h-auto w-full">
                <Image
                  src={themebook}
                  alt={"themebook"}
                  width={"100%"}
                  priority
                  className="rounded-lg object-contain"
                />
              </span>
              <div className="flex flex-col  gap-2">
                <p className="text-left text-xl font-bold text-primary-500">
                  {c.name}
                </p>
                <p className="text-left text-grayscale-300">{c.desc}</p>
                <div>
                  <Button
                    variant="light"
                    onPress={() => router.push("/products")}
                    className="font-bold text-light"
                    endContent={<ArrowRight size={16} />}
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};

export default ProductSpecialSection;
