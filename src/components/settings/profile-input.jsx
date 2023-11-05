import { Input } from "@nextui-org/react";

const ProfileInput = ({
  label,
  type,
  isRequired,
  isReadOnly,
  isClearable,
  value,
  setValue,
  placeholder,
  isInvalid,
}) => {
  return (
    <Input
      isReadOnly={isReadOnly ?? false}
      type={type ?? "text"}
      label={label}
      isClearable={isClearable ?? true}
      isRequired={isRequired ?? false}
      radius="xl"
      value={value}
      isInvalid={isInvalid}
      onValueChange={setValue}
      labelPlacement="outside"
      color={isInvalid ? "danger" : "default"}
      errorMessage={isInvalid && `Please enter a valid ${label}`}
      placeholder={placeholder ?? `Enter your ${label}`}
      classNames={{
        label: ["font-semibold"],
        input: ["text-grayscale", "placeholder:text-grayscale-600"],
        clearButton: ["text-grayscale"],
        innerWrapper: ["bg-transparent"],
        inputWrapper: [
          "shadow-xl",
          "bg-grayscale-300/80",
          "group-data-[focus=true]:bg-grayscale-200",
          "data-[hover=true]:bg-grayscale-200",
          "!cursor-text",
        ],
      }}
    />
  );
};

export default ProfileInput;
