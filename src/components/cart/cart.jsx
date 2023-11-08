import { Button } from "@/components/ui/button";
import coverBook from "@/resources/images/landing/cover-book.jpg";
import { Input, Select, SelectItem } from "@nextui-org/react";
import Image from "next/image";
const shipMethods = [
    {
      id: 1,
      name: "Standard Delivery",
    },

];
const CartPageLayout = ({ children }) => {
  return (
    <div className="max-w-screen-xl mx-auto h-auto flex m-16">
        <div className="w-3/4 min-h-screen bg-grayscale-50">
            <div className="flex justify-between py-8 border-b-2 border-grayscale-400 mx-20">
                <p className="text-2xl font-bold">Shopping Cart</p>
                <p className="text-2xl font-bold">3 Items</p>
            </div>
            <div className="flex py-8 mx-20">
                <div className="w-2/5 text-lg text-gray-500 uppercase">Product Details</div>
                <div className="w-1/5 text-lg text-gray-500 uppercase text-center">Quantity</div>
                <div className="w-1/5 text-lg text-gray-500 uppercase text-center">Price</div>
                <div className="w-1/5 text-lg text-gray-500 uppercase text-center">Total</div>
            </div>
            <div className="flex py-8 mx-20 items-start">
                <div className="w-2/5 h-40 flex">
                    <Image
                        src={coverBook}
                        alt="Cover Book"
                        width={"auto"}
                        height={160}
                        className="object-contain"
                    />
                    <div className="ml-4 flex flex-col justify-around w-1/2">
                        <p className="text-base line-clamp-2">Down and Out in Paris and London</p>
                        <p className="text-primary-600 text-sm line-clamp-1">Classic Books & Novels</p>
                        <Button variant="outline" className="">
                            <span className="text-left">Remove</span>
                        </Button>
                    </div>
                </div>
                <div className="w-1/5 h-40 flex items-center justify-around">
                    <div className="text-2xl">-</div>
                    <div className="text-lg border-2 block px-4 py-2 text-center border-grayscale-300">1</div>
                    <div className="text-2xl">+</div>
                </div>
                <div className="w-1/5 h-40  flex items-center justify-center">
                    <p className="text-center text-grayscale-700 font-bold">$ 400</p>
                </div>
                <div className="w-1/5 h-40 flex items-center justify-center">
                    <p className="text-center text-grayscale-700 font-bold">$ 400</p>
                </div>
            </div>
            <div className="flex py-8 mx-20 items-start">
                <div className="w-2/5 h-40 flex">
                    <Image
                        src={coverBook}
                        alt="Cover Book"
                        width={"auto"}
                        height={160}
                        className="object-contain"
                    />
                    <div className="ml-4 flex flex-col justify-around w-1/2">
                        <p className="text-base line-clamp-2">Down and Out in Paris and London</p>
                        <p className="text-primary-600 text-sm line-clamp-1">Classic Books & Novels</p>
                        <Button variant="outline" className="">
                            <span className="text-left">Remove</span>
                        </Button>
                    </div>
                </div>
                <div className="w-1/5 h-40 flex items-center justify-around">
                    <div className="text-2xl">-</div>
                    <div className="text-lg border-2 block px-4 py-2 text-center border-grayscale-300">1</div>
                    <div className="text-2xl">+</div>
                </div>
                <div className="w-1/5 h-40  flex items-center justify-center">
                    <p className="text-center text-grayscale-700 font-bold">$ 400</p>
                </div>
                <div className="w-1/5 h-40 flex items-center justify-center">
                    <p className="text-center text-grayscale-700 font-bold">$ 400</p>
                </div>
            </div>
            <div className="flex py-8 mx-20 items-start">
                <div className="w-2/5 h-40 flex">
                    <Image
                        src={coverBook}
                        alt="Cover Book"
                        width={"auto"}
                        height={160}
                        className="object-contain"
                    />
                    <div className="ml-4 flex flex-col justify-around w-1/2">
                        <p className="text-base line-clamp-2">Down and Out in Paris and London</p>
                        <p className="text-primary-600 text-sm line-clamp-1">Classic Books & Novels</p>
                        <Button variant="outline" className="">
                            <span className="text-left">Remove</span>
                        </Button>
                    </div>
                </div>
                <div className="w-1/5 h-40 flex items-center justify-around">
                    <div className="text-2xl">-</div>
                    <div className="text-lg border-2 block px-4 py-2 text-center border-grayscale-300">1</div>
                    <div className="text-2xl">+</div>
                </div>
                <div className="w-1/5 h-40  flex items-center justify-center">
                    <p className="text-center text-grayscale-700 font-bold">$ 400</p>
                </div>
                <div className="w-1/5 h-40 flex items-center justify-center">
                    <p className="text-center text-grayscale-700 font-bold">$ 400</p>
                </div>
            </div>
            <div className="flex py-8 mx-20 items-start">
                <div className="w-2/5 h-40 flex">
                    <Image
                        src={coverBook}
                        alt="Cover Book"
                        width={"auto"}
                        height={160}
                        className="object-contain"
                    />
                    <div className="ml-4 flex flex-col justify-around w-1/2">
                        <p className="text-base line-clamp-2">Down and Out in Paris and London</p>
                        <p className="text-primary-600 text-sm line-clamp-1">Classic Books & Novels</p>
                        <Button variant="outline" className="">
                            <span className="text-left">Remove</span>
                        </Button>
                    </div>
                </div>
                <div className="w-1/5 h-40 flex items-center justify-around">
                    <div className="text-2xl">-</div>
                    <div className="text-lg border-2 block px-4 py-2 text-center border-grayscale-300">1</div>
                    <div className="text-2xl">+</div>
                </div>
                <div className="w-1/5 h-40  flex items-center justify-center">
                    <p className="text-center text-grayscale-700 font-bold">$ 400</p>
                </div>
                <div className="w-1/5 h-40 flex items-center justify-center">
                    <p className="text-center text-grayscale-700 font-bold">$ 400</p>
                </div>
            </div>
        </div>
        <div className="w-1/4 h-screen flex flex-col">
            <div className="py-8 border-b-2 border-grayscale-400 mx-4">
                <p className="text-2xl font-bold">Order Sumary</p>
            </div>
            <div className="flex justify-between p-4 mt-4">
                <p className="text-lg font-bold">Items 3</p>
                <p className="text-lg font-bold">$10000</p>
            </div>
            <p className="text-xl font-bold p-4 mt-4 uppercase">Shipping</p>
            <Select
                items={shipMethods}
                className="w-5/6 m-4"
                >
                {(method) => <SelectItem key={method.name}>{method.name}</SelectItem>}
                </Select>
            <p className="text-xl font-bold p-4 mt-4 uppercase">Promo Code</p>
            <Input type="text" className=" w-5/6 ml-4"/>
            <Button className="h-10 w-24 ml-4 mt-8">
                <span className="text-left">Apply</span>
            </Button>
            <div className="flex justify-between p-4 mt-16 mx-4 border-t-2 border-grayscale-400">
                <p className="text-lg font-bold">Total Cost</p>
                <p className="text-lg font-bold">$10000</p>
            </div>
            <Button className="h-10 mx-4 mt-8">
                <span className="text-left uppercase">Checkout</span>
            </Button>
        </div>
    </div>
  );
};

export default CartPageLayout;