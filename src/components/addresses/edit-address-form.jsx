import ProfileInput from "@/components/settings/profile-input";
import { Button } from "@nextui-org/react";

const EditAddressForm = () => {
  

  return (
    <div className="col-span-9 flex flex-col gap-6 rounded-lg bg-grayscale-50/20 px-10 py-5 shadow-lg">
      <h2 className="text-xl font-bold text-primary">Edit address</h2>
      <div className="flex items-center justify-center gap-5">
        <ProfileInput
          isReadOnly
          label={"Street Address"}
          value=""
          isClearable={false}
        />
        <ProfileInput
          label={"City"}
          value=""
        />
      </div>
      <div className="flex items-center justify-center gap-5">
        <ProfileInput
          label={"State"}
          value=""
        />
        <ProfileInput
          label={"Postal Code"}
          value=""
        />
      </div>
      <div className="flex items-center justify-center gap-5">
        <ProfileInput
          label={"Country"}
          value=""
        />
        <ProfileInput
          label={"Phone Number"}
          value=""
        />
      </div>
      <div className="flex items-center justify-end gap-5">
        <Button variant="light" color="primary" >
          Cancel
        </Button>
        <Button variant="solid" color="primary" >
          Save Change
        </Button>
      </div>
    </div>
  );
};

export default EditAddressForm;
