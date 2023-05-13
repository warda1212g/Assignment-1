var menuBtn = document.querySelector(".btn-parent");
var navLinks = document.querySelector(".navLinks")
var menuOpen = false;
menuBtn.addEventListener('click', () => {

});
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add("open");
        navLinks.classList.add("open");
        menuOpen = true;
    }
    else{
        menuBtn.classList.remove('open');
        navLinks.classList.remove("open");
        menuOpen = false;
    }

});


// const apiKey = "51tabva4hbz7ac92dm6rkneprs3x73l05m3z491l2n08bp26qdoq2mqzry38"; // replace with your actual API key
// const url = `https://metals-api.com/api/latest?base=XAU&access_key=${apiKey}`;

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     if (data.success) {
//       const usdRate = data.rates.USD;
//       if (usdRate !== undefined) {
//         console.log(`The latest gold price in USD is ${usdRate}`);
//       } else {
//         console.error("USD rate not available");
//       }
//     } else {
//       console.error("Failed to get gold price");
//     }
//   })
//   .catch(error => {
//     console.error("Failed to get gold price", error);
//   });