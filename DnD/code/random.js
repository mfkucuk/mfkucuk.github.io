const maleElfNames = ["Varitan Arafiel", "Malgath Keahice", "Illithor Xyrric", "Taranath Olosys", "Neldor Olaxina", "Maeral Jonan", "Ayred Eryra", "Elred Mirana", "Rhalyf Joleth"
                    ];
const femaleElfNames = [];
const maleOrcNames = [];
const femaleOrcNames = [];
const maleHumanNames = [];
const femaleHumanNames = [];
const randomRace = ["Dragonborn", "Dwarf", "Gnome", "Hale-Elf", "Half-Orc", "Halfling", "High-Elf", "Human", "Thiefling", "Wood-Elf"];
const randomBackground = ["Acolyte"];
const randomClass = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin",  "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"];
const randomAlignment = ["Lawful Good", "Lawful Neutral", "Lawful Evil", "Neutral Good", "True Neutral", "Neutral Evil", "Chaotic Good", "Chaotic Neutral", "Chaotic Evil"];
const randomSex = ["Male", "Female"];

function startRandomly() {
    document.getElementById("welcomePage").style.display = "none";
    document.getElementById("playerName").style.display = "block";

}

function askForPlayerName() {
    pname = document.getElementById("playerName1").value;

    document.getElementById("playerName").style.display = "block";
}

// Randomly generate a character sheet
function generateRandomly() {
	// Generate stats
	str = generateStat();
    dex = generateStat();
    con = generateStat();
    int = generateStat();
    wis = generateStat();
    cha = generateStat();

    // Find modifiers
    modStr = findModifier(str);
    modDex = findModifier(dex);
    modCon = findModifier(con);
    modInt = findModifier(int);
    modWis = findModifier(wis);
    modCha = findModifier(cha);
    
    // Initalize skills in an array
    skills = [modDex, modWis, modInt, modStr, modCha, modInt, modWis, modCha, modInt, modWis, modInt, modWis, modCha, modCha, modInt, modDex, modDex, modWis];

    // Set saving throws
    stStr = modStr;
    stDex = modDex;
    stCon = modCon;
    stInt = modInt;
    stWis = modWis;
    stCha = modCha;

    // Random age
	age = Math.floor(Math.random() * 90 + 10);

    // Random sex
    sex = randomSex[Math.floor(Math.random() * randomSex.length)];

    // Random race
    race = randomRace[Math.floor(Math.random() * randomRace.length)];

    // Random character name depending on race and sex
    switch ( race ) {
        case "Half-Elf":
        case "Wood-Elf":
        case "High-Elf":
        if ( sex == "Male" ) {
            cname = maleElfNames[Math.floor(Math.random() * maleElfNames.length)];
        }
        else {
            cname = femaleElfNames[Math.floor(Math.random() * femaleElfNames.length)];
        }
        break;

        case "Half-Orc":
        if ( sex == "Male" ) {
            cname = maleOrcNames[Math.floor(Math.random() * maleOrcNames.length)];
        }
        else {
            cname = femaleOrcNames[Math.floor(Math.random() * femaleOrcNames.length)];
        }
        break;

    }

    // Random class
    pclass = randomClass[Math.floor(Math.random() * randomClass.length)];

    // Random alignment
    alignment = randomAlignment[Math.floor(Math.random() * randomAlignment.length)];

}