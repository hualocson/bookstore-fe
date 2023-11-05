import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import env from "@/lib/constants/vars.js";
import { Button, Input, Link as UILink } from "@nextui-org/react";

import AuthLayout from "@/components/auths/layout";

import logo from "@/resources/images/landing/books-logo.svg";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  return (
    <AuthLayout>
      <div className="flex flex-grow flex-col gap-10">
        <div className="flex flex-col items-center gap-y-5">
          <Link className="h-20 w-20" href="/">
            <Image
              src={logo}
              alt="Books Logo"
              width={200}
              height={200}
              className="object-contain"
              priority
            />
          </Link>
          <h1 className="text-2xl font-bold">Welcome back!</h1>
        </div>

        {/* Form */}
        <div className="flex flex-col items-center gap-5 rounded-xl bg-grayscale-500/20 p-10">
          <Button
            className="w-full"
            variant="bordered"
            as={UILink}
            href={`${env.BASE_URL}/auth/google`}
            color="primary"
            onClick={() => {
              setLoading(true);
            }}
            isLoading={loading}
            startContent={
              !loading && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  className="h-6 w-6 fill-primary stroke-primary"
                  viewBox="0 0 50 50"
                >
                  <path d="M 26 2 C 13.308594 2 3 12.308594 3 25 C 3 37.691406 13.308594 48 26 48 C 35.917969 48 41.972656 43.4375 45.125 37.78125 C 48.277344 32.125 48.675781 25.480469 47.71875 20.9375 L 47.53125 20.15625 L 46.75 20.15625 L 26 20.125 L 25 20.125 L 25 30.53125 L 36.4375 30.53125 C 34.710938 34.53125 31.195313 37.28125 26 37.28125 C 19.210938 37.28125 13.71875 31.789063 13.71875 25 C 13.71875 18.210938 19.210938 12.71875 26 12.71875 C 29.050781 12.71875 31.820313 13.847656 33.96875 15.6875 L 34.6875 16.28125 L 41.53125 9.4375 L 42.25 8.6875 L 41.5 8 C 37.414063 4.277344 31.960938 2 26 2 Z M 26 4 C 31.074219 4 35.652344 5.855469 39.28125 8.84375 L 34.46875 13.65625 C 32.089844 11.878906 29.199219 10.71875 26 10.71875 C 18.128906 10.71875 11.71875 17.128906 11.71875 25 C 11.71875 32.871094 18.128906 39.28125 26 39.28125 C 32.550781 39.28125 37.261719 35.265625 38.9375 29.8125 L 39.34375 28.53125 L 27 28.53125 L 27 22.125 L 45.84375 22.15625 C 46.507813 26.191406 46.066406 31.984375 43.375 36.8125 C 40.515625 41.9375 35.320313 46 26 46 C 14.386719 46 5 36.609375 5 25 C 5 13.390625 14.386719 4 26 4 Z"></path>
                </svg>
              )
            }
          >
            Login with google
          </Button>
          <span>--- or ---</span>
          <div className="flex w-full flex-col gap-y-4">
            <Input
              type="email"
              label="Email"
              isClearable
              isRequired
              radius="xl"
              isDisabled={loading}
              placeholder="Enter your email"
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
              isDisabled={loading}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default LoginForm;
