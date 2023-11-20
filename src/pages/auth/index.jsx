import { useEffect } from "react";

import Image from "next/image";
import { useRouter } from "next/router";

import logo from "@/resources/images/landing/books-logo.svg";

const AuthRedirectPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      router.push("/products");
    }, 2000);
    return () => {
      clearTimeout(timeOut);
    };
  });

  return (
    <div className="mx-auto mt-52 flex h-screen max-w-lg flex-col items-center gap-6">
      <span className="h-20 w-20">
        <Image
          src={logo}
          alt="Books Logo"
          width={200}
          height={200}
          className="object-contain"
          priority
        />
      </span>
      <p className="text-center text-3xl font-bold">
        Welcome to<span className="font-bold text-primary"> Books land</span>
      </p>
    </div>
  );
};

export default AuthRedirectPage;
