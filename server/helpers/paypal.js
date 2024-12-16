const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: 'sandbox', // Replace 'sandbox' with 'live' for production
  client_id: "",
  client_secret: "",
});

module.exports = paypal;
