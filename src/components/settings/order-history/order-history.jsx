import themebook from "@/resources/images/landing/themebook.jpg";
import { Button } from "@nextui-org/react";
import Image from "next/image";
const OrderHistoryLayout = ({ children }) => {
  return (
    <div className="col-span-9 flex flex-col gap-3 rounded-lg bg-grayscale-50/20 px-10 py-5 shadow-lg">
        <div className="w-full min-h-screen">
            <div className="flex mx-20 ">
                <div className="w-1/5 text-lg text-gray-500 uppercase">ID</div>
                <div className="w-2/5 text-lg text-gray-500 uppercase text-center">Info</div>
                <div className="w-1/5 text-lg text-gray-500 uppercase text-center">Price</div>
                <div className="w-1/5 text-lg text-gray-500 uppercase text-center">Status</div>
            </div>
            <div className="flex py-8 mx-20 items-start">
                <div className="w-1/5 h-24 flex items-center">
                    <p className="text-primary-500 font-bold text-lg">1</p>
                </div>
                <div className="w-2/5 h-24 flex items-center justify-around">
                    <Image
                        src={themebook}
                        alt="Cover Book"
                        width={"auto"}
                        height={160}
                        className="object-contain px-4"
                    />
                    <div className="flex flex-col justify-between">
                        <p className="text-lg text-primary-500 text-center">7 Items</p>
                        <Button variant="link" className="font-bold text-gray-800">
                            <span className="mr-4">More Details</span>
                        </Button>
                    </div>
                </div>
                <div className="w-1/5 h-24  flex items-center justify-center">
                    <p className="text-center text-grayscale-700 font-bold">$ 400</p>
                </div>
                <div className="w-1/5 h-24 flex items-center justify-center">
                    <p className="text-center text-grayscale-700 font-bold uppercase">Pending</p>
                </div>
            </div>
            
        </div>
    </div>
  );
  
};

export default OrderHistoryLayout;