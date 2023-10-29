import * as React from "react";

import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        default:
          "bg-primary-500 text-light shadow hover:bg-primary-600 disabled:bg-primary-200 disabled:text-primary-700",
        outline:
          "border border-primary-700 bg-transparent text-primary-700 shadow-sm hover:bg-primary-100 disabled:opacity-50",
        secondary:
          "bg-grayscale-500 text-light shadow-sm hover:bg-grayscale-600 disabled:bg-grayscale-200 disabled:text-grayscale-700",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

/**
 * @typedef {Object} ButtonProps
 * @property {string} [variant="default"] - The variant of the button.
 * @property {string} [size="default"] - The size of the button.
 * @property {boolean} [asChild=false] - Whether the button should be rendered as a child of another component.
 */
const Button = React.forwardRef(
  /** @type {ButtonProps} */
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
