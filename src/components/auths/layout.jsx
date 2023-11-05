const AuthLayout = ({ children }) => {
  return (
    <div className="mx-auto mt-32 flex min-h-screen max-w-sm justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;
