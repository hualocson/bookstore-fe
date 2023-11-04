import SectionLayout from "@/components/landing-page/section-layout";
import { Button } from "@/components/ui/button";
import themebook from "@/resources/images/landing/themebook.jpg";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
const items = [
    {
      id: 1,
      name: "The Women Kingdom",
      desc : "The Women Kingdom",
    },
    {
      id: 2,
      name: "The Women Kingdom",
      desc : "The Women Kingdom",
    },
  
    {
      id: 3,
      name: "The Women Kingdom",
      desc : "The Women Kingdom",
    },
  ];
const ProductSpecialSection = () => {
    return (
      <SectionLayout className="flex justify-between items-start">
        <div className ="w-1/4">
            <div className="text-4xl bold text-primary-600 my-8 ml-12">Latest News</div>
            <div className="flex flex-col justify-center items-end w-3/4">
                <div className="text-lg bold text-grayscale my-4">Work Books</div>
                <div className="text-lg bold text-grayscale my-4">Kid Books</div>
                <div className="text-lg bold text-grayscale my-4">Graphic Design</div>
                <div className="text-lg bold text-grayscale my-4">Photography</div>
                <div className="text-lg bold text-grayscale my-4">Travel & tour</div>
                <div className="text-lg bold text-grayscale my-4">Heath & beauty</div>
            </div>
        </div>
        <div className="w-3/4">
            <div className="flex justify-around items-start  gap-12">
                {items.map((c, index) => (
                    <div key={c.id} className="h-full mt-10">
                        <Image
                            src={themebook}
                            alt={1}
                            width = {"auto"}
                            className="object-contain rounded-lg"
                        />
                        <p className="text-xl font-bold text-primary-500 text-left my-2 line-clamp-2 h-full">{c.name}</p>
                        <p className=" text-grayscale-400 text-left my-2 line-clamp-3 h-full">{c.desc}</p>
                        <Button variant = "link" className="text-gray-800 font-bold"><span className="mr-4">Read More</span> {<ArrowRight size={16}/>} </Button>
                    </div>
                ))}
            </div>
        </div>
      </SectionLayout>
    );
  };
  
export default ProductSpecialSection;