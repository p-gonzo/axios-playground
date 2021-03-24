// Need Webpack for below to work
// import axios from 'axios';

const axios = require('axios');


// axios.get returns a promise
// ES6 arrow syntax
// axios.get("http://api.quotable.io/random")
//   .then(res => {
//     return 6;
//   })
//   .then(value => {
//     console.log(value);
//     return 5;
//   })
//   .then(val => console.log(val));

// Legacy syntax
// axios.get("http://api.quotable.io/random")
//   .then(function(res) {
//     console.log(res.data);
//   })


// axios.get("http://api.quotable.io/random")
//   .then(res => {
//     console.log(res.data.content);
//     return axios.get("http://api.quotable.io/rando");
//   })
//   .then(res => {
//     console.log(res.data.content);
//   })
//   .catch(err => {
//     console.log(err.response.statusText);
//   })
//   .then(() => {
//     console.log('Recovered from our err b/c of "catch"');
//   });


// let x = new Promise((resolve, reject) => {
//   const val = Math.floor(Math.random() * 10);
//   setTimeout(() => {
//     if (val % 2 === 0) {
//       resolve("Resolved");
//     } else {
//       reject("Rejected")
//     }
//   }, 1000);
// });

// x
//   .then(val => console.log(val))
//   .catch(err => console.log(err));


const getQuote = () => {
  return axios.get("http://api.quotable.io/random");
};

const parseQuote = (quoteResponse) => {
  return quoteResponse.data.content;
};

getQuote()
  .then(quoteResponse => {
    // grab VALUE from promise and pass into helper function
    // return parseQuote(quoteResponse)
    return 5;
  })
  .then(finalQuote => {
    console.log(finalQuote);
  })

// const myFunc = () => 5;
// const myFunc2 = () => {
//   return 5;
// }

// console.log(myFunc());
// console.log(myFunc2());
