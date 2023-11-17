import { useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/react";
import { BookOpenCheck, Star } from "lucide-react";

const RatingSection = () => {
  const [currentHover, setCurrentHover] = useState(0);

  return (
    <div className="flex w-full flex-col gap-6 border-y border-grayscale-300 py-4">
      <h2 className="text-2xl font-bold">Rating & Reviews</h2>
      <div className="flex w-full flex-col items-center justify-center gap-4">
        <span className="rounded-full bg-grayscale-800 p-4 text-light">
          <BookOpenCheck size={60} />
        </span>
        <p className="text-4xl font-semibold">What do you think?</p>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <span
                    key={i}
                    className="group cursor-pointer px-1"
                    onMouseEnter={() => setCurrentHover(i + 1)}
                    onMouseLeave={() => setCurrentHover(0)}
                  >
                    <Star
                      size={20}
                      className={cn(
                        "transition-all duration-300",
                        i + 1 <= currentHover ? "fill-primary" : "fill-none"
                      )}
                    />
                  </span>
                ))}
            </div>
            <p>Rate this book</p>
          </div>
          <Button variant="solid" color="primary">
            Write a Review
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RatingSection;
