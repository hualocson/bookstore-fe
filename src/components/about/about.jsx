import { useRouter } from "next/router";


import SectionLayout from "@/components/landing-page/section-layout";

const AboutSection = () => {
  const router = useRouter();
  return (
    <SectionLayout className="mt-16 flex flex-col items-center">
      <p className="text-7xl font-bold uppercase text-primary-400">Book Store</p>
      <p className="text-5xl font-bold uppercase text-primary-400 mt-8">Student Info</p>
      <div className="flex items-center w-full mt-8">
        <div className="w-1/3 h-96 mx-4 flex flex-col rounded-l-lg rounded-r-xl">
            <p className="text-3xl font-bold uppercase text-primary-400 text-center">Lương Minh Chiến</p>
            <p className="text-3xl font-bold uppercase text-primary-400 text-center mt-4">20110615</p>
        </div>
        <div className="w-1/3 h-96 mx-4 flex flex-col rounded-l-lg rounded-r-xl">
            <p className="text-3xl font-bold uppercase text-primary-400 text-center">Hứa Lộc Sơn</p>
            <p className="text-3xl font-bold uppercase text-primary-400 text-center mt-4">20110712</p>
        </div>
        <div className="w-1/3 h-96 mx-4 flex flex-col rounded-l-lg rounded-r-xl">
            <p className="text-3xl font-bold uppercase text-primary-400 text-center">Phạm Phúc Bình</p>
            <p className="text-3xl font-bold uppercase text-primary-400 text-center mt-4">20110252</p>
        </div>
      </div>
    </SectionLayout>
  );
};

export default AboutSection;
