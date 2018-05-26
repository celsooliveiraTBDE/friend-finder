// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================


// =============================================================
var drinks = [
    {
        "name":"Gin and Tonic",
        "photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZHYHmb9WspXtXC-Xuy9aRcP2pDKJajWO1c-GEtatQZY2mWMmY",
        "scores":[
            5, //sweetness
            1, //sourness
            4, //type of spirit? maybe one for each number
            4, //salt
            5, //
            1,
            2,
            5,
            4,
            1
          ]
      }
      
];
 
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = drinks