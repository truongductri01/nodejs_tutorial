const url = require("url");
const address =
  "https://about.google/?fg=1&utm_source=google-US&utm_medium=referral&utm_campaign=hp-header";

// Parse the url address
// Get a the information of the address
const parseUrl = url.parse(address, true);
const host = parseUrl.host;
const pathname = parseUrl.pathname;
const query = parseUrl.query;
