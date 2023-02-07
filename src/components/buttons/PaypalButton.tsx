import { FC } from "react";

const PayPalButton: FC = () => {
  return (
    <form
      action="https://www.paypal.com/cgi-bin/webscr"
      method="post"
      target="_top"
    >
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="W2E6R3L2J82P4" />

      <input
        type="image"
        src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/buy-logo-large.png"
        style={{ border: 0 }}
        name="submit"
        alt="PayPal - The safer, easier way to pay online!"
      />
      {/* <img
        alt="Paypal Button"
        style={{ border: 0 }}
        src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif"
        width="1"
        height="1"
      /> */}
    </form>
  );
};

export default PayPalButton;
