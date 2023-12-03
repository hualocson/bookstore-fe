import { useState } from "react";

import { Button, Select, SelectItem, Slider, Tooltip } from "@nextui-org/react";
import { FilterIcon } from "lucide-react";

const sortOptions = [
  {
    label: "Price: Low to High",
    value: "price_asc",
  },
  {
    label: "Price: High to Low",
    value: "price_desc",
  },
  {
    label: "Name: A to Z",
    value: "name_asc",
  },
  {
    label: "Name: Z to A",
    value: "name_desc",
  },
];

const Filter = ({ onApplyFilter }) => {
  const [filterValue, setFilterValue] = useState({
    priceRange: [0, 100],
    sort: new Set([]),
  });

  return (
    <div className="flex w-full items-center gap-4">
      <div className="w-full max-w-xs">
        <Slider
          size="sm"
          label="Price range"
          formatOptions={{ style: "currency", currency: "USD" }}
          step={2}
          maxValue={100}
          minValue={0}
          value={filterValue.priceRange}
          onChange={(value) =>
            setFilterValue((prev) => ({ ...prev, priceRange: value }))
          }
        />
      </div>
      <Select
        labelPlacement="inside"
        className="max-w-xs"
        label="Sort"
        color="primary"
        selectedKeys={filterValue.sort}
        onSelectionChange={(value) => {
          setFilterValue((prev) => ({ ...prev, sort: value }));
        }}
      >
        {sortOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </Select>
      <Tooltip
        content="Apply filter"
        placement="right"
        color="primary"
        size="sm"
      >
        <Button
          startContent={<FilterIcon size={20} />}
          isIconOnly
          variant="light"
          color="primary"
          onPress={() => onApplyFilter(filterValue)}
        />
      </Tooltip>
    </div>
  );
};

export default Filter;
