import { useState } from "react";

import useAddresses from "@/hooks/useAddresses";

import AddressCard from "@/components/settings/addresses/address-card";
import AddressForm from "@/components/settings/addresses/address-form";

const AddressesListing = () => {
  const { data } = useAddresses();
  const [selectedAddress, setSelectedAddress] = useState(null);

  return (
    <div className="col-span-9 flex flex-col gap-3 rounded-lg bg-grayscale-50/20 px-10 py-5 shadow-lg">
      <h2 className="text-xl font-bold text-primary">Shipping Address</h2>
      <div>
        <AddressForm initData={selectedAddress} />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {data?.map((address) => (
          <AddressCard
            key={address.id}
            {...address}
            onEdit={() => setSelectedAddress(address)}
          />
        ))}
      </div>
    </div>
  );
};

export default AddressesListing;
