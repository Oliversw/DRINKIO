// --------------------------- DOM ---------------------------

// IIFE to hide everything
(() => {
  const inputField = document.getElementById("beerInput");

  inputField.addEventListener("keyup", function(e) {
    if (e.keyCode) {
      // const typedInput = inputField.value;
      // const encodedInput = encodeURIComponent(typedInput);
      // const apiQueryURL = `https://sandbox-api.brewerydb.com/v2/search?q=${encodedInput}&type=beer&key=e87927017c7d0b6821a4ca409ce2e3e8`;
      postSearch(inputField.value);
    }
  });
})();

const postSearch = typedInput => {
  console.log("Beginning fetch");
  fetch("/search", { method: "POST", body: typedInput })
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

//https://sandbox-api.brewerydb.com/v2/search?q=Sun%20Dog&type=beer&key=e87927017c7d0b6821a4ca409ce2e3e8
