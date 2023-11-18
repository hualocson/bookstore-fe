import { Button } from "@nextui-org/react";
import { Pencil } from "lucide-react";

const AddressCard = ({
  name,
  streetAddress,
  city,
  state,
  postalCode,
  country,
  phoneNumber,
  onEdit,
}) => {
  // join the address fields into a single string
  const address = `${streetAddress}, ${city}, ${state}, ${country}`;

  return (
    <div className=" flex min-h-[136px] flex-col rounded-2xl p-4">
      <div className="flex w-full items-center justify-between">
        <div className="flex w-full items-center gap-2">
          <b>{name}</b>
          <span>|</span>
          <span>{phoneNumber}</span>
        </div>
        <Button
          size="sm"
          variant="light"
          color="primary"
          startContent={<Pencil size={16} />}
          isIconOnly
          onPress={onEdit}
        />
      </div>
      <span>{address}</span>
      <span>{postalCode}</span>
    </div>
  );
};

export default AddressCard;
