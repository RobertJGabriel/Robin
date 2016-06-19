require('events').EventEmitter.prototype._maxListeners = 100;
var firebase = require('firebase');
var config = {
    apiKey: "AIzaSyCdhHKrcs7-FDPNO3v2_DR0FgNnjC7eneQ",
    authDomain: "projectbird-robin.firebaseapp.com",
      serviceAccount: {
        "type": "service_account",
        "project_id": "projectbird-robin",
        "private_key_id": "6ade6c98c10217f5c08725791b2a9cbc834412ea",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC/ZL3CFzCB2Yog\nUelz8bYG0gEn9BekY8R4upfnSDUAddQP/Xe6T+UDvg5CV1YnlRqyNhWV4Q1Rlw5y\n07Ho6CxtgJJvB9QsJQvtVJ38QJ9uj9WkNt8WLDolPKx/6UuoH9FJ6uIXnhHgaVtt\nehWeoPrFhzEB/WkLb2sArlHMK+MzcHqIjmvkfsrgNWaQPZvPuj4z9IAtIe3wXU5+\n+Hw3r30OdQYJ5ThTILQ1u6HPz7gk2AsMJ1PZ8Z3yHQJ15r2NwqgV0CWe45Maa5/B\nG/LQC6d1raLPDO7iLlRCv8xTkOJSR5lBJYajmP1CaniOL6jWnIev9wkA++kf6l1f\n0Rge1nWzAgMBAAECggEAXg6VDqA0z2tn7RA0KS2dJeboeIkFYV1CPY59fkTG/03o\nhF8tCpue0WMCQOoIxfUJpJDdtMVftTwF9rpAUVRgGQQ5cmUniPY/0UdnSIM9lqkK\n9eOdaJkdjhUuNMIi0yGnyaqrp62f3WgJbVi07TrxYkdY90Bg8iS0MiZ4vlzHEAyY\nJVLLAkiJJne+/zrc1K6ISGjKJnurzXB+sApg8xeHXNbRwhm32C1GoVkCWjLTMK/r\n8tVP9ZKQDWBocRRBPqfvANO/P58znRv8sPf4KV+L+hGsM6cSrmBeo3lFGYSfh9CK\naVxBqzqKIZqSEd9UysPIvxjs3IUzF/AViOi/eISeCQKBgQD9qkkDmLo1Sz4Rq85Y\nEQH1i71kNwAZI2WhyuwHImdzyxDxdcjiB+htXnqm2IXwx27/UqbufXOYq4Ceo2XT\nGKNh6sH5eJbpJoiTfGBcrYz2LOFOGXuE8S0fikVkkz0bipZza53VecdfU3Zyzzuh\n0EiMo75qyPWJQrPq3zVnh+iWVQKBgQDBJ7l2RuQe7vHmJyHeaYIXNZyuAazHNSvI\n1khdq7p12pZh2Oz84YzoJPhRGFxgF8OTOd58JprMJlwef7KZkMQTI+NB6O7OHcNh\n4g3GFfhh7cQN5Iq+CKrQC4ysrNTiinzBwyG4LZe9jT5gRtjSdcEwq3k/kEcMFb/h\n6OY2cxST5wKBgQCMQfS/PVpwj1sRkEq23SiVKaAd4l92huDyNe6N/1LubrC+oh7i\nA/dbSetNh9l/ifZwzLWqlsks+F9U2Ao8T5o/UPvSQgBHiFvqGNJ7TCbuE2C8u1BV\n8Li/gMff1Z3rNZT82ttZp007Az4yOy3AyhbjVMK77sP9ElnDG4o+5aIQRQKBgQCF\nGIFkbe7tHctTwy1EW8GHiqq/AGp1Dj9wca+F1Dp00T2EiPysOCNnJ2pwPvAQSu+5\n+EtFkzhhaiFZ5rZDuQxTAAytsvsyzjF+tky1bRgtKrBIvm2YCtLg7sRti95ZiAH1\nZidLCSehNr1/i/IF+5w2lEHFOf6q5iXFXj2b0WqhiwKBgF6W4xmtQA8k6/wHa/ba\n2apFrc+ud6Lnu7YJyMf/4Cqb+5BCM+2rHRZJXFjCv5k/fhaVwqxsPKSyetMLyMAH\njKaULnN59j1nQZUELF4TyjCZNSWesnPwbXKeU0gOb4cwwHOo8ohFvX76gsoDHtkI\nLdUrPn3k1pt21LGrPwjc7Gn+\n-----END PRIVATE KEY-----\n",
        "client_email": "robin-584@projectbird-robin.iam.gserviceaccount.com",
        "client_id": "107620218150768080592",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://accounts.google.com/o/oauth2/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/robin-584%40projectbird-robin.iam.gserviceaccount.com"
      },
    databaseURL: "https://projectbird-robin.firebaseio.com",
    storageBucket: "projectbird-robin.appspot.com",
};

firebase.initializeApp(config);

var rootRef = firebase.database().ref();



//var request = require('request');
var async = require('async');
var chalk = require('chalk');
var listOfProfanityWords = ["4r5e", "5h1t", "5hit", "a55", "anal", "anus", "ar5e", "arrse", "arse", "ass", "ass-fucker", "asses", "assfucker", "assfukka", "asshole", "assholes", "asswhole", "a_s_s", "b!tch", "b00bs", "b17ch", "b1tch", "ballbag", "balls", "ballsack", "bastard", "beastial", "beastiality", "bellend", "bestial", "bestiality", "bi+ch", "biatch", "bitch", "bitcher", "bitchers", "bitches", "bitchin", "bitching", "bloody", "blow job", "blowjob", "blowjobs", "boiolas", "bollock", "bollok", "boner", "boob", "boobs", "booobs", "boooobs", "booooobs", "booooooobs", "breasts", "buceta", "bugger", "bum", "bunny fucker", "butt", "butthole", "buttmuch", "buttplug", "c0ck", "c0cksucker", "carpet muncher", "cawk", "chink", "cipa", "cl1t", "clit", "clitoris", "clits", "cnut", "cock", "cock-sucker", "cockface", "cockhead", "cockmunch", "cockmuncher", "cocks", "cocksuck ", "cocksucked ", "cocksucker", "cocksucking", "cocksucks ", "cocksuka", "cocksukka", "cok", "cokmuncher", "coksucka", "coon", "cox", "crap", "cum", "cummer", "cumming", "cums", "cumshot", "cunilingus", "cunillingus", "cunnilingus", "cunt", "cuntlick ", "cuntlicker ", "cuntlicking ", "cunts", "cyalis", "cyberfuc", "cyberfuck ", "cyberfucked ", "cyberfucker", "cyberfuckers", "cyberfucking ", "d1ck", "damn", "dick", "dickhead", "dildo", "dildos", "dink", "dinks", "dirsa", "dlck", "dog-fucker", "doggin", "dogging", "donkeyribber", "doosh", "duche", "dyke", "ejaculate", "ejaculated", "ejaculates ", "ejaculating ", "ejaculatings", "ejaculation", "ejakulate", "f u c k", "f u c k e r", "f4nny", "fag", "fagging", "faggitt", "faggot", "faggs", "fagot", "fagots", "fags", "fanny", "fannyflaps", "fannyfucker", "fanyy", "fatass", "fcuk", "fcuker", "fcuking", "feck", "fecker", "felching", "fellate", "fellatio", "fingerfuck ", "fingerfucked ", "fingerfucker ", "fingerfuckers", "fingerfucking ", "fingerfucks ", "fistfuck", "fistfucked ", "fistfucker ", "fistfuckers ", "fistfucking ", "fistfuckings ", "fistfucks ", "flange", "fook", "fooker", "fuck", "fucka", "fucked", "fucker", "fuckers", "fuckhead", "fuckheads", "fuckin", "fucking", "fuckings", "fuckingshitmotherfucker", "fuckme ", "fucks", "fuckwhit", "fuckwit", "fudge packer", "fudgepacker", "fuk", "fuker", "fukker", "fukkin", "fuks", "fukwhit", "fukwit", "fux", "fux0r", "f_u_c_k", "gangbang", "gangbanged ", "gangbangs ", "gaylord", "gaysex", "goatse", "God", "god-dam", "god-damned", "goddamn", "goddamned", "hardcoresex ", "hell", "heshe", "hoar", "hoare", "hoer", "homo", "hore", "horniest", "horny", "hotsex", "jack-off ", "jackoff", "jap", "jerk-off ", "jism", "jiz ", "jizm ", "jizz", "kawk", "knob", "knobead", "knobed", "knobend", "knobhead", "knobjocky", "knobjokey", "kock", "kondum", "kondums", "kum", "kummer", "kumming", "kums", "kunilingus", "l3i+ch", "l3itch", "labia", "lmfao", "lust", "lusting", "m0f0", "m0fo", "m45terbate", "ma5terb8", "ma5terbate", "masochist", "master-bate", "masterb8", "masterbat*", "masterbat3", "masterbate", "masterbation", "masterbations", "masturbate", "mo-fo", "mof0", "mofo", "mothafuck", "mothafucka", "mothafuckas", "mothafuckaz", "mothafucked ", "mothafucker", "mothafuckers", "mothafuckin", "mothafucking ", "mothafuckings", "mothafucks", "mother fucker", "motherfuck", "motherfucked", "motherfucker", "motherfuckers", "motherfuckin", "motherfucking", "motherfuckings", "motherfuckka", "motherfucks", "muff", "mutha", "muthafecker", "muthafuckker", "muther", "mutherfucker", "n1gga", "n1gger", "nazi", "nigg3r", "nigg4h", "nigga", "niggah", "niggas", "niggaz", "nigger", "niggers ", "nob", "nob jokey", "nobhead", "nobjocky", "nobjokey", "numbnuts", "nutsack", "orgasim ", "orgasims ", "orgasm", "orgasms ", "p0rn", "pawn", "pecker", "penis", "penisfucker", "phonesex", "phuck", "phuk", "phuked", "phuking", "phukked", "phukking", "phuks", "phuq", "pigfucker", "pimpis", "piss", "pissed", "pisser", "pissers", "pisses ", "pissflaps", "pissin ", "pissing", "pissoff ", "poop", "porn", "porno", "pornography", "pornos", "prick", "pricks ", "pron", "pube", "pusse", "pussi", "pussies", "pussy", "pussys ", "rectum", "retard", "rimjaw", "rimming", "s hit", "s.o.b.", "sadist", "schlong", "screwing", "scroat", "scrote", "scrotum", "semen", "sex", "sh!+", "sh!t", "sh1t", "shag", "shagger", "shaggin", "shagging", "shemale", "shi+", "shit", "shitdick", "shite", "shited", "shitey", "shitfuck", "shitfull", "shithead", "shiting", "shitings", "shits", "shitted", "shitter", "shitters ", "shitting", "shittings", "shitty ", "skank", "slut", "sluts", "smegma", "smut", "snatch", "son-of-a-bitch", "spac", "spunk", "s_h_i_t", "t1tt1e5", "t1tties", "teets", "teez", "testical", "testicle", "tit", "titfuck", "tits", "titt", "tittie5", "tittiefucker", "titties", "tittyfuck", "tittywank", "titwank", "tosser", "turd", "tw4t", "twat", "twathead", "twatty", "twunt", "twunter", "v14gra", "v1gra", "vagina", "viagra", "vulva", "w00se", "wang", "wank", "wanker", "wanky", "whoar", "whore", "willies", "willy", "xrated", "xxx"];

var listOfGoodWords = ["the","i", "of", "and", "to", "a", "in", "for", "is", "on", "that", "by", "this", "with", "i", "you", "it", "not", "or", "be", "are", "from", "at", "as", "your", "all", "have", "new", "more", "an", "was", "we", "will", "home", "can", "us", "about", "if", "page", "my", "has", "search", "free", "but", "our", "one", "other", "do", "no", "information", "time", "they", "site", "he", "up", "may", "what", "which", "their", "news", "out", "use", "any", "there", "see", "only", "so", "his", "when", "contact", "here", "business", "who", "web", "also", "now", "help", "get", "pm", "view", "online", "c", "e", "first", "am", "been", "would", "how", "were", "me", "s", "services", "some", "these", "click", "its", "like", "service", "x", "than", "find", "price", "date", "back", "top", "people", "had", "list", "name", "just", "over", "state", "year", "day", "into", "email", "two", "health", "n", "world", "re", "next", "used", "go", "b", "work", "last", "most", "products", "music", "buy", "data", "make", "them", "should", "product", "system", "post", "her", "city","my", "a","or"];

function uploadProfanityBase(words) {
    for (var i = 0; i < words.length; i++) {
        async.waterfall([
            async.apply(saveToFirebase, words[i])
        ], function(err, words) {
            console.log("done");
        });
    }

    function saveToFirebase(words, callback) {
        var newChildRef = rootRef.push;
        console.log(words);
        var usersRef = rootRef.child("profanity");
        usersRef.push({
            word: words,
            type: "bad"
        });
    }
};

function uploadProfanityBase2(words) {
    for (var i = 0; i < words.length; i++) {
        async.waterfall([
            async.apply(saveToFirebase, words[i])
        ], function(err, words) {
            console.log("done");
        });
    }

    function saveToFirebase(words, callback) {
        var newChildRef = rootRef.push();
        console.log(words);
        var usersRef = rootRef.child("profanity");
        usersRef.push({
            word: words,
            type: "good"
        });
    }
};

//uploadProfanityBase2(listOfVerbs);

uploadProfanityBase(listOfProfanityWords);

uploadProfanityBase2(listOfGoodWords);
