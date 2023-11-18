import { useState } from "react";

import env from "@/lib/constants/vars";
import { removeAccents } from "@/lib/utils";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { useAsyncList } from "@react-stately/data";
import { Search } from "lucide-react";

const AddressAutocomplete = ({ onSelectAddress }) => {
  const [selectedAddress, setSelectedAddress] = useState("");

  let list = useAsyncList({
    async load({ signal, filterText }) {
      if (selectedAddress !== "") return;
      if (filterText === "") return { items: [] };
      let res = await fetch(
        `https://api.geoapify.com/v1/geocode/autocomplete?text=${filterText}&limit=10&format=json&apiKey=${env.API_KEY}`,
        { signal }
      );
      let json = await res.json();
      return {
        items:
          json?.results.map((item) => ({
            ...item,
            placeId: item.place_id,
            value: item.formatted,
          })) ?? [],
      };
    },
  });

  const myFilter = (textValue, inputValue) => {
    if (inputValue === "") return true;
    // normalize both strings
    let text = removeAccents(textValue.toLowerCase());
    let input = removeAccents(inputValue.toLowerCase());

    return text.includes(input);
  };

  return (
    <div>
      <Autocomplete
        inputValue={list.filterText}
        isLoading={list.isLoading}
        defaultItems={list.items}
        variant="bordered"
        size={"sm"}
        defaultFilter={myFilter}
        onInputChange={list.setFilterText}
        selectedKey={selectedAddress}
        label={
          <div className="flex items-center justify-center gap-2">
            <Search size={16} />
            <span>{"Search address"}</span>
          </div>
        }
        menuTrigger="input"
        onSelectionChange={(key) => {
          setSelectedAddress(key);
          let item = list.items.find((item) => item.placeId === key);
          list.setFilterText(item?.value ?? "");
          onSelectAddress(item);
        }}
      >
        {(item) => (
          <AutocompleteItem key={item.placeId}>{item.value}</AutocompleteItem>
        )}
      </Autocomplete>
    </div>
  );
};

export default AddressAutocomplete;
