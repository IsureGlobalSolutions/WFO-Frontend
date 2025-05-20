import BannerSection from "../../BannerSection";
import Billing from "./BillingSection.jsx";

function CheckOut() {
  return (
    <div>
      <BannerSection name="Checkout" desc="Secure Checkout." id="shop" />
      <Billing />

    </div>
  );
}

export default CheckOut;
