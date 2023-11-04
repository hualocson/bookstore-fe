import { Facebook, Instagram } from "lucide-react";

import { Button } from "@/components/ui/button";

import SectionLayout from "@/components/landing-page/section-layout";

const FeedbackSection = () => {
  return (
    <SectionLayout className="flex flex-col items-center justify-start">
      <div className="flex flex-col w-1/2">
        <p className="font-bold text-5xl text-primary text-center my-8">Weekly digest</p>
        <p className="font-bold text-3xl text-grayscale text-center my-4">Latest New of books and Web3</p>
        <div className="flex justify-between items-center mt-4">
            <input className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md"></input>
            <Button className="ml-8 " size="lg">Subscrie</Button>
        </div>
        
      </div>
      <div className="flex flex-col w-1/2 mt-16">
        <p className="font-bold text-5xl text-primary text-center my-8">What's your idea?</p>
        <p className="font-bold text-3xl text-grayscale text-center my-4">Let chat and see hou we can help</p>
        
        <div className="flex items-center justify-around mt-4">
            <div class="box-content h-16 w-56 p-4 bg-primary-400 rounded-lg flex items-center justify-start">
                <Facebook className="h-10 w-10 mr-4"></Facebook>
                <div className="flex flex-col items-start">
                    <p className="text-lg text-grayscale-950 font-bold">Facebook</p>
                    <p className="text-base text-grayscale-600 font-bold">@bookseft_team</p>
                </div>
            </div>
            <div class="box-content h-16 w-56 p-4 bg-primary-300 rounded-lg flex items-center justify-start">
                <Instagram className="h-10 w-10 mr-4"></Instagram>
                <div className="flex flex-col items-start">
                    <p className="text-lg text-grayscale-950 font-bold">Instagram</p>
                    <p className="text-base text-grayscale-600 font-bold">@bookseft_team</p>
                </div>
            </div>
        </div>
      </div>
      
    </SectionLayout>
  );
};

export default FeedbackSection;