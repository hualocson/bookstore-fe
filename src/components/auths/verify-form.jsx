import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { verifyToken } from "@/apis/auth";
import { handleErrorResponse } from "@/lib/utils";
import { Button, Input } from "@nextui-org/react";
import toast from "react-hot-toast";

import AuthLayout from "@/components/auths/layout";

import { getUser } from "@/store/features/user";
import { useSelector } from "@/store/redux-hook";

import logo from "@/resources/images/landing/books-logo.svg";

const VerifyForm = () => {
  const [token, setToken] = useState("");

  const user = useSelector(getUser);
  const router = useRouter();

  const handleOnSubmit = async () => {
    if (user.email === "") {
      router.push("/auth/login");
      throw new Error("Fill your email first");
    }
    if (!token) {
      throw new Error("Token is required");
    }
    const { error } = await verifyToken(user.email, token);
    if (error) {
      const { message } = handleErrorResponse(error);
      throw new Error(message);
    } else {
      router.push("/auth");
      return "Login success";
    }
  };
  const notify = () => {
    toast.promise(handleOnSubmit(), {
      loading: "Loading...",
      success: (message) => message,
      error: (err) => err.message,
    });
  };
  return (
    <AuthLayout>
      <div className="flex flex-grow flex-col gap-10">
        <div className="flex flex-col items-center gap-y-5">
          <Link className="h-16 w-16" href="/">
            <Image
              src={logo}
              alt="Books Logo"
              width={200}
              height={200}
              className="object-contain"
              priority
            />
          </Link>
          <h1 className="text-3xl font-bold">Check you email</h1>
        </div>
        <div className="flex flex-col items-center gap-4 rounded-xl bg-grayscale-500/20 p-10">
          <Input
            value={token}
            onValueChange={setToken}
            isClearable
            isRequired
            radius="xl"
            placeholder="Enter your token send to  your email"
            labelPlacement="outside"
            classNames={{
              input: ["text-light", "placeholder:text-grayscale-300"],
              clearButton: ["text-light"],
              innerWrapper: ["bg-transparent"],
              inputWrapper: [
                "shadow-xl",
                "bg-grayscale/80",
                "group-data-[focus=true]:bg-grayscale",
                "data-[hover=true]:bg-grayscale",
                "!cursor-text",
              ],
            }}
          />
          <Button
            className="w-full"
            variant="solid"
            color="primary"
            onPress={notify}
          >
            Submit
          </Button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default VerifyForm;
