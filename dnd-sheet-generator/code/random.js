const randomRace = ["Dragonborn", "Dwarf", "Gnome", "Half-Elf", "Half-Orc", "Halfling", "High-Elf", "Human", "Thiefling", "Wood-Elf"];
const randomBackground = ["Acolyte", "City Watch", "Criminal", "Entertainer", "Secret Agency", "Far Traveler", "Folk Hero", "Guild Artisan", "Hermit", "Noble", "Outlander",
                    "Sailor", "Soldier", "Urban Bounty Hunter"];
const randomClass = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin",  "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"];
const randomAlignment = ["Lawful Good", "Lawful Neutral", "Lawful Evil", "Neutral Good", "True Neutral", "Neutral Evil", "Chaotic Good", "Chaotic Neutral", "Chaotic Evil"];
const randomSex = ["Male", "Female"];

function generateName() {
    const vowels = ["a", "e", "i", "u", "o"];
    const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "q", "t", "v", "w", "y", "z"];
    var fullName = "";
    var name = "";
    var surname = "";
    var numberOfSyllabuls = Math.floor( Math.random() * 3 + 2);
    for ( let j = 0; j < numberOfSyllabuls; j++ ) {
        var pattern_1 = vowels[Math.floor(Math.random() * vowels.length)] + consonants[Math.floor(Math.random() * consonants.length)];
        var pattern_2 = consonants[Math.floor(Math.random() * consonants.length)] + vowels[Math.floor(Math.random() * vowels.length)];
        var patterns = [pattern_1, pattern_2];
        var randomPattern = Math.floor(Math.random() * 2);
        name += patterns[randomPattern];
    }
    numberOfSyllabuls = Math.floor(Math.random() * 3 + 2);
    for ( let i = 0; i < numberOfSyllabuls; i++ ) {
        pattern_1 = vowels[Math.floor(Math.random() * vowels.length)] + consonants[Math.floor(Math.random() * consonants.length)];
        pattern_2 = consonants[Math.floor(Math.random() * consonants.length)] + vowels[Math.floor(Math.random() * vowels.length)];
        patterns = [pattern_1, pattern_2];
        randomPattern = Math.floor(Math.random() * 2);
        surname += patterns[randomPattern];
    }

    
    fullName = name.charAt(0).toUpperCase() + name.slice(1) + " " + surname.charAt(0).toUpperCase() + surname.slice(1);

    return fullName;
}

function startRandomly() {
    document.getElementById("welcomePage").style.display = "none";
    document.getElementById("playerName").style.display = "block";

}

function askForPlayerName() {
    pname = document.getElementById("playerName1").value;

    document.getElementById("playerName").style.display = "block";
    generateRandomly();
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

    // Random age
	age = Math.floor(Math.random() * 90 + 20);

    // Random sex
    sex = randomSex[Math.floor(Math.random() * randomSex.length)];

    // Random race
    race = randomRace[Math.floor(Math.random() * randomRace.length)];

    // Random character name
    cname = generateName();

    // Race bonus
    var r = new Race(race);
    r.raceBonus(r.val);

    if ( race == "Half-Elf" ) {
        for ( let i = 0; i < 2; i++ ) {
            let randomStat = Math.floor(Math.random() * 5);

            if ( randomStat == 0 ) {
                str++;
            }
            else if ( randomStat == 1 ) {
                dex++;
            }
            else if ( randomStat == 2 ) {
                con++;
            }
            else if ( randomStat == 3 ) {
                int++;
            }
            else if ( randomStat == 4 ) {
                wis++;
            }
        }
    }

    // Find modifiers
    modStr = findModifier(str);
    modDex = findModifier(dex);
    modCon = findModifier(con);
    modInt = findModifier(int);
    modWis = findModifier(wis);
    modCha = findModifier(cha);

    // Set saving throws
    stStr = modStr;
    stDex = modDex;
    stCon = modCon;
    stInt = modInt;
    stWis = modWis;
    stCha = modCha;

    // Initalize skills in an array
    skills = [modDex, modWis, modInt, modStr, modCha, modInt, modWis, modCha, modInt, modWis, modInt, modWis, modCha, modCha, modInt, modDex, modDex, modWis];

    // Random background
    background = randomBackground[Math.floor(Math.random() * randomBackground.length)];

    // Background bonus
    var b = new Background(background);
    b.backgroundBonus(b.val);

    // Random class
    pclass = randomClass[Math.floor(Math.random() * randomClass.length)];

    // Class bonus
    var c = new Class(pclass);
    c.classBonus(c.val);

    // Random alignment
    alignment = randomAlignment[Math.floor(Math.random() * randomAlignment.length)];

    // Get possible skill choices
    skillBonus = document.getElementsByName(pclass.toLowerCase()); 

    // Add proficiency to those skills 
    chooseSkillBonus();

    for ( let i = 0; i < numberOfSkills; i++ ) {
        skillsToAddProf.add(skillBonus[Math.floor(Math.random() * skillBonus.length)].value);
    }

    for ( item of skillsToAddProf ) {
        if ( item == "acrobatics" )
        {
            skills[0] += PROF;
        }
        else if ( item == "animalHandling" )
        {
            skills[1] += PROF;
        }
        else if ( item == "arcana" )
        {
            skills[2] += PROF;
        }
        else if ( item == "athletics" )
        {
            skills[3] += PROF;
        }
        else if ( item == "deception" )
        {
            skills[4] += PROF;
        }
        else if ( item == "history" )
        {
            skills[5] += PROF;
        }
        else if ( item == "insight" )
        {
            skills[6] += PROF;
        }
        else if ( item == "intimidation" )
        {
            skills[7] += PROF;
        }
        else if ( item == "investigation" )
        {
            skills[8] += PROF;
        }
        else if ( item == "medicine" )
        {
            skills[9] += PROF;
        }
        else if ( item == "nature" )
        {
            skills[10] += PROF;
        }
        else if ( item == "perception" )
        {
            skills[11] += PROF;
        }
        else if ( item == "performance" )
        {
            skills[12] += PROF;
        }
        else if ( item == "persuasion" )
        {
            skills[13] += PROF;
        }
        else if ( item == "religion" )
        {
            skills[14] += PROF;
        }
        else if ( item == "sleightOfHand" )
        {
            skills[15] += PROF;
        }
        else if ( item == "stealth" )
        {
            skills[16] += PROF;
        }
        else if ( item == "survival" )
        {
            skills[17] += PROF;
        }
    }


    // Create sheet
    fillOutSheet();
    document.getElementById("playerName").style.display = "none";
    document.getElementById("sheet").style.display = "block";

}