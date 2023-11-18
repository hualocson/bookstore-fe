import { cn, priceFormatter } from "@/lib/utils";
import { Radio, RadioGroup } from "@nextui-org/react";

const ShippingMethodSection = ({ selected, setSelected }) => {
  return (
    <RadioGroup
      label="Delivery options"
      classNames={{
        label: ["text-lg", "font-semibold"],
      }}
      value={selected}
      onValueChange={setSelected}
    >
      <div className="flex gap-4">
        <Radio
          value="0"
          classNames={{
            base: cn(
              "m-0 inline-flex max-w-full items-center justify-between bg-transparent p-4",
              "cursor-pointer rounded-2xl border-2 border-grayscale-300/30",
              "data-[selected=true]:border-grayscale-400 data-[selected=true]:bg-grayscale/30"
            ),
            wrapper: ["hidden"],
            labelWrapper: ["m-0 w-full"],
            label: ["font-semibold"],
          }}
          description={priceFormatter(0)}
        >
          Standard (3-4 business day)
        </Radio>
        <Radio
          value="20"
          classNames={{
            base: cn(
              "m-0 inline-flex max-w-full items-center justify-between bg-transparent p-4",
              "cursor-pointer rounded-2xl border-2 border-grayscale-300/30",
              "data-[selected=true]:border-grayscale-400 data-[selected=true]:bg-grayscale/30"
            ),
            wrapper: ["hidden"],
            labelWrapper: ["m-0 w-full"],
            label: ["font-semibold"],
          }}
          description={priceFormatter(2000)}
        >
          Express (1-2 business day)
        </Radio>
      </div>
    </RadioGroup>
  );
};

export default ShippingMethodSection;
