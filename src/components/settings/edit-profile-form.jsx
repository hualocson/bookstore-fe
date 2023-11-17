import { useEffect, useState } from "react";

import { fillCustomerDetails, updateCustomerDetails } from "@/apis/customer";
import UserStatus from "@/lib/constants/user-status";
import { handleErrorResponse } from "@/lib/utils";
import { Button } from "@nextui-org/react";
import toast from "react-hot-toast";

import ProfileInput from "@/components/settings/profile-input";

import { getUser, setUser } from "@/store/features/user";
import { useDispatch, useSelector } from "@/store/redux-hook";

const EditProfileForm = () => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    phoneNumber: "",
    firstName: "",
    lastName: "",
  });
  const [inputErrors, setInputErrors] = useState({
    phoneNumber: false,
    firstName: false,
    lastName: false,
  });

  const handleInputChange = (id) => {
    return (value) => {
      setInputErrors((prev) => ({
        ...prev,
        [id]: false,
      }));
      setFormData((prev) => ({
        ...prev,
        [id]: value,
      }));
    };
  };

  const checkValidData = () => {
    const errors = {};
    for (const [key, value] of Object.entries(formData)) {
      if (value === "") {
        errors[key] = true;
      }
    }
    setInputErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const onSubmitForm = async () => {
    if (checkValidData()) {
      if (user.status !== UserStatus.ACTIVE) {
        const { data, error } = await fillCustomerDetails(formData);

        if (error) {
          const { message } = handleErrorResponse(error);
          toast.error(message);
        } else {
          updateReduxUser(data.newDetail);
        }
      } else if (user.status === UserStatus.ACTIVE) {
        const { data, error } = await updateCustomerDetails(formData);

        if (error) {
          const { message } = handleErrorResponse(error);
          toast.error(message);
        } else {
          updateReduxUser(data.detail);
          toast.success("Update profile successfully");
        }
      }
    }
  };

  const updateReduxUser = (data) => {
    dispatch(setUser(data));
  };

  useEffect(() => {
    if (user.status === UserStatus.ACTIVE) {
      setFormData({
        phoneNumber: user.phoneNumber,
        firstName: user.firstName,
        lastName: user.lastName,
      });
    }
  }, [user]);

  return (
    <div className="col-span-9 flex flex-col gap-6 rounded-lg bg-grayscale-50/20 px-10 py-5 shadow-lg">
      <h2 className="text-xl font-bold text-primary">Edit profile</h2>
      <div className="flex items-center justify-center gap-5">
        <ProfileInput
          isReadOnly
          label={"Email"}
          type={"email"}
          value={user.email}
          isClearable={false}
        />
        <ProfileInput
          label={"Phone number"}
          isInvalid={inputErrors.phoneNumber}
          value={formData.phoneNumber}
          setValue={handleInputChange("phoneNumber")}
        />
      </div>
      <div className="flex items-center justify-center gap-5">
        <ProfileInput
          label={"First Name"}
          isInvalid={inputErrors.firstName}
          value={formData.firstName}
          setValue={handleInputChange("firstName")}
        />
        <ProfileInput
          label={"Last Name"}
          isInvalid={inputErrors.lastName}
          value={formData.lastName}
          setValue={handleInputChange("lastName")}
        />
      </div>
      <div className="flex items-center justify-end gap-5">
        <Button variant="solid" color="primary" onClick={onSubmitForm}>
          Save Change
        </Button>
      </div>
    </div>
  );
};

export default EditProfileForm;
