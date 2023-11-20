import { Toaster } from "react-hot-toast";

const ToastContainer = () => {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      toastOptions={{
        // Define default options
        duration: 3000,
        style: {
          background: "#494949",
          color: "#fbf7f1",
        },

        error: {
          style: {
            background: "#e85e5660",
            color: "#fbf7f1",
          },
        },

        success: {
          style: {
            background: "#009D8060",
            color: "#f4e9dc",
          },
        },
      }}
    />
  );
};

export default ToastContainer;
