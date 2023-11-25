import themebook from "@/resources/images/landing/themebook.jpg";
import { Button } from "@nextui-org/react";
import Image from "next/image";
const WhistListLayout = () => {
    return (
        <div className="col-span-9 flex flex-col gap-3 rounded-lg bg-grayscale-50/20 px-10 py-5 shadow-lg">
            <div className="w-full min-h-screen">
                <div className="flex mx-20 ">
                    <div className="w-2/5 text-lg text-gray-500 uppercase">Product Info</div>
                    <div className="w-1/5 text-lg text-gray-500 uppercase text-center">Price</div>
                    <div className="w-1/5 text-lg text-gray-500 uppercase text-center">Status</div>
                    <div className="w-1/5 text-lg text-gray-500 uppercase text-center"></div>
                </div>
                <div className="flex py-8 mx-4 items-start">
                    <div className="w-2/5 h-24 items-center flex mt-4">
                        <Image
                            src={themebook}
                            alt="Cover Book"
                            width={"auto"}
                            height={160}
                            className="object-contain mr-2"
                        />
                        <div className="flex flex-col">
                            <p className="text-lg text-primary-500 text-center mx-4">The KingDom Queen</p>
                            <Button variant="link" className="font-bold text-gray-800 mt-4">
                                <span className="">More Details</span>
                            </Button>
                        </div>
                    </div>
                    <div className="w-1/5 h-24  flex items-center justify-center">
                        <p className="text-center text-grayscale-700 font-bold">$ 400</p>
                    </div>
                    
                    <div className="w-1/5 h-24 flex items-center">
                        <p className="text-left text-grayscale-700 font-bold uppercase ml-4">InStock</p>
                    </div>
                    <div className="w-1/5 h-24 flex flex-col">
                        <Button className="font-bold text-gray-800 mt-4" color="primary">
                                <span className="">Add To Cart</span>
                        </Button>
                        <Button variant="link" className="font-bold text-gray-800 mt-4">
                                <span className="">Remove</span>
                        </Button>
                    </div>
                </div>
                
            </div>
        </div>
      );
};

export default WhistListLayout;