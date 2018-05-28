// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================


// =============================================================
var drinks = [
    {
        "name": "Gin and Tonic",
        "photo": "https://ionemadamenoire.files.wordpress.com/2016/08/gin1.jpg?w=420",
        "scores": [
            5, //1. drinkability - can I drink it all the time? 1-LOW /5-HIGH
            1, //2. spirit color - how dark is lead spirit
            2, //3. drink profile? 1-TALL/ICY 5-SHORT/BOOZY
            4, //4. Sweetness - (LOW to HIGH)
            2, //5. Sourness - (LOW to HIGH)
            4, //6. Ice Profile - (LOW to HIGH)
            1, //7. Egg Whites - (LOW TO HIGH)
            1, //8. Float of Soda or Champ or none
            3, //9. Go To Garnish
            3  //10 Daytime or Nighttme or Nightcap
        ]
    },
    {
        "name": "Mojito",
        "photo": "http://www.paroisse-chinon.fr/sainte-jeanne-arc-en-chinonais/2017/08/mojito-420x420.jpeg",
        "scores": [
            4, //1. drinkability - can I drink it all the time? 1-LOW /5-HIGH
            3, //2. spirit color - how dark is lead spirit
            2, //3. drink profile? 1-TALL/ICY 5-SHORT/BOOZY
            5, //4. Sweetness - (LOW to HIGH)
            4, //5. Sourness - (LOW to HIGH)
            4, //6. Ice Profile - (LOW to HIGH)
            1, //7. Egg Whites - (LOW TO HIGH)
            1, //8. Float of Soda or Champ or none
            1, //9. Go To Garnish
            1//10 Daytime or Nighttme or Nightcap
        ]
    },
    {
        "name": "Whiskey Sour",
        "photo": "https://drinkoteket.se/wp-content/uploads/whiskey-sour.jpg",
        "scores": [
            3, //1. drinkability - can I drink it all the time? 1-LOW /5-HIGH
            4, //2. spirit color - how dark is lead spirit
            4, //3. drink profile? 1-TALL/ICY 5-SHORT/BOOZY
            4, //4. Sweetness - (LOW to HIGH)
            5, //5. Sourness - (LOW to HIGH)
            1, //6. Ice Profile - (LOW to HIGH)
            5, //7. Egg Whites - (LOW TO HIGH)
            5, //8. Float of Soda or Champ or none
            4, //9. Go To Garnish
            3  //10 Daytime or Nightime or Nightcap
        ]
    },
    {
        "name": "Pisco Sour",
        "photo": "http://blog.brisky.co.in/wp-content/uploads/2016/10/featured1.jpg",
        "scores": [
            2, //1. drinkability - can I drink it all the time? 1-LOW /5-HIGH
            2, //2. spirit color - how dark is lead spirit
            4, //3. drink profile? 1-TALL/ICY 5-SHORT/BOOZY
            4, //4. Sweetness - (LOW to HIGH)
            5, //5. Sourness - (LOW to HIGH)
            1, //6. Ice Profile - (LOW to HIGH)
            5, //7. Egg Whites - (LOW TO HIGH)
            5, //8. Float of Soda or Champ or none
            3, //9. Go To Garnish
            3  //10 Daytime or Nighttme or Nightcap
        ]
    },
    {
        "name": "Manhattan",
        "photo": "http://thepearlguide.co.ug/wp-content/uploads/2015/09/Rob-Roy-420x420.jpg",
        "scores": [
            3, //1. drinkability - can I drink it all the time? 1-LOW /5-HIGH
            4, //2. spirit color - how dark is lead spirit
            5, //3. drink profile? 1-TALL/ICY 5-SHORT/BOOZY
            4, //4. Sweetness - (LOW to HIGH)
            1, //5. Sourness - (LOW to HIGH)
            2, //6. Ice Profile - (LOW to HIGH)
            1, //7. Egg Whites - (LOW TO HIGH)
            2, //8. Float of Soda or Champ or none
            3, //9. Go To Garnish
            5  //10 Daytime or Nighttme or Nightcap
        ]
    },
    {
        "name": "Old Fashioned",
        "photo": "https://www.thecocktailproject.com/sites/default/files/knobcreek_oldfashioned_beauty_7832-4868-Edit_thumbnail.jpg",
        "scores": [
            3, //1. drinkability - can I drink it all the time? 1-LOW /5-HIGH
            4, //2. spirit color - how dark is lead spirit
            4, //3. drink profile? 1-TALL/ICY 5-SHORT/BOOZY
            5, //4. Sweetness - (LOW to HIGH)
            2, //5. Sourness - (LOW to HIGH)
            3, //6. Ice Profile - (LOW to HIGH)
            1, //7. Egg Whites - (LOW TO HIGH)
            1, //8. Float of Soda or Champ or none
            2, //9. Go To Garnish
            4  //10 Daytime or Nighttme or Nightcap
        ]
    }, {
        "name": "Scotch on the Rocks",
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwCy5sVfxuaXyMhdkEMBHSOXmkZzMs5LFlPknXcoKnNJkeawYw",
        "scores": [
            3, //1. drinkability - can I drink it all the time? 1-LOW /5-HIGH
            5, //2. spirit color - how dark is lead spirit
            4, //3. drink profile? 1-TALL/ICY 5-SHORT/BOOZY
            2, //4. Sweetness - (LOW to HIGH)
            1, //5. Sourness - (LOW to HIGH)
            3, //6. Ice Profile - (LOW to HIGH)
            1, //7. Egg Whites - (LOW TO HIGH)
            1, //8. Float of Soda or Champ or none
            5, //9. Go To Garnish
            4  //10 Daytime or Nighttme or Nightcap
        ]
    }, {
        "name": "Clover Club",
        "photo": "https://1806.com.au/wp-content/uploads/2011/08/clover-club-web-res-420x420.jpg",
        "scores": [
            4, //1. drinkability - can I drink it all the time? 1-LOW /5-HIGH
            1, //2. spirit color - how dark is lead spirit
            3, //3. drink profile? 1-TALL/ICY 5-SHORT/BOOZY
            3, //4. Sweetness - (LOW to HIGH)
            4, //5. Sourness - (LOW to HIGH)
            1, //6. Ice Profile - (LOW to HIGH)
            4, //7. Egg Whites - (LOW TO HIGH)
            1, //8. Float of Soda or Champ or none
            1, //9. Go To Garnish
            2  //10 Daytime or Nighttme or Nightcap
        ]
    }, {
        "name": "Margarita",
        "photo": "http://tribecacitizen.com/wp-content/uploads/2014/08/Anejo-Tribeca-margarita-420x420.jpg",
        "scores": [
            5, //1. drinkability - can I drink it all the time? 1-LOW /5-HIGH
            2, //2. spirit color - how dark is lead spirit
            2, //3. drink profile? 1-TALL/ICY 5-SHORT/BOOZY
            4, //4. Sweetness - (LOW to HIGH)
            5, //5. Sourness - (LOW to HIGH)
            5, //6. Ice Profile - (LOW to HIGH)
            1, //7. Egg Whites - (LOW TO HIGH)
            5, //8. Float of Soda or Champ or none
            3, //9. Go To Garnish
            2  //10 Daytime or Nighttme or Nightcap
        ]
    }, {
        "name": "Aperol Spritz",
        "photo": "http://tribecacitizen.com/wp-content/uploads/2016/07/Tutto-Il-Giorno-Aperol-spritz-photo-by-Luca-Babini-420x277.jpg",
        "scores": [
            4, //1. drinkability - can I drink it all the time? 1-LOW /5-HIGH
            4, //2. spirit color - how dark is lead spirit
            1, //3. drink profile? 1-TALL/ICY 5-SHORT/BOOZY
            5, //4. Sweetness - (LOW to HIGH)
            3, //5. Sourness - (LOW to HIGH)
            4, //6. Ice Profile - (LOW to HIGH)
            1, //7. Egg Whites - (LOW TO HIGH)
            3, //8. Float of Soda or Champ or none
            3,//9. Go To Garnish
            1  //10 Daytime or Nighttme or Nightcap
        ]
    }

];
var surveys = [
    {
        "name": "Celso",
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZHYHmb9WspXtXC-Xuy9aRcP2pDKJajWO1c-GEtatQZY2mWMmY",
        "scores": [
            5, //1. drinkability - can I drink it all the time? 1-LOW /5-HIGH
            1, //2. spirit color - how dark is lead spirit
            2, //3. drink profile? 1-TALL/ICY 5-SHORT/BOOZY
            4, //4. Sweetness - (LOW to HIGH)
            2, //5. Sourness - (LOW to HIGH)
            4, //6. Ice Profile - (LOW to HIGH)
            1, //7. Egg Whites - (LOW TO HIGH)
            1, //8. Float of Soda or Champ or none
            3, //9. Go To Garnish
            3  //10 Daytime or Nighttme or Nightcap
        ]
    },
]

// Note how we export the array. This makes it accessible to other files using require.
module.exports = {drinks: drinks,
    surveys: surveys}

