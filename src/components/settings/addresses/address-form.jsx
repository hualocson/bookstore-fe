import { useEffect, useState } from "react";

import { createAddress, updateAddress } from "@/apis/addresses";
import { handleErrorResponse } from "@/lib/utils";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { Plus } from "lucide-react";
import toast from "react-hot-toast";
import { useSWRConfig } from "swr";

import AddressAutocomplete from "@/components/settings/addresses/address-autocomplete";
import ProfileInput from "@/components/settings/profile-input";

const AddressForm = ({ initData }) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const { mutate } = useSWRConfig();

  const [formData, setFormData] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    phone: "",
  });
  useEffect(() => {
    if (initData) {
      setFormData({
        name: initData.name,
        street: initData.streetAddress,
        city: initData.city,
        state: initData.state,
        postalCode: initData.postalCode,
        country: initData.country,
        phone: initData.phoneNumber,
      });
      onOpen();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initData?.id]);

  const onValueChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const notifySubmit = () => {
    toast.promise(onSubmit(), {
      loading: "Saving...",
      success: (message) => <b>{message}</b>,
      error: (error) => <b>{error.message}</b>,
    });
  };

  const onSubmit = async () => {
    if (Object.values(formData).some((value) => value === "")) {
      throw new Error("Please fill in all fields!");
    }
    if (initData?.id) {
      const { error } = await updateAddress({
        id: initData.id,
        ...formData,
        streetAddress: formData.street,
        phoneNumber: formData.phone,
      });

      if (error) {
        const { message } = handleErrorResponse(error);
        throw new Error(message);
      } else {
        onClose();
        mutate("/addresses");
        return "Edit address success!";
      }
    } else {
      const { error } = await createAddress({
        ...formData,
        streetAddress: formData.street,
        phoneNumber: formData.phone,
      });

      if (error) {
        const { message } = handleErrorResponse(error);
        throw new Error(message);
      } else {
        onClose();
        mutate("/addresses");
        return "Create address success!";
      }
    }
  };

  const onSelectAddress = (address) => {
    if (address) {
      setFormData((prev) => ({
        ...prev,
        street: address?.street ?? prev.street,
        city: address?.city ?? prev.city,
        state: address?.state ?? prev.state,
        postalCode: address?.postcode ?? prev.postalCode,
        country: address?.country ?? prev.country,
      }));
    }
  };

  return (
    <>
      <Button
        variant="flat"
        color="secondary"
        onPress={onOpen}
        startContent={<Plus size={20} />}
      >
        Add to address
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={() => {
          setFormData({
            name: "",
            street: "",
            city: "",
            state: "",
            postalCode: "",
            country: "",
            phone: "",
          });
        }}
        placement="top-center"
        backdrop="blur"
        size={"lg"}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {initData?.id ? "Edit address" : "Shipping Address"}
              </ModalHeader>
              <ModalBody>
                <ProfileInput
                  label={"Name"}
                  value={formData.name}
                  placeholder={"Enter address name"}
                  setValue={(value) => onValueChange("name", value)}
                  isClearable={false}
                />
                <AddressAutocomplete onSelectAddress={onSelectAddress} />
                <ProfileInput
                  label={"Street Address"}
                  value={formData.street}
                  setValue={(value) => onValueChange("street", value)}
                  isClearable={false}
                />
                <div className="flex items-center justify-center gap-2">
                  <ProfileInput
                    label={"City"}
                    value={formData.city}
                    setValue={(value) => onValueChange("city", value)}
                  />
                  <ProfileInput
                    label={"State"}
                    value={formData.state}
                    setValue={(value) => onValueChange("state", value)}
                  />
                </div>
                <div className="flex items-center justify-center gap-2">
                  <ProfileInput
                    label={"Postal Code"}
                    value={formData.postalCode}
                    setValue={(value) => onValueChange("postalCode", value)}
                  />
                  <ProfileInput
                    label={"Country"}
                    value={formData.country}
                    setValue={(value) => onValueChange("country", value)}
                  />
                </div>
                <ProfileInput
                  label={"Phone Number"}
                  value={formData.phone}
                  setValue={(value) => onValueChange("phone", value)}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={notifySubmit}>
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddressForm;
