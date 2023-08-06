// code adapted from Jacob Rivkin
// https://www.youtube.com/watch?v=hxjEl-pun7o

// GLOBAL VARIABLES

let textures = []; // CREATE AN EMPTY ARRAY TO STORE VARIABLES
let numTextures = 11;
let tx1, tx2, tx3, tx4, tx5, tx6, tx7;
let p1, p2, p3, p4, p5, p6, p7, p8;
let blend;
let colourValue, tf1, tf2, tf3, ts1, ts2, ts3;
let fontSize;
let w = window.innerWidth;
let h = window.innerHeight;


//LOAD IMAGES BEFORE THE PROGRAM RUNS
function preload() {
  
  //least efficient way, but most straightforward way
  // store image in a variable
  
  //loading texture images
  tx1 = loadImage('tx01.jpg');
  tx2 = loadImage('tx02.jpg');
  tx3 = loadImage('tx03.JPG');
  tx5 = loadImage('tx05.JPG');
  tx4 = loadImage('tx04.JPG');
  tx6 = loadImage('tx06.JPG');
  tx7 = loadImage('tx07.JPG');
  tx8 = loadImage('tx08.jpg');
  tx9 = loadImage('tx09.jpg');
  tx10 = loadImage('tx10.jpg');
  tx11 = loadImage('tx11.jpg');
  tx12 = loadImage('tx12.jpg');
  textures = [tx1,tx2,tx3,tx4,tx5,tx6,tx7, tx8, tx9, tx10, tx11, tx12]; // store variables in an array, see top
  
  //loading portal drawings
  p1 = loadImage('joshportal.jpeg');
  p2 = loadImage('joshportal2.jpeg');
  p3 = loadImage('minnaportal.JPG');
  p4 = loadImage('clareportal.JPG');
  p5 = loadImage('daveportal.jpeg');
  p6 = loadImage('honeybeeportal.PNG');
  p7 = loadImage('liamportal.JPG');
  p8 = loadImage('seamusportal.JPG');
  portals = [p1, p2, p3, p4, p5, p6, p7, p8];
  
  
// // // the most efficient way using a for loop and concatenation
// for (let i = 0; i < numCards; i++) {
// // // store each image directly into the array
// // // you must use the naming convention demonstrated - 0,1,2,3
// cards[i] = loadImage('card' + i + '.png');
// console.log();
// }
  
}

// ACTUAL SKETCH BELOW
function setup() {
  createCanvas(w, h);
  noLoop();

  background(255);
  
  //draw the image from the center of the image
  imageMode(CENTER);
  // image(img, 10, 10, 50, 50);
  layer1 = random(textures);
  layer2 = random(textures);
  layer3 = random(textures);
  layer4 = random(textures);
  layer5 = random(textures);
  portal = random(portals);
  blend = [ADD, DARKEST, LIGHTEST, DIFFERENCE, EXCLUSION, MULTIPLY, OVERLAY, HARD_LIGHT, SOFT_LIGHT, DODGE, BURN];
  rB1 = random(blend)
  rB2 = random(blend)
  rB3 = random(blend)
  topBlend = [ADD, DIFFERENCE, EXCLUSION, SCREEN, OVERLAY, HARD_LIGHT, SOFT_LIGHT, DODGE, BURN, LIGHTEST];
  tB1 = random(topBlend);
  tB2 = random(topBlend);
  portalBlend = [ADD, DARKEST, LIGHTEST, DIFFERENCE, EXCLUSION, OVERLAY, HARD_LIGHT, SOFT_LIGHT, DODGE, BURN];
  pB = random(portalBlend);
  txtBlend = [ADD, DARKEST, LIGHTEST, DIFFERENCE, EXCLUSION, MULTIPLY, OVERLAY, HARD_LIGHT, SOFT_LIGHT, DODGE];
  txtB = random(txtBlend);
  //store random image in a variable
  //let randoImg = random(textures)
  //the array is put into the random function, it will choose one index value at random
  
  //text colour randomisation
  tf1 = random(0, 255);
  tf2 = random(0, 255);
  tf3 = random(0, 255);
  ts1 = random(0, 255);
  ts2 = random(0, 255);
  ts3 = random(0, 255);
  
  //text size adjusting
  fontSize = h/30;
  
  //draw to the canvas using the random
  //image(image, x position, y position, image width, image height)
  image(layer1, w/2, h/2, w, h);
  blendMode(rB1);
  image(layer2, w/2, h/2, w, h);
  blendMode(rB2);
  image(layer3, w/2, h/2, w, h);
  blendMode(rB3);
  image(layer4, w/2, h/2, w, h);
  blendMode(tB1);
  image(layer5, w/2, h/2, w, h);
  
  blendMode(pB);
  image(portal, w/2, h/2, w, h);
  
  //text
    let IDnumber = int(random(10101010,99999999))
  
    //random names
  
  let firstNameList = [
    "Maria",
    "Nushi",
    "Mohammed",
    "Jose",
    "Muhammad",
    "Mohamed",
    "Wei",
    "Mohammad",
    "Ahmed",
    "Yan",
    "Ali",
    "John",
    "David",
    "Li",
    "Abdul",
    "Ana",
    "Ying",
    "Michael",
    "Juan",
    "Anna",
    "Mary",
    "Jean",
    "Robert",
    "Daniel",
    "Luis",
    "Carlos",
    "James",
    "Antonio",
    "Joseph",
    "Hui",
    "Elena",
    "Francisco",
    "Hong",
    "Maria",
    "Min",
    "Lei",
    "Yu",
    "Ibrahim",
    "Peter",
    "Fatima",
    "Aleksandr",
    "Richard",
    "Xin",
    "Bin",
    "Paul",
    "Ping",
    "Lin",
    "Olga",
    "Sri",
    "Pedro",
    "William",
    "Rosa",
    "Thomas",
    "Jorge",
    "Yong",
    "Elizabeth",
    "Sergey",
    "Ram",
    "Patricia",
    "Hassan",
    "Anita",
    "Manuel",
    "Victor",
    "Sandra",
    "Ming",
    "Siti",
    "Miguel",
    "Emmanuel",
    "Samuel",
    "Ling",
    "Charles",
    "Sarah",
    "Mario",
    "Joao",
    "Tatyana",
    "Mark",
    "Rita",
    "Martin",
    "Svetlana",
    "Patrick",
    "Natalya",
    "Qing",
    "Ahmad",
    "Martha",
    "Andrey",
    "Sunita",
    "Andrea",
    "Christine",
    "Irina",
    "Laura",
    "Linda",
    "Marina",
    "Carmen",
    "Ghulam",
    "Vladimir",
    "Barbara",
    "Angela",
    "George",
    "Roberto",
    "Peng",
    "Ivan",
    "Alexander",
    "Ekaterina",
    "Qiang",
    "Yun",
    "Jesus",
    "Susan",
    "Sara",
    "Noor",
    "Mariam",
    "Dmitriy",
    "Eric",
    "Zahra",
    "Fatma",
    "Fernando",
    "Esther",
    "Jin",
    "Diana",
    "Mahmoud",
    "Chao",
    "Rong",
    "Santosh",
    "Nancy",
    "Musa",
    "Anh",
    "Omar",
    "Jennifer",
    "Gang",
    "Yue",
    "Claudia",
    "Maryam",
    "Gloria",
    "Ruth",
    "Teresa",
    "Sanjay",
    "Na",
    "Nur",
    "Kyaw",
    "Francis",
    "Amina",
    "Denis",
    "Stephen",
    "Sunil",
    "Gabriel",
    "Andrew",
    "Eduardo",
    "Abdullah",
    "Grace",
    "Anastasiya",
    "Mei",
    "Binda",
    "Coen",
    "Jedda",
    "Koa",
    "Kylie",
    "Keria",
    "Marli",
    "Mia",
    "Allira",
    "Arika",
    "Marlee",
    "Medika",
    "Rianna",
    "Yindi",
    "Balun",
    "Birrani",
    "Waru",
    "Kuparr",
    "Monti",
    "Tau"
  ];
  let fN = random(firstNameList);
  
  let lastNameList = [
    "Wang",
    "Li",
    "Zhang",
    "Chen",
    "Liu",
    "Devi",
    "Yang",
    "Huang",
    "Singh",
    "Wu",
    "Kumar",
    "Xu",
    "Ali",
    "Zhao",
    "Zhou",
    "Ngyuyen",
    "Khan",
    "Ma",
    "Lu",
    "Zhu",
    "Ahmed",
    "da Silva",
    "Mohamed",
    "Islam",
    "Garcia",
    "Hernandez",
    "Rodriguez",
    "Lopez",
    "Hussan",
    "Gonzalez",
    "Martinez",
    "Tran",
    "Silva",
    "Alves",
    "Smith",
    "Santos",
    "Diaz",
    "Hou",
    "Xiong",
    "Alam",
    "de Oliveira",
    "Musa",
    "Ghosh",
    "Chan",
    "Flores",
    "Diallo",
    "Patil",
    "Torres",
    "de Souza",
    "Long",
    "Morales",
    "Allah",
    "Johnson",
    "Reyes",
    "Williams",
    "Saha",
    "Castillo",
    "Brown",
    "Martin",
    "Jones",
    "Mendoza",
    "Paramar",
    "Thomas",
    "Miller",
    "Muir"
  ];
  let lN = random(lastNameList);
  let lN2 = random(lastNameList);
  let lN3 = random(lastNameList);
  
  let char1 = [random(firstNameList) + " " + lN]
  let char2List = [
    random(firstNameList) + " " + lN,
    random(firstNameList) + " " + lN2
  ]
  let char2 = random(char2List)
  let char3LNList = [
    lN,
    lN2,
    lN + "-" + lN2,
    lN2 + "-" + lN,
    lN + "-" + lN3,
    lN3
  ]
  let char3LN = random(char3LNList)
  let char3 = random(firstNameList) + " " + char3LN;
  let char4 = random(firstNameList) + " " + char3LN;
  let char5 = random(firstNameList) + " " + char3LN;
  
  let propertyOwnersList = [
    char1,
    char1 + ", " + char2
  ];
  let propertyOwners = random(propertyOwnersList);
  
  let propertyTenantsList = [
    char1, 
    char1 + ", " + char2,
    char1 + ", " + char2 + ", " + char3,
    char1 + ", " + char2 + ", " + char3 + ", " + char4,
    char1 + ", " + char2 + ", " + char3 + ", " + char4 + ", " + char5
  ];
  let propertyTenants = random(propertyTenantsList);
  
  //random places in Australia
  let streetNameList = [
    "Lily Pilly",
    "Paper Daisy",
    "Bottlebrush",
    "Wattle",
    "Acacia",
    "Banksia",
    "Gum",
    "Warratah",
    "Grevillea",
    "Basil",
    "Boldo",
    "Borage",
    "Chervil",
    "Chive",
    "Coriander",
    "Cress",
    "Curry",
    "Dill",
    "Hemp",
    "Hyssop",
    "Jimbu",
    "Lavender",
    "Lemongrass",
    "Citrus",
    "Marjoram",
    "Lovage",
    "Mint",
    "Mugwort",
    "Mitsuba",
    "Oregano",
    "Parsley",
    "Perilla",
    "Rosemary",
    "Rue",
    "Sage",
    "Sansho",
    "Sorrel",
    "Tarragon",
    "Thyme",
    "Woodruff",
    "Abbey",
    "Acreage",
    "Air",
    "Alligator",
    "Anomaly",
    "Hip Hip",
    "Ardor",
    "Adoration",
    "Artful",
    "Artisan",
    "Ascent",
    "Babbling",
    "Ballet",
    "Baker",
    "Ball",
    "Banjo",
    "Basin",
    "Battle",
    "Thistlebed",
    "Blackberry",
    "Blossom",
    "Bold",
    "Bones",
    "Broth",
    "Cabbage",
    "Charade",
    "Chasm",
    "Chivalry",
    "Climber",
    "Climbing Rose",
    "Coaster",
    "Conduit",
    "Confidant",
    "Constance",
    "Cockatoo",
    "Cumin",
    "Dawn",
    "Delight",
    "Decadence",
    "Dusk",
    "Demonstration",
    "Dexterity",
    "Dock",
    "Drafter",
    "Eager",
    "Enlightenment",
    "Every",
    "Elegance",
    "Elements",
    "Embroidery",
    "Encampment",
    "Enthusiasm",
    "Equator",
    "Falls",
    "Flora",
    "Fauna",
    "Folklore",
    "Flow",
    "Genesis",
    "Glamour",
    "Glitter",
    "Grand",
    "Green",
    "Grocer",
    "Gusto",
    "Heat",
    "Heather",
    "Hammock",
    "Hands",
    "Handshake",
    "Happiness",
    "Heads",
    "Heart",
    "Hearth",
    "Helper",
    "Honesty",
    "Inevitable",
    "Innocence",
    "Innovation",
    "Inspiration",
    "Incense",
    "Juncture",
    "Jovie",
    "Kangaroo",
    "Koala",
    "Knocking",
    "Light",
    "Liberation",
    "Livingsworth",
    "Lifeblood",
    "Listen",
    "Literature",
    "Longevity",
    "Lustre",
    "Magnificence",
    "Mahogany",
    "Maintenance",
    "Mango",
    "Manifesto",
    "Mantra",
    "Maple",
    "Martyr",
    "Matrix",
    "Mayhem",
    "Medic",
    "Memory",
    "Mirth",
    "Molasses",
    "Monument",
    "Morale",
    "Motto",
    "Music",
    "Mythology",
    "Nexus",
    "Nourishment",
    "Nucleus",
    "Corella",
    "Nutrition",
    "Oasis",
    "Opportunity",
    "Oracle",
    "Orchestra",
    "Organ",
    "Oxygen",
    "Paradox",
    "Yam",
    "Patchwork",
    "Quilt",
    "Pendulum",
    "Philosophy",
    "Phosphorus",
    "Luminescence",
    "Plateau",
    "Play",
    "Plaza",
    "Poultry",
    "Pound",
    "Progress",
    "Prominence",
    "Prophecy",
    "Quartz",
    "Opal",
    "Quorum",
    "Radiance",
    "Rapids",
    "Rebirth",
    "Phoenix",
    "Recreation",
    "Redemption",
    "Rockclimber",
    "Saucer",
    "Schism",
    "Sentimentality",
    "Sediment",
    "Serenity",
    "Sesame",
    "Sew",
    "Simplicity",
    "Snail",
    "Solemn",
    "Solitude",
    "Somewhere",
    "Specimen",
    "Squid",
    "Stimulus",
    "Story",
    "Tavern",
    "Tempo",
    "Theory",
    "Theater",
    "Therapy",
    "Thicket",
    "Thunder",
    "Thunderstorm",
    "Thorough",
    "Today",
    "Tinsel",
    "Trout",
    "Unification",
    "Universe",
    "Vista",
    "Vocal",
    "Warm",
    "Wit",
    "Windy",
    "Witchcraft",
    "Youth",
    "Sunhill",
    "Nioka",
    "Aonori",
    "Ajwain",
    "Allspice",
    "Amchoor",
    "Anise",
    "Asafoetida",
    "Camphor",
    "Caraway",
    "Cardomom",
    "Cassia",
    "Charoli",
    "Chenpi",
    "Cinnamon",
    "Clove",
    "Coriander",
    "Cubeb",
    "Cumin",
    "Dill",
    "Fennel",
    "Fenugreek",
    "Fingerroot",
    "Galangal",
    "Garlic",
    "Ginger",
    "Golpar",
    "Horseradish",
    "Juniper",
    "Kokum",
    "Korarima",
    "Lime",
    "Liquorice",
    "Mastic",
    "Mahlab",
    "Mustard",
    "Nigella",
    "Njangsa",
    "Nutmeg",
    "Pepper",
    "Paprika",
    "Sansho",
    "Peppercorn",
    "Pomegranate",
    "Poppy",
    "Radhuni",
    "Rose",
    "Saffron",
    "Salt",
    "Sarsaparilla",
    "Sassafras",
    "Sesame",
    "Shiso",
    "Sumac",
    "Tamarind",
    "Turmeric",
    "Vanilla",
    "Uzazi",
    "Wasabi",
    "Yuzu",
    "Zest",
    "Aba",
    "Alepine",
    "Alpaca",
    "Angora",
    "Ardass",
    "Armure",
    "Arrasene",
    "Atlas",
    "Baft",
    "Bagging",
    "Baize",
    "Balbriggan",
    "Baldachin",
    "Balzarine",
    "Barathea",
    "Barege",
    "Barracan",
    "Barras",
    "Barrateen",
    "Batiste",
    "Bayadere",
    "Beaupers",
    "Bengaline",
    "Bombazine",
    "Borato",
    "Bouclé",
    "Brilliantine",
    "Broadcloth",
    "Brocade",
    "Buckram",
    "Bump",
    "Bunting",
    "Burdet",
    "Burlap",
    "Burnet",
    "Burrel",
    "Calamanco",
    "Calico",
    "Camaca",
    "Cambresine",
    "Sambric",
    "Camlet",
    "Caneva",
    "Canque",
    "Cashmere",
    "Cashmerette",
    "Cassimere",
    "Cendal",
    "Challis",
    "Chambray",
    "Chamois",
    "Charmante",
    "Chenille",
    "Chiffron",
    "Cordovan",
    "Crepe",
    "Cypress",
    "Damask",
    "Dimity",
    "Etamine",
    "Eyelet",
    "Gingham",
    "Grenadine",
    "Grosgrain",
    "Kalamkari",
    "Marcella",
    "Marocain",
    "Moleskin",
    "Paduasoy",
    "Pashmina",
    "Romal",
    "Sagathy",
    "Sateen",
    "Satin",
    "Satara",
    "Swansdown",
  ]
  let streetName = random(streetNameList)
  
  let streetList = [
    "Street",
    "Road",
    "Lane",
    "Avenue",
    "Crescent",
    "Close",
    "Terrace",
    "Place",
    "Highway"
  ]
  let street = random(streetList)
  
  let NTtownList = [
    "Kaltukatjara",
    "Yulara",
    "Petermann",
    "Mereenie",
    "Alice Springs",
    "Davenport",
    "Tanami",
    "Tablelands",
    "Pamayu",
    "Elliott",
    "Kalkarindji",
    "McArthur",
    "Borroloola",
    "Mataranka",
    "Katherine",
    "Alyangula",
    "Jabiru",
    "Darwin",
    "Nhulunbury",
  ]
  let NTtown = random(NTtownList);
  let WAtownList = [
    "Euclas",
    "Mundrabilla",
    "Madura",
    "Esperance",
    "Albany",
    "Margaret River",
    "Rockingham",
    "Norseman",
    "Perth",
    "Kalgoorlie",
    "Forrest",
    "Plumridge Lakes",
    "Beadell",
    "Leonora",
    "Laverton",
    "Geraldton",
    "Gibson Desert South",
    "Denham",
    "Meekatharra",
    "Wiluna",
    "Tjirrkarli",
    "Mantamaru",
    "Warrahurnu",
    "Carnarvon",
    "Peak Hill",
    "Kumarina",
    "Little Sandy Desert",
    "Coral Bay",
    "Paraburdoo",
    "Karijini",
    "Newman",
    "Gibson Desert North",
    "Exmouth",
    "Onslow",
    "Karratha",
    "Port Hedland",
    "Marble Bar",
    "Telfer",
    "Eighty Mile Beach",
    "Broome",
    "St George Ranges",
    "Fitzroy Crossing",
    "Sturt Creek",
    "Tanami",
    "Derby",
    "Wunaamin Miliwundi Ranges",
    "Halls Creek",
    "Purnulili",
    "Dampier Peninsula",
    "Warmun",
    "Gibb",
    "Drysdale River",
    "Kununurra"
  ]
  let WAtown = random(WAtownList);
  let NSWtownList = [
    "Tibooburra",
    "Broken Hill",
    "Wilcannia",
    "Bourke",
    "Cobar",
    "Griffith",
    "Lightning Ridge",
    "Dubbo",
    "Wollongong",
    "Sydney",
    "Port Macquarie",
    "Coffs Harbour",
    "Newcastle"
  ]
  let NSWtown = random(NSWtownList);
  let SAtownList = [
    "Nullabor",
    "Yalanta",
    "Mintabie",
    "Marla",
    "Coober Peedy",
    "Ceduna",
    "Streaky Bay",
    "Port Lincoln",
    "Roxby Downs",
    "Flinders Ranges",
    "Adelaide",
    "Gidgealpa"
  ]
  let SAtown = random(SAtownList);
  let VICtownList = [
    "Mildura",
    "Red Cliffs",
    "Ouyen",
    "Nhill",
    "Hamilton",
    "Portland",
    "Warrnambool",
    "Swan Hill",
    "Bendigo",
    "Shepparton",
    "Wangaratta",
    "Melbourne",
    "Paynesville",
    "Lakes Entrance",
  ]
  let VICtown = random(VICtownList);
  let QLDtownList = [
    "Bamaga",
    "Rocky Point",
    "Cooktown",
    "Cape Tribulation",
    "Port Douglas",
    "Cairns",
    "Mareeba",
    "Burketown",
    "Lawn Hill",
    "Townsville",
    "Ayr",
    "Camooweal",
    "Bowen",
    "Airlie Beach",
    "Mount Isa",
    "Cloncurry",
    "Mackay",
    "Sarina",
    "Moranbah",
    "Winton",
    "Boulia",
    "Yeppoon",
    "Opalton",
    "Longreach",
    "Emerald",
    "Bercaldine",
    "Rockhampton",
    "Gladstone",
    "Bedourie",
    "Blackall",
    "Biloela",
    "Agnes Water",
    "Bundaberg",
    "Jundah",
    "Windorah",
    "Birdsville",
    "Charleville",
    "Roma",
    "Sunshine Coast",
    "Quilpie",
    "Eromanga",
    "Thargomindah",
    "Cunnamulla",
    "St George",
    "Brisbane",
    "Gold Coast"
  ]
  let QLDtown = random(QLDtownList);
  let TAStownList = [
    "Stanley",
    "Smithton",
    "Burnie",
    "Devonport",
    "Saint Helens",
    "Launceston",
    "Cradle Mountain",
    "Bicheno",
    "Coles Bay",
    "Strahan",
    "Hobart",
    "Port Arthur"
  ]
  let TAStown = random(TAStownList);
  
  let locationList = [
    NTtown + ", NT",
    WAtown + ", WA",
    NSWtown + ", NSW",
    "Canberra, ACT",
    SAtown + ", SA",
    VICtown + ", VIC",
    QLDtown + ", QLD",
    TAStown + ", TAS"
  ]
  let location = random(locationList)
  
  let address = [int(random(1,100)) + " " + streetName + " " + street + ", " + location]
  
  let worldList = [
    "Vienna",
    "Minsk",
    "Brussels",
    "Prague",
    "Copenhagen",
    "Helsinki",
    "Paris",
    "Berlin",
    "Gibraltar",
    "Athens",
    "Budapest",
    "Reykjavik",
    "Dublin",
    "Rome",
    "Luxembourg",
    "Valletta",
    "Monaco",
    "Amsterdam",
    "Oslo",
    "Warsaw",
    "Lisbon",
    "Bucharest",
    "Moscow",
    "Madrid",
    "Stockholm",
    "Kyiv",
    "London",
    "Vatican City",
    "Buenos Aires",
    "Nassau",
    "Aruba",
    "Barbados",
    "Belize",
    "Bermuda",
    "Canada",
    "Chili",
    "San José",
    "Havana",
    "Santo Domingo",
    "Haiti",
    "Jamaica",
    "Mexico City",
    "Lima",
    "San Diego",
    "Los Angeles",
    "New York City",
    "Yosemite",
    "Beijing",
    "Hong Kong",
    "New Delhi",
    "Jakarta",
    "Jerusalem",
    "Tokyo",
    "Beirut",
    "Kuala Lumpur",
    "Kathmandu",
    "Manila",
    "Singapore",
    "Seoul",
    "Damascus",
    "Bangkok",
    "Abu Dhabi",
    "Hanoi",
    "Ulaanbataar",
    "Wellington",
    "Algiers",
    "Djibouti",
    "Cairo",
    "Nairobi",
    "Maputo",
    "Saint-Denis",
    "Nuku'alofa"
  ];
  let world = random(worldList);
  
  let shapeList = [
    "oblong",
    "rectangular",
    "kite-shaped",
    "pentagonal",
    "hexagonal",
    "heptagonal",
    "octagonal",
    "nonagonal",
    "triangular",
    "trapezoidal",
  ]
  let shape = random(shapeList)
  
  let buildingList = [
    "residence",
    "cabin",
    "shed",
    "outhouse",
    "greenhouse",
    "treehouse"
  ]
  let building = random(buildingList)
  let gardenList = [
    "garden",
    "orchard",
    "herb garden",
    "flower garden",
    "zen garden",
    "hedgemaze",
    "pond",
    "lake"
  ]
  let garden = random(gardenList)
  let structureList = [building, garden]
  let structure = random(structureList)
  
  let relativeList = [
    "wife",
    "husband",
    "partner",
    "daughter",
    "son",
    "child",
    "mother",
    "father",
    "neice",
    "nephew",
    "sister",
    "brother",
    "grandmother",
    "grandfather"
  ];
  let relative = random(relativeList);
  let relative2 = random(relativeList);
  
  let doorList = [
    "front",
    "back"
  ];
  let door = random(doorList);
  
  let hoursList = [
    "half an hour",
    "1 hour",
    int(random(2,9)) + " hours"
  ]
  let hours = random(hoursList)
  let hours2 = random(hoursList)
  
  let nsewList = [
    "north",
    "south",
    "east",
    "west"
  ];
  let nsew = random(nsewList);
  
  let discovererList = [
    "property owner, " + char1,
    "property owner's " + relative + ", " + random(firstNameList) + " " + lN
  ]
  let discoverer = random(discovererList)
  
  let cornerEdgeList = [
    "corner", "edge"
  ];
  let cornerEdge = random(cornerEdgeList)
  
  let belowList = [
    "below", "underneath", "under"
  ];
  let below = random(belowList);
  
  let landmarkList = [
    "rock overhang",
    "tree",
    "waterfall"
  ];
  let landmark = random(landmarkList);
  
  let accidentallyList = [
    "accidentally",
    "unknowingly"
  ];
  let accidentally = random(accidentallyList);
  
  let date = [
    "1st",
    "2nd",
    "3rd",
    int(random(4,20))+"th",
    "21st",
    "22nd",
    "23rd",
    int(random(24,28))+"th"
  ]
  
  let month = [
    "2nd of April, within hours of its appearance",
    "3rd of April, only 1 day after its appearance",
    "4th of April, only 2 days after its appearance",
    int(random(5,8)) + "th of April, within 1 week of its appearance",
    int(random(9,15)) + "th of April, within 2 weeks of its appearance",
    int(random(16,20)) + "th of April, within 3 weeks of its appearance",
    int(random(24,30)) + "th of April, within 1 month of its appearance",
    random(date) + " of May, just over 1 month after its appearance",
    random(date) + " of June, months after its appearance",
    random(date) + " of July, months after its appearance",
    random(date) + " of August, months after its appearance",
    random(date) + " of September, months after its appearance"
  ]
  //news articles wondering why none were discovered on the 21st, 22nd, and 23rd of april......
  
  let locatedList = [
    "on top of the property's " + building + ". The construction of a more structurally sound platform is currently underway to allow safer access.",
  int(random(2,7)) + " metres above the property's " + structure + ". A set of stairs has been constructed to allow access.",
  "within the residence's " + structure + ".",
  "within the residence's " + door + " door. Alternative routes to enter and exit the abode are currently being used.",
  below + " a large " + landmark + " at the " + nsew + "ern-most " + cornerEdge + " of the property.",
  below + " the " + nsew + "ern-most " + cornerEdge + " property's " + building + "."
  ]
  let located = random(locatedList)
  
  let colourList = [
    "red",
    "golden",
    "yellow",
    "green",
    "turquoise",
    "blue",
    "purple",
    "violet",
    "magenta",
    "silver",
    "white"
  ];
  let colour = random(colourList);
  
  let lightList = [
    "light",
    "glow",
    "radiance"
  ];
  let light = random(lightList);
  
  let glowingList = [
    "glowing",
    "shimmering",
    "pulsing",
    "wavering",
    "quivering"
  ];
  let glowing = random(glowingList);
  
  let edgeList = [
    "has no visible boundary or edge.",
    "is framed by a border of " + glowing + " " + random(colourList) + " light.",
    "has a spiked crystalline border.",
    "has an intangible border of " + glowing + " tesselating shapes.",
    "beams of " + colour + " light from its edge.",
    "has a " + glowing + " edge."
  ];
  let edge = random(edgeList);
  
  let description = ["The structure is a " + int(random(0,5)) + "." + int(random(0,9)) + " by " + int(random(0,5)) + "." + int(random(0,9)) + " metre " + shape + " portal located " + located + " It emits a " + colour + " " + light + " from its centre, and " + edge];
  
  let firstContactList = [
    "The structure was discovered " + accidentally + " by the " + discoverer + ", who was missing for " + hours + " before a visiting neighbour also discovered the structure. The missing person returned a further " + hours2 + " later, having been transported to " + world + ".",
    "The structure was first observed by the " + discoverer + ", who alerted nearby residents. After a brief examination, the discoverer entered, and returned half an hour later, claiming to have been to " + world + ".",
    "The structure was first observed by the " + discoverer + ", who was alone on the property. After careful examination, the discoverer entered, and returned " + hours + " later, having been transported to " + world + "."
  ];
  let firstContact = "First contact occurred on the " + random(month) + ". " + random(firstContactList);
  
let feelingList = [
    "happy",
    "content",
    "brave",
    "free",
    "connected",
    "vulnerable, in a good way",
    "excited"
  ];
  let feeling = random(feelingList);
  
  let adjectiveList = [
    "beautiful", "gorgeous", "stunning",
    "breathtaking", "incomprehensible",
    "enormous", "huge",
    "slender", "elegant",
    "red", "orange", "yellow", "green", "turquoise", "blue", "purple", "violet", "magenta", "pink"
  ]
  let adjective = random(adjectiveList)
  let adjective2 = random(adjectiveList)
  let adjective3 = random(adjectiveList)
  
  
  let strangeList = [
    "strange",
    "funny",
    "odd",
    "bizarre",
    "I can't quite put into words"
  ];
  let strange = random(strangeList);
  let airList = [
    "atmosphere",
    "light",
    "space",
    "air"
  ]
  let air = random(airList)
  
  let tripAirList = [
    "hazy",
    "summery",
    "springish",
    "warm",
    "hot",
    "lovely",
    "sharp",
    "delightful"
  ]
  let tripAir = random(tripAirList)
  let tripAir2 = random(tripAirList)
  let tripAir3 = random(tripAirList)
  
  let verbList = [
    "fizzes",
    "bubbles",
    "shimmers",
    "wobbles",
    "glows",
    "radiates something, something " + adjective3
  ];
  let verb = random(verbList);
  
  //on-site locations
  let outdoorList = [
    "garden",
    "outhouse",
    "greenhouse",
    "herb garden",
    "shed",
    "gazebo",
    "creek",
    "orchard"
  ];
  let outdoor = random(outdoorList);
  let indoorList = [
    "kitchen",
    "study",
    "studio",
    "bedroom",
    "living room",
    "laundry"
  ];
  let indoor = random(indoorList);
  let indoor2 = random(indoorList);
  let roomList = [
    outdoor,
    indoor
  ];
  let room = random(roomList);
  
  let waterList = [
    "creek",
    "stream",
    "pond",
    "river",
    "lake"
  ]
  let water = random(waterList)
  
  let biomeList = [
    "prairie",
    "fields",
    "woods",
    "forest",
    "rainforest",
    "mountains",
    "jungle"
  ]
  let biome = random(biomeList)
  
  let wildlifeList = [
    "fireflies",
    "butterflies",
    "deer",
    "goats",
    "ferns"
  ];
  let wildlife = random(wildlifeList);
  
  let walkedList = [
    "walked",
    "stumbled",
    "hopped",
    "jumped"
  ];
  let walked = random(walkedList);
  
  let firstTripList = [
    "on the roof of my old treehouse, in " + random(worldList) + ".",
    "in the woods by my dad's old cabin.",
    "on my grandparents' old farm. The new owners were real confused, but nice about it.",
    "knee deep in a " + water + " in the middle of some " + biome + ". I still don't know where it was, but it was " + tripAir + " and " + tripAir2 + " and " + tripAir3 +".",
    "on a big flat rock in the middle of nowhere. Somewhere " + tripAir + " and " + tripAir2 + ".",
    "in a market in " + random(worldList) + ", real busy. I got so lost. It was wonderful.",
    "in some " + biome + " in the middle of the night, surrounded by " + wildlife + ". I've always associated them with my " + relative + ", so it was a funny coincidence. "
  ];
  let firstTrip = random(firstTripList);
  
  //clauses to build passage with
  let portalLocationList = [
    "It's in the " + indoor + ", ours.",
    "Ours is out in the " + outdoor + ".",
    "Ours is down in the " + outdoor + "."
  ]
  let portalLocation = random(portalLocationList)
  
  let phraseList = [
    "",
    "I've never felt this " + feeling + ".",
    "We're all so " + feeling + " all of a sudden.",
    portalLocation,
    "I was busy in the " + indoor2 + " when it appeared.",
    "It was my " + relative + " that found it.",
    "My " + relative + " went missin' for a good few hours before we figured out what happened.",
    "It's " + adjective + ".",
    "It's " + adjective + ", and " + adjective2 + ".",
    "Unimaginably " + adjective + ".",
    "Impossibly " + adjective + ".",
    "None of us know what to make of it.",
    "I don't know what to make of it.",
    "I've gone in a few times now.",
    "It really knows me better than myself.",
    "It does something " + strange + " to the " + air + " around it.",
    "Sort of " + verb + ".",
    "I've been to visit my " + relative2 + " on the other side of the world.",
    "I've been to " + random(worldList) + ".",
    "It's taken me to " + random(worldList) + " now, and " + random(worldList) + ".",
    random(worldList) + " is just amazing.",
    "The first time I went in I popped out " + firstTrip,
    "That night we all went over to " + world +  " to visit my " + relative + ".",
    "I just " + walked + " right into it without knowing what it was. Was in " + random(worldList) + " before I knew it.",
    "I " + walked + " straight in without even knowing.",
    "I hadn't seen my " + relative2 + " in ages, and now we're having dinner together twice a week.",
    "It's different every time you go in.",
    "It seems different every time I look at it.",
    "It's a different place every time.",
    "I think it can read me, somehow. Like it knows what I need before I do.",
    "I never thought I'd feel this " + feeling + ".",
    "I never thought I'd be able to travel like this.",
    "I never thought I'd be able to go to " + random(worldList) + "."
  ];
  let phrase = random(phraseList);
  let phrase2 = random(phraseList);
  let phrase3 = random(phraseList);
  
  //putting letter together
  let letter = [
    phrase + " " + phrase2 + " " + phrase3
  ];


  let textOutputList = [
    "Out in my garden is a portal. I’ve decorated it and made it feel at home by planting cabbages and broad beans all around it. I can walk through it and find my way to a place that matches my mood - it reads my biorhythms and knows whether I need to emerge in a brooding forest, violent surf, or an alley behind my old primary school. And if I want to return here, I just eat a plate of cabbage and broad beans.",
    "Portal Declaration Form" + 
       "\n\nPortal ID: " + IDnumber + 
       "\n\nProperty Owner(s): " + propertyOwners + 
       "\n\nProperty Tenant(s): " + propertyTenants + 
       "\n\nLocation Address: " + address + 
       "\n\nDescription: " + description + 
       "\n\nFirst Contact: " + firstContact,
    letter + " - " + fN + " " + lN + ", " + location
  ]
  
  //text
  blendMode(txtB);
  fill(tf1, tf2, tf3);
  stroke(ts1, ts2, ts3);
  textFont('Times New Roman');
  textSize(fontSize);
  text(random(textOutputList), w/9, h/9, w/9*7)

  print(rB1, rB2, rB3, tB1, pB, txtB);

}

function draw() {
  
}
