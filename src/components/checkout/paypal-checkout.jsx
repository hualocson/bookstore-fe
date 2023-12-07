import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

function PayPalCheckout({ onCreateOrder, onCaptureOrder }) {
  const initialOptions = {
    "client-id": "test",
    "enable-funding": "venmo",
    "disable-funding": "paylater,card",
    "data-sdk-integration-source": "integrationbuilder_sc",
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        style={{
          shape: "rect",
          layout: "vertical",
        }}
        createOrder={onCreateOrder}
        onApprove={onCaptureOrder}
      />
    </PayPalScriptProvider>
  );
}

export default PayPalCheckout;
