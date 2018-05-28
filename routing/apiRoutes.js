// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
var allData = require("../data/friends.js");
var drinkData = allData.drinks;
var surveyData = allData.surveys;
console.log("BAAAAAA", surveyData)

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    //displays all drinks in our database with our grades and photolinks
    app.get("/api/drinks", function (req, res) {
        res.json(drinkData);
    });

    //technically this would only be available for admin to use 
    app.get("/api/surveys", function (req, res) {
        res.json(surveyData);
    });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits survey data to the server.
    // ---------------------------------------------------------------------------

    app.post("/api/surveys", function (req, res) {

        var resultarray = [];
        var solutionarray = [];

        resultarray = req.body;

        console.log("badfsaf", resultarray);
        console.log(req.length);

        for (let x = 0; x < drinkData.length; x++) {
            console.log("drinkdata.length", drinkData.length);
            let result = 0;

            for (let i = 0; i < resultarray.multiple.length; i++) {
                console.log("my survey should stay the same", resultarray);
                console.log("the drink comparison should change and rotate though ", drinkData[x].scores)
                result = result + (Math.abs(resultarray.multiple[i] - drinkData[x].scores[i]));
                console.log('the result for ' + drinkData[x].name + "is: " + result)

            }
            solutionarray.push(result);

            console.log(solutionarray, "and the solution array is")
        }
        console.log("the lowest index based on the solution array is:" + solutionarray.indexOf(Math.min(...solutionarray)));
        console.log(solutionarray); // calculation matches 
        var mydrink = {
            drinkname: drinkData[solutionarray.indexOf(Math.min(...solutionarray))].name,
            drinkphoto: drinkData[solutionarray.indexOf(Math.min(...solutionarray))].photo
        }
        console.log(mydrink); 


        // req.body is available since we're using the body-parser middleware
        surveyData.push(req.body);

        //sending data back as to confirm submission was successful
        res.json(mydrink);

    });

    // ---------------------------------------------------------------------------
    // I added this below code so you could clear out the table while working with the functionality.
    // Don"t worry about it!

    app.post("/api/clear", function () {
        // Empty out the arrays of data
        drinkData = [];
        surveyData = [];

        console.log(drinkData);
        console.log(surveyData);
    });

};
// app.get("/api/evaluateSurvey")

// }
