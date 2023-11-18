import { useState } from "react";

import useAddresses from "@/hooks/useAddresses";
import { cn } from "@/lib/utils";
import { Radio, RadioGroup } from "@nextui-org/react";

import AddressCard from "@/components/settings/addresses/address-card";
import AddressForm from "@/components/settings/addresses/address-form";

/**
 *
 * @param {Object} props
 * @param {(Function)} [props.onSelectAddress]
 * @returns
 */
const AddressesListing = ({ onSelectAddress }) => {
  const { data } = useAddresses();
  const [selectedAddress, setSelectedAddress] = useState(data[0]?.id);

  const handleOnChange = (value) => {
    setSelectedAddress(value);
    if (onSelectAddress) {
      onSelectAddress(value);
    }
  };

  return (
    <div className="col-span-9 flex flex-col gap-3 rounded-lg bg-grayscale-50/20 px-10 py-5 shadow-lg">
      <h2 className="text-xl font-bold text-primary">Shipping Address</h2>
      <div>
        <AddressForm
          initData={selectedAddress}
          onFormClose={() => setSelectedAddress(null)}
        />
      </div>
      <RadioGroup value={selectedAddress} onValueChange={handleOnChange}>
        <div className="grid grid-cols-3 gap-4">
          {data?.map((address) => (
            <Radio
              key={address.id}
              value={address.id}
              classNames={{
                base: cn(
                  "m-0 inline-flex max-w-full items-center justify-between bg-transparent p-0",
                  "cursor-pointer rounded-2xl border-2 border-grayscale-300/30",
                  "data-[selected=true]:border-grayscale-400 data-[selected=true]:bg-grayscale/30"
                ),
                wrapper: ["hidden"],
                labelWrapper: ["m-0 w-full"],
              }}
            >
              <AddressCard
                key={address.id}
                {...address}
                onEdit={() => setSelectedAddress(address)}
              />
            </Radio>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
};

export default AddressesListing;
