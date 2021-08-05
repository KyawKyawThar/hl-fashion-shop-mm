import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Il60uCQSzWaiOUSOWewx52tZPz60IDtcxQpvRTKYoInG12krn2SJRw6LuDQql8E9VgZdAwnNKycsfE3JuflMtX300aAqVAaJm";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successfully");
  };

  return (
    <StripeCheckout
      label="Play Now"
      name="hl-fashion"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
export default StripeCheckoutButton;
