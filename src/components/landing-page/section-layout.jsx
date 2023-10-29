import { cn } from "@/lib/utils";

const SectionLayout = ({ children, className }) => {
  return (
    <div
      className={cn("mx-auto h-[calc(100vh-80px)] max-w-screen-xl", className)}
    >
      {children}
    </div>
  );
};

export default SectionLayout;
