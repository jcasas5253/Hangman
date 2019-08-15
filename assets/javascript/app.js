var words = ["abruptly", "absurd", "abyss", "affix", "askew", "avenue", "awkward", "axiom", "azure", "bagpipes", "bandwagon", "banjo", "bayou", "beekeeper", "bikini", "blitz", "blizzard", "boggle", "bookworm", "boxcar", "boxful", "buckaroo", "buffalo", "buffoon", "buxom", "buzzard", "buzzing", "buzzwords", "caliph", "cobweb", "cockiness", "croquet", "crypt", "curacao", "cycle", "daiquiri", "dirndl", "disavow", "dizzying", "duplex", "dwarves", "embezzle", "equip", "espionage", "euouae", "exodus", "faking", "fishhook", "fixable", "fjord", "flapjack", "flopping", "fluffiness", "flyby", "foxglove", "frazzled", "frizzled", "fuchsia", "funny", "gabby", "galaxy", "galvanize", "gazebo", "giaour", "gizmo", "glowworm", "glyph", "gnarly", "gnostic", "gossip", "grogginess",
"haiku", "haphazard", "hyphen", "iatrogenic", "icebox", "injury", "ivory", "ivy", "jackpot", "jaundice", "jawbreaker", "jaywalk", "jazziest", "jazzy", "jelly", "jigsaw", "jinx", "jiujitsu", "jockey", "jogging", "joking", "jovial", "joyful", "juicy", "jukebox", "jumbo", "kayak", "kazoo", "keyhole", "khaki", "kilobyte", "kiosk", "kitsch", "kiwifruit", "klutz", "knapsack", "larynx", "lengths", "lucky", "luxury", "lymph", "marquis", "matrix", "megahertz", "microwave", "mnemonic", "mystify", "naphtha", "nightclub", "nowadays", "numbskull", "nymph", "onyx", "ovary", "oxidize", "oxygen", "pajama", "peekaboo", "phlegm", "pixel", "pizazz", "pneumonia", "polka", "pshaw", "psyche", "puppy", "puzzling", "quartz", "queue", "quips", "quixotic", "quiz", "quizzes", "quorum", "razzmatazz",
"rhubarb", "rhythm", "rickshaw", "schnapps", "scratch", "shiv", "snazzy", "sphinx", "spritz", "squawk", "staff", "strength", "strengths", "stretch", "stronghold", "stymied", "subway", "swivel", "syndrome", "thriftless", "thumbscrew", "topaz", "transcript", "transgress", "transplant", "triphthong", "twelfth", "twelfths", "unknown", "unworthy", "unzip", "uptown", "vaporize", "vixen", "vodka", "voodoo", "vortex", "voyeurism", "walkway", "waltz", "wave", "wavy", "waxy", "wellspring", "wheezy", "whiskey", "whizzing", "whomever", "wimpy", "witchcraft", "wizard", "woozy", "wristwatch", "wyvern", "xylophone", "yachtsman", "yippee", "yoked", "youthful", "yummy", "zephyr", "zigzag", "zigzagging", "zilch", "zipper", "zodia"]

var random = words[Math.floor(Math.random() * words.length)];
var lettersInWord = [];
lettersInWord = random.split("");
console.log(lettersInWord);

function startGame() {
    var i;
    for (i = 0; i < lettersInWord.length; i++) {
        $('.word-container').append("<div class='blank-space'>" + lettersInWord[i] + "</div>");
    }
    $('.btn-container').css("display", "block");
    $('.img1').css("display", "block");
    $('.incorrect').css("display", "block");
    $('.new-game').css("display", "initial");
    $('.start-game').css("display", "none");
}

function newGame(lettersInWord) {
    $('.word-container').empty();
    $('.incorrect').empty();
    $('.a-btn, .b-btn, .c-btn, .d-btn, .e-btn, .f-btn, .g-btn, .h-btn, .i-btn, .j-btn, .k-btn, .l-btn, .m-btn, .n-btn, .o-btn, .p-btn, .q-btn, .r-btn, .s-btn, .t-btn, .u-btn, .v-btn, .w-btn, .x-btn, .y-btn, .z-btn').css("display", "inline-block");
    var random = words[Math.floor(Math.random() * words.length)];
    lettersInWord = random.split("");
    console.log(lettersInWord);
    var i;
    for (i = 0; i < lettersInWord.length; i++) {
        $('.word-container').append("<div class='blank-space'>" + lettersInWord[i] + "</div>");
    }
}

function A() {
    if ($('.blank-space:contains(a)')) {
        $('.blank-space:contains(a)').css("color", "black");
    }
    if (!lettersInWord.includes("a")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>A</button>");
        $('.a-btn').css("display", "none");
    }
}

function B() {
    if ($('.blank-space:contains(b)')) {
        $('.blank-space:contains(b)').css("color", "black");
    }
    if (!lettersInWord.includes("b")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>B</button>");
        $('.b-btn').css("display", "none");
    }
}

function C() {
    if ($('.blank-space:contains(c)')) {
        $('.blank-space:contains(c)').css("color", "black");
    } 
    if (!lettersInWord.includes("c")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>C</button>");
        $('.c-btn').css("display", "none");
    }
}

function D() {
    if ($('.blank-space:contains(d)')) {
        $('.blank-space:contains(d)').css("color", "black");
    }
    if (!lettersInWord.includes("d")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>D</button>");
        $('.d-btn').css("display", "none");
    }
}

function E() {
    if ($('.blank-space:contains(e)')) {
        $('.blank-space:contains(e)').css("color", "black");
    } 
    if (!lettersInWord.includes("e")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>E</button>");
        $('.e-btn').css("display", "none");
    }
}

function F() {
    if ($('.blank-space:contains(f)')) {
        $('.blank-space:contains(f)').css("color", "black");
    } 
    if (!lettersInWord.includes("f")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>F</button>");
        $('.f-btn').css("display", "none");
    }
}

function G() {
    if ($('.blank-space:contains(g)')) {
        $('.blank-space:contains(g)').css("color", "black");
    } 
    if (!lettersInWord.includes("g")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>G</button>");
        $('.g-btn').css("display", "none");
    }
}

function H() {
    if ($('.blank-space:contains(h)')) {
        $('.blank-space:contains(h)').css("color", "black");
    } 
    if (!lettersInWord.includes("h")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>H</button>");
        $('.h-btn').css("display", "none");
    }
}

function I() {
    if ($('.blank-space:contains(i)')) {
        $('.blank-space:contains(i)').css("color", "black");
    } 
    if (!lettersInWord.includes("i")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>I</button>");
        $('.i-btn').css("display", "none");
    }
}

function J() {
    if ($('.blank-space:contains(j)')) {
        $('.blank-space:contains(j)').css("color", "black");
    } 
    if (!lettersInWord.includes("j")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>J</button>");
        $('.j-btn').css("display", "none");
    }
}

function K() {
    if ($('.blank-space:contains(k)')) {
        $('.blank-space:contains(k)').css("color", "black");
    }
    if (!lettersInWord.includes("k")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>K</button>");
        $('.k-btn').css("display", "none");
    }
}

function L() {
    if ($('.blank-space:contains(l)')) {
        $('.blank-space:contains(l)').css("color", "black");
    } 
    if (!lettersInWord.includes("l")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>L</button>");
        $('.l-btn').css("display", "none");
    }
}

function M() {
    if ($('.blank-space:contains(m)')) {
        $('.blank-space:contains(m)').css("color", "black");
    }
    if (!lettersInWord.includes("m")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>M</button>");
        $('.m-btn').css("display", "none");
    }
}

function N() {
    if ($('.blank-space:contains(n)')) {
        $('.blank-space:contains(n)').css("color", "black");
    } 
    if (!lettersInWord.includes("n")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>N</button>");
        $('.n-btn').css("display", "none");
    }
}

function O() {
    if ($('.blank-space:contains(o)')) {
        $('.blank-space:contains(o)').css("color", "black");
    }
    if (!lettersInWord.includes("o")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>O</button>");
        $('.o-btn').css("display", "none");
    }
}

function P() {
    if ($('.blank-space:contains(p)')) {
        $('.blank-space:contains(p)').css("color", "black");
    } 
    if (!lettersInWord.includes("p")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>P</button>");
        $('.p-btn').css("display", "none");
    }
}

function Q() {
    if ($('.blank-space:contains(q)')) {
        $('.blank-space:contains(q)').css("color", "black");
    } 
    if (!lettersInWord.includes("q")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>Q</button>");
        $('.q-btn').css("display", "none");
    }
}

function R() {
    if ($('.blank-space:contains(r)')) {
        $('.blank-space:contains(r)').css("color", "black");
    } 
    if (!lettersInWord.includes("r")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>R</button>");
        $('.r-btn').css("display", "none");
    }
}

function S() {
    if ($('.blank-space:contains(s)')) {
        $('.blank-space:contains(s)').css("color", "black");
    } 
    if (!lettersInWord.includes("s")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>S</button>");
        $('.s-btn').css("display", "none");
    }
}

function T() {
    if ($('.blank-space:contains(t)')) {
        $('.blank-space:contains(t)').css("color", "black");
    } 
    if (!lettersInWord.includes("t")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>T</button>");
        $('.t-btn').css("display", "none");
    }
}

function U() {
    if ($('.blank-space:contains(u)')) {
        $('.blank-space:contains(u)').css("color", "black");
    } 
    if (!lettersInWord.includes("u")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>U</button>");
        $('.u-btn').css("display", "none");
    }
}

function V() {
    if ($('.blank-space:contains(v)')) {
        $('.blank-space:contains(v)').css("color", "black");
    } 
    if (!lettersInWord.includes("v")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>V</button>");
        $('.v-btn').css("display", "none");
    }
}

function W() {
    if ($('.blank-space:contains(w)')) {
        $('.blank-space:contains(w)').css("color", "black");
    } 
    if (!lettersInWord.includes("w")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>W</button>");
        $('.w-btn').css("display", "none");
    }
}

function X() {
    if ($('.blank-space:contains(x)')) {
        $('.blank-space:contains(x)').css("color", "black");
    } 
    if (!lettersInWord.includes("x")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>X</button>");
        $('.x-btn').css("display", "none");
    }
}
function Y() {
    if ($('.blank-space:contains(y)')) {
        $('.blank-space:contains(y)').css("color", "black");
    } 
    if (!lettersInWord.includes("y")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>Y</button>");
        $('.y-btn').css("display", "none");
    }
}

function Z() {
    if ($('.blank-space:contains(z)')) {
        $('.blank-space:contains(z)').css("color", "black");
    } 
    if (!lettersInWord.includes("z")) {
        $('.incorrect').append("<button  class= 'btn btn-outline-dark'>Z</button>");
        $('.z-btn').css("display", "none");
    }
}




