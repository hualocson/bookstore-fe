const AuthLayout = ({ children }) => {
  return (
    <div className="mx-auto flex min-h-screen max-w-md justify-center py-28">
      {children}
    </div>
  );
};

export default AuthLayout;
