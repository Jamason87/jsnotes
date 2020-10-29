let netflix = {
    id: 1,
    name: "The Office",
    season1: {
        seasonInfo: {
            episodeInfo: [{
                    episode: 1,
                    episodeName: "Pilot"
                },
                {
                    episode: 2,
                    episodeName: "Diversity Day"
                },
                {
                    episode: 3,
                    episodeName: "Health Care"
                },
                {
                    episode: 4,
                    episodeName: "The Alliance"
                },
                {
                    episode: 5,
                    episodeName: "Basketball"
                },
                {
                    episode: 6,
                    episodeName: "Hot Girl"
                },
            ]
        }
    },
    season2: {},
    season3: {}
};

let showName = netflix.name;
console.log(showName);

let seasonOneEpCount = netflix.season1.seasonInfo.episodeInfo.length;
console.log(seasonOneEpCount);

let epNames = []
console.log(netflix.season1.seasonInfo.episodeInfo[0].episodeName);
for (ep of netflix.season1.seasonInfo.episodeInfo){
    epNames.push(ep.episodeName)
}

// This is all the obj
console.log(netflix)
// Just the show name
console.log(netflix.name)
// This is an ep name
console.log(netflix.season1.seasonInfo.episodeInfo[3].episodeName)


// Hint use indexing with dot notation # Bronze
let showName; // Here assign "The Office" 
// Here use dot notation and the .length prop # Silver
let seasonOneEpCount; // Here assign 6
// Here use a for loop to assign to this # Gold +
let epNames; // ["<ep here>", "", ...]


let weather = {
    temp: 88,
    isRaining: false
}

//* JSON <- Javascript Object Notation
let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}

//* RETURNS AN ARRAY OF THE KEYS OF AN OBJECT
console.log(Object.keys(spaceJam.toonSquad));
console.log(Object.keys(spaceJam.toonSquad.duck));
console.log(Object.keys(spaceJam.toonSquad).toString());

//* RETURNS AN ARRAY OF THE VALUES OF AN OBJECT
console.log(Object.values(spaceJam.toonSquad));


let greetArray= ['H', 'E', 'L', 'L', 'O']
console.log("This is from object.keys:",Object.keys(greetArray));
console.log("This is from object.values:",Object.values(greetArray))
