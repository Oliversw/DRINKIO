const request = require("request");
const env = require("env2");

env("./config.env");

if (!process.env.API_KEY) {
  throw new Error("Error API_KEY and BASE_KEY should be set");
}

const apiKey = process.env.API_KEY;

const apiCall = query => {
  //encode URL so that special characters can be handled in search
  const queryForUrl = encodeURIComponent(query);

  const options = {
    url: `https://sandbox-api.brewerydb.com/v2/search?q=${queryForUrl}&type=beer&key=${apiKey}&format=json`,
    method: "GET",
    headers: {
      Accept: "application/json",
      "Accept-Charset": "utf-8"
    }
  };

  request(options, (err, res, body) => {
    // console.log("error: ", err);
    // console.log("response: ", res && res.statusCode);
    // console.log("body: ", body);
    // return body;
    if (err) {
      console.log("Error in apiCall: ", err);
    } else {
      console.log("apiCall returning: ", JSON.parse(body));
      return body;
    }
  });
};

module.exports = apiCall;
