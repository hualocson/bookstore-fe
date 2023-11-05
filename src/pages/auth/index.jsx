import { useEffect } from "react";

import { useRouter } from "next/router";

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
    <div className="mx-auto mt-52 h-screen max-w-lg">
      <p className="text-center text-3xl font-bold">Welcome to Book-lands</p>
    </div>
  );
};

export default AuthRedirectPage;
