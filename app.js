// function getQuote() {
//   fetch("https://type.fit/api/quotes")
//     .then((quoteData) => {
//       return quoteData.json();
//     })
//     .then((dataPass) => {
//       let randomPass = Math.floor(Math.random() * dataPass.length);
//       setTimeout(() => {});
//       document.getElementById("qoutesArea").innerHTML =
//         dataPass[randomPass].text;
//     });
// }
// getQuote();

function getQuote() {
  fetch("https://type.fit/api/quotes")
    .then((data) => {
      return data.json();
    })
    .then((dataPass) => {
      let randomQuote = Math.floor(Math.random() * dataPass.length);
      setTimeout(()=>{
          document.getElementById("quotesArea").innerHTML=dataPass[randomQuote].text;
        },2000)
    });
}
getQuote();
