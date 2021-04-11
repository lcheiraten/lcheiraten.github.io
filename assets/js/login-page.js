const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

const userdb = [
    { name: "baer", pw: "mum", wtext: "Liebe Mama", anrede: "Dir", anrede2: "gib", anrede3: "du kommen kannst", absender: "Baerbel" },
    {
      name: "kmep",
      pw: "zuz",
      wtext: "Liebe Karin, Michel, Emma und Paul",
      anrede: "Euch",
      anrede2: "gebt",
      anrede3: "ihr kommen könnt",
      absender: "LidlesEisele"
    },
    {
      name: "lunaldema",
      pw: "stomi",
      wtext: "Liebe Luna, lieber Dennis",
      anrede: "Euch",
      anrede2: "gebt",
      anrede3: "ihr kommen könnt",
      absender: "Luna, Dennis"
    },
    {
      name: "affl",
      pw: "cali19",
      wtext: "Liebe Asti, Lieber Felix, Finn und Linus",
      anrede: "Euch",
      anrede2: "gebt",
      anrede3: "ihr kommen könnt",
      absender: "AstiFam"
    },
    {
      name: "gc71642",
      pw: "italien2014",
      wtext: "Liebe Mama, Lieber Papa",
      anrede: "Euch",
      anrede2: "gebt",
      anrede3: "ihr kommen könnt",
      absender: "Papa/Mama"
    },
    {
      name: "karandi",
      pw: "kaunertal",
      wtext: "Liebe Karo, Lieber Andi",
      anrede: "Euch",
      anrede2: "gebt",
      anrede3: "ihr kommen könnt",
      absender: "KaroAndi"
    },
    {
      name: "opa",
      pw: "viertele",
      wtext: "Lieber Opa A",
      anrede: "Dir",
      anrede2: "gib",
      anrede3: "du kommen kannst",
      absender: "Opa A"
    },
    {
      name: "oma",
      pw: "filzstiefel",
      wtext: "Liebe Oma",
      anrede: "Dir",
      anrede2: "gib",
      anrede3: "du kommen kannst",
      absender: "Oma Ira"
    },
    {
      name: "nati",
      pw: "palakpaneer",
      wtext: "Liebe Nati",
      anrede: "Dir",
      anrede2: "gib",
      anrede3: "du kommen kannst",
      absender: "Nati"
    },
    {
      name: "joergluca",
      pw: "lindenberg",
      wtext: "Lieber Jörg, Lieber Luca",
      anrede: "Euch",
      anrede2: "gebt",
      anrede3: "ihr kommen könnt",
      absender: "JoergLuca"
    },
    {
      name: "bodja",
      pw: "fahrrad",
      wtext: "Lieber Bogdan",
      anrede: "Dir",
      anrede2: "gib",
      anrede3: "du kommen kannst",
      absender: "Onkel Bogdan"
    },
    {
      name: "innava",
      pw: "italia2016",
      wtext: "Liebe Inna, Lieber Slava",
      anrede: "Euch",
      anrede2: "gebt",
      anrede3: "ihr kommen könnt",
      absender: "Fam. Futisch"
    },
    {
      name: "lenas",
      pw: "puff",
      wtext: "Liebe Lena, Lieber Thomas",
      anrede: "Euch",
      anrede2: "gebt",
      anrede3: "ihr kommen könnt",
      absender: "Lena/Thomas"
    },
    {
      name: "iracel",
      pw: "rotwein",
      wtext: "Liebe Irina, Lieber Marcel",
      anrede: "Euch",
      anrede2: "gebt",
      anrede3: "ihr kommen könnt",
      absender: "Ira/Marcel"
    },
    {
      name: "vitkaja",
      pw: "erdbeerkuchen",
      wtext: "Liebe Katja, Lieber Viktor",
      anrede: "Euch",
      anrede2: "gebt",
      anrede3: "ihr kommen könnt",
      absender: "Katja/Viktor"
    },
    {
      name: "simowanjan",
      pw: "rybalku",
      wtext: "Liebe Marina, Lieber Kolja",
      anrede: "Euch",
      anrede2: "gebt",
      anrede3: "ihr kommen könnt",
      absender: "Fam. Simowanjan"
    },
    {
      name: "sell",
      pw: "minecraft2020",
      wtext: "Liebe Silke, Edi, Lisa und Luke",
      anrede: "Euch",
      anrede2: "gebt",
      anrede3: "ihr kommen könnt",
      absender: "Fam. Kubotat/Grassmann"
    },
    {
      name: "tabl",
      pw: "konstanz2014",
      wtext: "Liebe Tabea",
      anrede: "Dir",
      anrede2: "gib",
      anrede3: "du kommen kannst",
      absender: "Trauzeugin Tabl"
    },
    {
      name: "paksl",
      pw: "kanzler2044",
      wtext: "Lieber Paksel",
      anrede: "Dir",
      anrede2: "gib",
      anrede3: "du kommen kannst",
      absender: "Trauzeuge Paksl"
    },
    {
      name: "molfaa",
      pw: "feiern2021",
      wtext: "Liebe Moni, Rolf, Andreas, Alina",
      anrede: "Euch",
      anrede2: "gebt",
      anrede3: "ihr kommen könnt",
      absender: "Fam. Woernsch"
    },{
      name: "marainerice",
      pw: "frozen2",
      wtext: "Liebe Maristella und Beatrice, Lieber Rainer",
      anrede: "Euch",
      anrede2: "gebt",
      anrede3: "ihr kommen könnt",
      absender: "Fam. Eisele"
    },
    {
      name: "winnie",
      pw: "dasfest2022",
      wtext: "Lieber Winfried",
      anrede: "Dir",
      anrede2: "gib",
      anrede3: "du kommen kannst",
      absender: "Winnie"
    },
    {
      name: "omaheide",
      pw: "neckarweihingen",
      wtext: "Liebe Oma Heide",
      anrede: "Dir",
      anrede2: "gib",
      anrede3: "du kommen kannst",
      absender: "Oma Heide"
    },
    {
      name: "neltobander",
      pw: "zusammen21",
      wtext: "Liebe Nelli, Lieber Tobias und Alex",
      anrede: "Euch",
      anrede2: "gebt",
      anrede3: "ihr kommen könnt",
      absender: "Nelli und Co"
    },
    {
      name: "ratters",
      pw: "tanzen21",
      wtext: "Liebe Lena, Andreas, Amalia, Daniel",
      anrede: "Euch",
      anrede2: "gebt",
      anrede3: "ihr kommen könnt",
      absender: "Die Ratters"
    },
    {
      name: "dnde",
      pw: "eishalle",
      wtext: "Liebe Natsha, Lieber Dima, Dennis und Edwin",
      anrede: "Euch",
      anrede2: "gebt",
      anrede3: "ihr kommen könnt",
      absender: "Fam. Studinsky Dima"
    },
    {
      name: "polle",
      pw: "wesseling",
      wtext: "Liebe Lena, Christina und Lieber Sascha",
      anrede: "Euch",
      anrede2: "gebt",
      anrede3: "ihr kommen könnt",
      absender: "Fam. Polle"
    },
    {
      name: "evigen",
      pw: "gopfm",
      wtext: "Liebe Evi, Lieber Eugen",
      anrede: "Euch",
      anrede2: "gebt",
      anrede3: "ihr kommen könnt",
      absender: "Fam. Eugen/ia"
    },
    {
      name: "muellers",
      pw: "bvb09",
      wtext: "Liebe Olija, Alina, Lea und Lieber Sascha",
      anrede: "Euch",
      anrede2: "gebt",
      anrede3: "ihr kommen könnt",
      absender: "Fam. Mueller"
    },
    {
      name: "anna",
      pw: "gummersbach",
      wtext: "Liebe Anna",
      anrede: "Dir",
      anrede2: "gib",
      anrede3: "du kommen kannst",
      absender: "Anna Mueller"
    },
    {
      name: "kater",
      pw: "basketball",
      wtext: "Liebe Katja, Leyla und Lieber Ermin",
      anrede: "Euch",
      anrede2: "gebt",
      anrede3: "ihr kommen könnt",
      absender: "Fam. Ermin"
    },
    {
      name: "ritabriel",
      pw: "partywuhu",
      wtext: "Liebe Rita, Lieber Gabriel",
      anrede: "Euch",
      anrede2: "gebt",
      anrede3: "ihr kommen könnt",
      absender: "Fam. Gabriel/Rita"
    },
    {
      name: "schaffner",
      pw: "fckoeln",
      wtext: "Liebe Lydia, Lieber Hans",
      anrede: "Euch",
      anrede2: "gebt",
      anrede3: "ihr kommen könnt",
      absender: "Fam. Schaffner"
    },
    {
      name: "olgannalu",
      pw: "steinplatz",
      wtext: "Liebe Olga, Anna-Emilia und Lieber Luis",
      anrede: "Euch",
      anrede2: "gebt",
      anrede3: "ihr kommen könnt",
      absender: "Fam. Simo-Genao"
    },
    {
      name: "josira",
      pw: "otlg",
      wtext: "Liebe Irina, Lieber Josef",
      anrede: "Euch",
      anrede2: "gebt",
      anrede3: "ihr kommen könnt",
      absender: "JosefIrina"
    },
    {
      name: "maronas",
      pw: "zbau",
      wtext: "Liebe Maren, Lieber Jonas",
      anrede: "Euch",
      anrede2: "gebt",
      anrede3: "ihr kommen könnt",
      absender: "MarenJonas"
    },
    {
      name: "ninalius",
      pw: "Nina",
      wtext: "Liebe Nina, Lieber Julius",
      anrede: "Euch",
      anrede2: "gebt",
      anrede3: "ihr kommen könnt",
      absender: "Nina"
    },
    {
      name: "lias",
      pw: "muusii",
      wtext: "Liebe Lisa, Lieber Tobias",
      anrede: "Euch",
      anrede2: "gebt",
      anrede3: "ihr kommen könnt",
      absender: "Lisa Tobias"
    },
    {
      name: "dennis",
      pw: "architekt",
      wtext: "Lieber Dennis",
      anrede: "Dir",
      anrede2: "gib",
      anrede3: "du kommen kannst",
      absender: "Dennis"
    },
    {
      name: "mammutis",
      pw: "hindenburg",
      wtext: "Liebe Lindit, Lieber Lutfe, Yasin",
      anrede: "Euch",
      anrede2: "gebt",
      anrede3: "ihr kommen könnt",
      absender: "Fam. Mammuti"
    },
    {
      name: "mick",
      pw: "goldenboy",
      wtext: "Liebe Milena, Lieber Patrick",
      anrede: "Euch",
      anrede2: "gebt",
      anrede3: "ihr kommen könnt",
      absender: "Fam. Schilling"
    },
    {
      name: "felona",
      pw: "stuggi0711",
      wtext: "Liebe Ramona, Lieber Felix",
      anrede: "Euch",
      anrede2: "gebt",
      anrede3: "ihr kommen könnt",
      absender: "Fam. Rittmann"
    },
    {
      name: "janda",
      pw: "nokiffikiffi",
      wtext: "Liebe Linda, Lieber Jan",
      anrede: "Euch",
      anrede2: "gebt",
      anrede3: "ihr kommen könnt",
      absender: "Fam. Bieser"
    },
    {
      name: "esmanes",
      pw: "bsmlhhmdl",
      wtext: "Liebe Esma, Lieber Enes",
      anrede: "Euch",
      anrede2: "gebt",
      anrede3: "ihr kommen könnt",
      absender: "Fam. Aktay"
    },
    {
      name: "ritu",
      pw: "berrys2021",
      wtext: "Lieber Tobi",
      anrede: "Dir",
      anrede2: "gib",
      anrede3: "du kommen kannst",
      absender: "Fam. Bartsch"
    },
    {
      name: "leto",
      pw: "amar",
      wtext: "Liebe Leti, Lieber Bruno",
      anrede: "Euch",
      anrede2: "gebt",
      anrede3: "ihr kommen könnt",
      absender: "Bruns"
    },
    {
      name: 188,
      pw: 1888888,
      wtext: "Liebe Swet, Lieber Roman",
      anrede: "Euch",
      anrede2: "gebt",
      anrede3: "ihr kommen könnt",
      absender: "Fam. Kulinic"
    },
    {
      name: "lula",
      pw: "toosieslide",
      wtext: "Liebe Laura, Lieber Luki",
      anrede: "Euch",
      anrede2: "gebt",
      anrede3: "ihr kommen könnt",
      absender: "Fam. Rind"
    },
    {
      name: "alesan",
      pw: "gollandia",
      wtext: "Liebe Alessa, Lieber Florian",
      anrede: "Euch",
      anrede2: "gebt",
      anrede3: "ihr kommen könnt",
      absender: "Flo Alessa"
    },
    {
      name: "sabu",
      pw: "wasenfeschd",
      wtext: "Liebe Sabi, Lieber Manu",
      anrede: "Euch",
      anrede2: "gebt",
      anrede3: "ihr kommen könnt",
      absender: "Fam. Woelfel"
    },
    {
      name: "julanni",
      pw: "giolauterbachhaha",
      wtext: "Liebe Jules, Lieber Giova",
      anrede: "Euch",
      anrede2: "gebt",
      anrede3: "ihr kommen könnt",
      absender: "Fam. Gradulone"
    },
    {
      name: "gonzo",
      pw: "gonzogateshaha",
      wtext: "Lieber Gonzo",
      anrede: "Dir",
      anrede2: "gib",
      anrede3: "du kommen kannst",
      absender: "Gonzo"
    },
    {
      name: "mativa",
      pw: "vfbole",
      wtext: "Liebe Iva, Lieber Matze",
      anrede: "Euch",
      anrede2: "gebt",
      anrede3: "ihr kommen könnt",
      absender: "Matze Iva"
    },
    {
      name: "carlito",
      pw: "caribeancool",
      wtext: "Liebe Caro, Lieber Stehle",
      anrede: "Euch",
      anrede2: "gebt",
      anrede3: "ihr kommen könnt",
      absender: "Caro / Stehle"
    },
    {
      name: "sabinkai",
      pw: "kaffee",
      wtext: "Liebe Sabin, Lieber Kai",
      anrede: "Euch",
      anrede2: "gebt",
      anrede3: "ihr kommen könnt",
      absender: "SabinKai"
    },
    {
      name: "marc",
      pw: "vinoalacasa",
      wtext: "Lieber Marc",
      anrede: "Dir",
      anrede2: "gib",
      anrede3: "du kommen kannst",
      absender: "Maki"
    },
    {
      name: "abbas",
      pw: "bozkurt",
      wtext: "Lieber Abbas",
      anrede: "Dir",
      anrede2: "gib",
      anrede3: "du kommen kannst",
      absender: "Abbas"
    },
    {
      name: "sonjim",
      pw: "cherrys",
      wtext: "Liebe Sonja, Lieber Howi",
      anrede: "Euch",
      anrede2: "gebt",
      anrede3: "ihr kommen könnt",
      absender: "Tim Sonja"
    },
    {
      name: "smiths",
      pw: "indianahoosiers",
      wtext: "Liebe Melissa, Lieber Nate und Owen",
      anrede: "Euch",
      anrede2: "gebt",
      anrede3: "ihr kommen könnt",
      absender: "Fam Smith"
    },
    {
      name: "johaecker",
      pw: "amsti2020",
      wtext: "Liebe Johanna, Lieber Fabi",
      anrede: "Euch",
      anrede2: "gebt",
      anrede3: "ihr kommen könnt",
      absender: "Haecker / Johanna"
    },
    {
      name: "omaopa",
      pw: "mariawalter",
      wtext: "Liebe Oma Maria, Lieber Opa Walter",
      anrede: "Euch",
      anrede2: "gebt",
      anrede3: "ihr kommen könnt",
      absender: "Oma Maria Opa Walter"
    },
    {
      name: "parin",
      pw: "nachbar2015",
      wtext: "Lieber Parin",
      anrede: "Dir",
      anrede2: "gib",
      anrede3: "du kommen kannst",
      absender: "Parin"
    }
  ]

document.addEventListener("DOMContentLoaded", function() {
  if(window.localStorage.getItem('username') && window.localStorage.getItem('password')) {
    loginButton.click();
  }
});


loginButton.addEventListener("click", (e) => {
    e.preventDefault();

    var username = loginForm.username.value;
    var password = loginForm.password.value;

    if(window.localStorage.getItem('username') && window.localStorage.getItem('password')) {
      username = window.localStorage.getItem('username');
      password = window.localStorage.getItem('password');
    }

    
    let authObj = userdb.find(o => o.name === username);
    console.log(authObj);
    try {
        if (username === authObj.name && password === authObj.pw) {
            document.getElementById("welcomeText").innerHTML = authObj.wtext;
            document.getElementById("anrede").innerHTML = authObj.anrede;
            document.getElementById("anrede2").innerHTML = authObj.anrede2;
            document.getElementById("anrede3").innerHTML = authObj.anrede3;
            document.getElementById("absender").value = authObj.absender;

            window.localStorage.setItem('username', authObj.name);
            window.localStorage.setItem('password', authObj.pw);

            
            var loginInterface = document.getElementById("overlay");
            if (loginInterface.style.display === "none") {
              loginInterface.style.display = "block";
            } else {
              loginInterface.style.display = "none";
            }
            showConfetti();
            showMoreConfetti();
        } else {
            loginErrorMsg.style.opacity = 1;
        }
    } catch (error) {
        console.log(error)
    }

})

document.onclick = function() {
  showConfetti();
}

function showMoreConfetti() {
  var duration = 7 * 1000;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  var interval = setInterval(function() {
    var timeLeft = animationEnd - Date.now();
  
    if (timeLeft <= 0) {
      return clearInterval(interval);
    }
    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti(Object.assign({}, defaults, { particleCount, colors: ['#ddb7ab', '#efd9d1', '#CD5C5C', '#800000', '#f37f8c', '#caeefc', '#ffffb0', '#b1c184'] ,origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
    confetti(Object.assign({}, defaults, { particleCount, colors: ['#ddb7ab', '#efd9d1', '#CD5C5C', '#800000', '#f37f8c', '#caeefc', '#ffffb0', '#b1c184'], origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));

  }, 250);
}




function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}


function showConfetti() {
    fire(0.25, {
        spread: 26,
        startVelocity: 55,
      });
      fire(0.2, {
        spread: 60,
      });
      fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 45,
      });
    }


var count = 200;
var defaults = {
  origin: { y: 0.7 }
};


function fire(particleRatio, opts) {
  confetti(Object.assign({}, defaults, opts, {
    particleCount: Math.floor(count * particleRatio), colors: ['#ddb7ab', '#efd9d1', '#CD5C5C', '#800000', '#f37f8c', '#caeefc', '#ffffb0', '#b1c184'],
  }));
}

