import emailjs from 'emailjs-com';
export default function Buy() {

  function sendEmail(e) {
    e.preventDefault();
    emailjs.send("service_7kldg0k","template_byjn2ur",{
      message: "testing",
      reply_to: "no",
    });
  }

  return (
    <script src="https://www.paypal.com/sdk/js?client-id=AcW3TDR5BIwM9HUVlLJvITP9fo_w5mSdOUCu-PSqtRhl8S1ozx5LeZdDMiIVuC7lfhgRGE8qaiG-rFgT"></script>
    <script src="die.js"></script>
    <script src="script.js"></script>
    <div id="paypal-button-container"></div>
    <script>
      paypal.Buttons({
        createOrder: function(data, actions) {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: '1.00'
              }
            }]
          });
        },
        onApprove: function(data, actions) {
          return actions.order.capture().then(function(details) {
            alert('Transaction completed by ' + details.payer.name.given_name);
          });
        }
      }).render('#paypal-button-container'); // Display payment options on your web page
    </script>
  );
}
