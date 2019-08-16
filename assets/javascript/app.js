var words = ["abruptly", "absurd", "abyss", "affix", "askew", "avenue", "awkward", "axiom", "azure", "bagpipes", "bandwagon", "banjo", "bayou", "beekeeper", "bikini", "blitz", "blizzard", "boggle", "bookworm", "boxcar", "boxful", "buckaroo", "buffalo", "buffoon", "buxom", "buzzard", "buzzing", "buzzwords", "caliph", "cobweb", "cockiness", "croquet", "crypt", "curacao", "cycle", "daiquiri", "dirndl", "disavow", "dizzying", "duplex", "dwarves", "embezzle", "equip", "espionage", "euouae", "exodus", "faking", "fishhook", "fixable", "fjord", "flapjack", "flopping", "fluffiness", "flyby", "foxglove", "frazzled", "frizzled", "fuchsia", "funny", "gabby", "galaxy", "galvanize", "gazebo", "giaour", "gizmo", "glowworm", "glyph", "gnarly", "gnostic", "gossip", "grogginess",
"haiku", "haphazard", "hyphen", "iatrogenic", "icebox", "injury", "ivory", "ivy", "jackpot", "jaundice", "jawbreaker", "jaywalk", "jazziest", "jazzy", "jelly", "jigsaw", "jinx", "jiujitsu", "jockey", "jogging", "joking", "jovial", "joyful", "juicy", "jukebox", "jumbo", "kayak", "kazoo", "keyhole", "khaki", "kilobyte", "kiosk", "kitsch", "kiwifruit", "klutz", "knapsack", "larynx", "lengths", "lucky", "luxury", "lymph", "marquis", "matrix", "megahertz", "microwave", "mnemonic", "mystify", "naphtha", "nightclub", "nowadays", "numbskull", "nymph", "onyx", "ovary", "oxidize", "oxygen", "pajama", "peekaboo", "phlegm", "pixel", "pizazz", "pneumonia", "polka", "pshaw", "psyche", "puppy", "puzzling", "quartz", "queue", "quips", "quixotic", "quiz", "quizzes", "quorum", "razzmatazz",
"rhubarb", "rhythm", "rickshaw", "schnapps", "scratch", "shiv", "snazzy", "sphinx", "spritz", "squawk", "staff", "strength", "strengths", "stretch", "stronghold", "stymied", "subway", "swivel", "syndrome", "thriftless", "thumbscrew", "topaz", "transcript", "transgress", "transplant", "triphthong", "twelfth", "twelfths", "unknown", "unworthy", "unzip", "uptown", "vaporize", "vixen", "vodka", "voodoo", "vortex", "voyeurism", "walkway", "waltz", "wave", "wavy", "waxy", "wellspring", "wheezy", "whiskey", "whizzing", "whomever", "wimpy", "witchcraft", "wizard", "woozy", "wristwatch", "wyvern", "xylophone", "yachtsman", "yippee", "yoked", "youthful", "yummy", "zephyr", "zigzag", "zigzagging", "zilch", "zipper", "zodia"]

var random = words[Math.floor(Math.random() * words.length)];
var lettersInWord = [];
var tellUser = [];
lettersInWord = random.split("");
console.log(lettersInWord);
tellUser = random;

function startGame() {
    var i;
    for (i = 0; i < lettersInWord.length; i++) {
        $('.word-container').append("<div class='blank-space'>" + lettersInWord[i] + "</div>");
    }
    $('.btn-container').css("display", "block");
    $('.incorrect').css("display", "block");
    $('.new-game').css("display", "initial");
    $('.start-game').css("display", "none");
    $('body').css("padding-top", "100px");
    $('#title').css("display", "none");
}

function newGame() {
    location.reload();  
}


var incorrectCounter = 0;

function showImage() {
    if (incorrectCounter === 0) {
        $('#image1, #image2, #image3, #image4, #image5, #image6, #image7').css("display", "none");
    }
    if (incorrectCounter === 1) {
        $('#image1').css("display", "block");
    }
    if (incorrectCounter === 2) {
        $('#image1').css("display", "none");
        $('#image2').css("display", "block");
    }
    if (incorrectCounter === 3) {
        $('#image2').css("display", "none");
        $('#image3').css("display", "block");
    }
    if (incorrectCounter === 4) {
        $('#image3').css("display", "none");
        $('#image4').css("display", "block");
    }
    if (incorrectCounter === 5) {
        $('#image4').css("display", "none");
        $('#image5').css("display", "block");
    }
    if (incorrectCounter === 6) {
        $('#image5').css("display", "none");
        $('#image6').css("display", "block");
    }
    if (incorrectCounter === 7) {
        $('#image6').css("display", "none");
        $('#image7').css("display", "block");
        $('.blank-space').css("color", "black");
        alert("You lose! The correct word was " + tellUser + " Click New Game to play again!");
    }
}

function A() {
    if ($('.blank-space:contains(a)')) {
        $('.blank-space:contains(a)').css("color", "black");
    }
    if (!lettersInWord.includes("a")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>A</button>");       
        incorrectCounter++;
        console.log(incorrectCounter);
        showImage();
    }
    $('.a-btn').css("display", "none");
    
}

function B() {
    if ($('.blank-space:contains(b)')) {
        $('.blank-space:contains(b)').css("color", "black");
    }
    if (!lettersInWord.includes("b")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>B</button>");        
        incorrectCounter++;
        console.log(incorrectCounter);
        showImage();
    }
    $('.b-btn').css("display", "none");
}

function C() {
    if ($('.blank-space:contains(c)')) {
        $('.blank-space:contains(c)').css("color", "black");
    } 
    if (!lettersInWord.includes("c")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>C</button>");       
        incorrectCounter++;
        console.log(incorrectCounter);
        showImage();
    }
    $('.c-btn').css("display", "none");
}

function D() {
    if ($('.blank-space:contains(d)')) {
        $('.blank-space:contains(d)').css("color", "black");
    }
    if (!lettersInWord.includes("d")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>D</button>");       
        incorrectCounter++;
        console.log(incorrectCounter);
        showImage();
    }
    $('.d-btn').css("display", "none");
}

function E() {
    if ($('.blank-space:contains(e)')) {
        $('.blank-space:contains(e)').css("color", "black");
    } 
    if (!lettersInWord.includes("e")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>E</button>");        
        incorrectCounter++;
        console.log(incorrectCounter);
        showImage();
    }
    $('.e-btn').css("display", "none");
}

function F() {
    if ($('.blank-space:contains(f)')) {
        $('.blank-space:contains(f)').css("color", "black");
    } 
    if (!lettersInWord.includes("f")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>F</button>");        
        incorrectCounter++;
        console.log(incorrectCounter);
        showImage();
    }
    $('.f-btn').css("display", "none");
}

function G() {
    if ($('.blank-space:contains(g)')) {
        $('.blank-space:contains(g)').css("color", "black");
    } 
    if (!lettersInWord.includes("g")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>G</button>");        
        incorrectCounter++;
        console.log(incorrectCounter);
        showImage();
    }
    $('.g-btn').css("display", "none");
}

function H() {
    if ($('.blank-space:contains(h)')) {
        $('.blank-space:contains(h)').css("color", "black");
    } 
    if (!lettersInWord.includes("h")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>H</button>");        
        incorrectCounter++;
        console.log(incorrectCounter);
        showImage();
    }
    $('.h-btn').css("display", "none");
}

function I() {
    if ($('.blank-space:contains(i)')) {
        $('.blank-space:contains(i)').css("color", "black");
    } 
    if (!lettersInWord.includes("i")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>I</button>");        
        incorrectCounter++;
        console.log(incorrectCounter);
        showImage();
    }
    $('.i-btn').css("display", "none");
}

function J() {
    if ($('.blank-space:contains(j)')) {
        $('.blank-space:contains(j)').css("color", "black");
    } 
    if (!lettersInWord.includes("j")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>J</button>");        
        incorrectCounter++;
        console.log(incorrectCounter);
        showImage();
    }
    $('.j-btn').css("display", "none");
}

function K() {
    if ($('.blank-space:contains(k)')) {
        $('.blank-space:contains(k)').css("color", "black");
    }
    if (!lettersInWord.includes("k")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>K</button>");        
        incorrectCounter++;
        console.log(incorrectCounter);
        showImage();
    }
    $('.k-btn').css("display", "none");
}

function L() {
    if ($('.blank-space:contains(l)')) {
        $('.blank-space:contains(l)').css("color", "black");
    } 
    if (!lettersInWord.includes("l")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>L</button>");        
        incorrectCounter++;
        console.log(incorrectCounter);
        showImage();
    }
    $('.l-btn').css("display", "none");
}

function M() {
    if ($('.blank-space:contains(m)')) {
        $('.blank-space:contains(m)').css("color", "black");
    }
    if (!lettersInWord.includes("m")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>M</button>");        
        incorrectCounter++;
        console.log(incorrectCounter);
        showImage();
    }
    $('.m-btn').css("display", "none");
}

function N() {
    if ($('.blank-space:contains(n)')) {
        $('.blank-space:contains(n)').css("color", "black");
    } 
    if (!lettersInWord.includes("n")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>N</button>");        
        incorrectCounter++;
        console.log(incorrectCounter);
        showImage();
    }
    $('.n-btn').css("display", "none");
}

function O() {
    if ($('.blank-space:contains(o)')) {
        $('.blank-space:contains(o)').css("color", "black");
    }
    if (!lettersInWord.includes("o")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>O</button>");       
        incorrectCounter++;
        console.log(incorrectCounter);
        showImage();
    }
    $('.o-btn').css("display", "none");
}

function P() {
    if ($('.blank-space:contains(p)')) {
        $('.blank-space:contains(p)').css("color", "black");
    } 
    if (!lettersInWord.includes("p")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>P</button>");       
        incorrectCounter++;
        console.log(incorrectCounter);
        showImage();
    }
    $('.p-btn').css("display", "none");
}

function Q() {
    if ($('.blank-space:contains(q)')) {
        $('.blank-space:contains(q)').css("color", "black");
    } 
    if (!lettersInWord.includes("q")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>Q</button>");        
        incorrectCounter++;
        console.log(incorrectCounter);
        showImage();
    }
    $('.q-btn').css("display", "none");
}

function R() {
    if ($('.blank-space:contains(r)')) {
        $('.blank-space:contains(r)').css("color", "black");
    } 
    if (!lettersInWord.includes("r")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>R</button>");        
        incorrectCounter++;
        console.log(incorrectCounter);
        showImage();
    }
    $('.r-btn').css("display", "none");
}

function S() {
    if ($('.blank-space:contains(s)')) {
        $('.blank-space:contains(s)').css("color", "black");
    } 
    if (!lettersInWord.includes("s")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>S</button>");        
        incorrectCounter++;
        console.log(incorrectCounter);
        showImage();
    }
    $('.s-btn').css("display", "none");
}

function T() {
    if ($('.blank-space:contains(t)')) {
        $('.blank-space:contains(t)').css("color", "black");
    } 
    if (!lettersInWord.includes("t")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>T</button>");        
        incorrectCounter++;
        console.log(incorrectCounter);
        showImage();
    }
    $('.t-btn').css("display", "none");
}

function U() {
    if ($('.blank-space:contains(u)')) {
        $('.blank-space:contains(u)').css("color", "black");
    } 
    if (!lettersInWord.includes("u")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>U</button>");       
        incorrectCounter++;
        console.log(incorrectCounter);
        showImage();
    }
    $('.u-btn').css("display", "none");
}

function V() {
    if ($('.blank-space:contains(v)')) {
        $('.blank-space:contains(v)').css("color", "black");
    } 
    if (!lettersInWord.includes("v")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>V</button>");       
        incorrectCounter++;
        console.log(incorrectCounter);
        showImage();
    }
    $('.v-btn').css("display", "none");
}

function W() {
    if ($('.blank-space:contains(w)')) {
        $('.blank-space:contains(w)').css("color", "black");
    } 
    if (!lettersInWord.includes("w")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>W</button>");        
        incorrectCounter++;
        console.log(incorrectCounter);
        showImage();
    }
    $('.w-btn').css("display", "none");
}

function X() {
    if ($('.blank-space:contains(x)')) {
        $('.blank-space:contains(x)').css("color", "black");
    } 
    if (!lettersInWord.includes("x")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>X</button>");        
        incorrectCounter++;
        console.log(incorrectCounter);
        showImage();
    }
    $('.x-btn').css("display", "none");
}
function Y() {
    if ($('.blank-space:contains(y)')) {
        $('.blank-space:contains(y)').css("color", "black");
    } 
    if (!lettersInWord.includes("y")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>Y</button>");        
        incorrectCounter++;
        console.log(incorrectCounter);
        showImage();
    }
    $('.y-btn').css("display", "none");
}

function Z() {
    if ($('.blank-space:contains(z)')) {
        $('.blank-space:contains(z)').css("color", "black");
    } 
    if (!lettersInWord.includes("z")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>Z</button>");        
        incorrectCounter++;
        console.log(incorrectCounter);
        showImage();
    }
    $('.z-btn').css("display", "none");
}




