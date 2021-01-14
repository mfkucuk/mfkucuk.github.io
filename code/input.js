// Forms
var classes = document.getElementsByName("pclass");
var backgrounds = document.getElementsByName("background");
var races = document.getElementsByName("race");
var pnameInput = document.getElementById("pname1");
var cnameInput = document.getElementById("cname1");
var sexes = document.getElementsByName("sex");
var ageInput = document.getElementById("age1");
var alignments = document.getElementsByName("align");


// Constants
const PROF = 2;

// Variables
var str, dex, con, int, wis, cha;
var modStr, modDex, modCon, modInt, modWis, modCha;
var stStr, stDex, stCon, stInt, stWis, stCha;
var race, background, pclass, pname, cname, sex, age, alignment;
var skills;
var health;
var gold = 0;
var skillBonus, halfElfBonus;

// Functions
function generateStat()
{
    var sum = 0;
    var min = 6;
    var currentDie;

    for ( var i = 0; i < 4; i++ )
    {
        currentDie = Math.floor(Math.random() * 6 + 1);
        sum += currentDie;
        min = Math.min(min, currentDie);
    }

    return sum - min;
}

function findModifier( stat)
{
    if ( stat >= 0 )
    {
        return Math.floor((stat - 10) / 2);
    }
    else
    {
        return Math.floor((stat - 10) / 2 - 1);
    }
}

function start()
{
    document.getElementById("welcomePage").style.display = "none";
    document.getElementById("input").style.display = "block";
}

function Continue()
{
    // Player Name
    pname = pnameInput.value;

    // Character Name
    cname = cnameInput.value;

    // Sex input
    for ( var i = 0; i < sexes.length; i++ )
    {
        if ( sexes[i].checked )
        {
            pclass = sexes[i].value;
            break;
        }
    }

    // Age input
    age = ageInput.value;

    // Race input
    for ( var i = 0; i < races.length; i++ )
    {
        if ( races[i].checked )
        {
            race = races[i].value;
            break;
        }
    }

    // Alignment
    for ( var i = 0; i < alignments.length; i++ )
    {
        if ( alignments[i].checked )
        {
            alignment = alignments[i].value;
            break;
        }
    }

    // Background input
    for ( var i = 0; i < backgrounds.length; i++ )
    {
        if ( backgrounds[i].checked )
        {
            background = backgrounds[i].value;
            break;
        }
    }


    // Generate stats
    str = generateStat();
    dex = generateStat();
    con = generateStat();
    int = generateStat();
    wis = generateStat();
    cha = generateStat();

    // Compute modifiers
    modStr = findModifier(str);
    modDex = findModifier(dex);
    modCon = findModifier(con);
    modInt = findModifier(int);
    modWis = findModifier(wis);
    modCha = findModifier(cha);

    // Define skills and assign them to modifiers respectively in an array
    skills = [modDex, modWis, modInt, modStr, modCha, modInt, modWis, modCha, modInt, modWis, modInt, modWis, modCha, modCha, modInt, modDex, modDex, modWis];

    // Saving throws
    stStr = modStr;
    stDex = modDex;
    stCon = modCon;
    stInt = modInt;
    stWis = modWis;
    stCha = modCha;

    // Race bonus (languages & stat)
    var r = new Race(race);

    r.raceBonus(r.val);

    // Background bonus (skill)
    var b = new Background(background);

    b.backgroundBonus(b.val);



    document.getElementById("input").style.display = "none";

    // Show the user their character's stats
    document.getElementById("stats").innerHTML = "Strength: " + str + " (mod: " + modStr + ")" + "<br>Dexterity: " + dex + " (mod: " + modDex + ")"
     + "<br>Constitution: " + con + " (mod: " + modCon + ")" + "<br>Intelligence: " + int + " (mod: " + modInt + ")" + "<br>Wisdom: " + wis
    + " (mod: " + modWis + ")" + "<br>Charisma: " + cha + " (mod: " + modCha + ")";

    // Half-Elf Bonus
    if ( race == "Half-Elf" )
    {
        halfElfBonus = document.getElementsByName("halfElfBonus");
        document.getElementById("halfElfBonus").style.display = "block";
    }
    else
    {
        document.getElementById("classBonusInput").style.display = "block";
    }
}

function halfElfBonus()
{
    // Local Variables
    var numberOfStats = 0;

    // Check if the player chose 2 stats
    for ( var i = 0; i < halfElfBonus.length; i++ )
    {
        if ( halfElfBonus[i].checked )
        {
            numberOfStats += 1;
        }
    }

    if ( numberOfStats == 2 )
    {
        for ( var i = 0; i < halfElfBonus.length; i++ )
        {
            if ( halfElfBonus[i].checked )
            {
                if ( halfElfBonus[i] == "strength" )
                {
                    str++;
                }
                else if ( halfElfBonus[i] == "dexterity" )
                {
                    dex++;
                }
                else if ( halfElfBonus[i] == "constitution" )
                {
                    con++;
                }
                else if ( halfElfBonus[i] == "intelligence" )
                {
                    int++;
                }
                else if ( halfElfBonus[i] == "wisdom" )
                {
                    wis++;
                }
                else if ( halfElfBonus[i] == "charisma" )
                {
                    cha++;
                }
            }
        }

        document.getElementById("halfElfBonus").style.display = "none";
        document.getElementById("classBonusInput").style.display = "block";
    }
    // Give an error and make the player choose again
    else
    {
        numberOfStats = 0;
        alert("You must choose 2 stats");
    }
}

function classBonusInput()
{ 
    // Class input
    for ( var i = 0; i < classes.length; i++ )
    {
        if ( classes[i].checked )
        {
            pclass = classes[i].value;
            break;
        }
    }

    // Class
    var c = new Class(pclass);

    c.classBonus(c.val);
   

    // Display the bonuses of chosen class
    if ( classes[0].checked )
    {
        document.getElementById("barbarian").style.display = "block";
        skillBonus = document.getElementsByName("barbarian");
    }
    else if ( classes[1].checked )
    {
        document.getElementById("bard").style.display = "block";
        skillBonus = document.getElementsByName("bard");
    }
    else if ( classes[2].checked )
    {
        document.getElementById("cleric").style.display = "block";
        skillBonus = document.getElementsByName("cleric");
    }
    else if ( classes[3].checked )
    {
        document.getElementById("druid").style.display = "block";
        skillBonus = document.getElementsByName("druid");
    }
    else if ( classes[4].checked )
    {
        document.getElementById("fighter").style.display = "block";
        skillBonus = document.getElementsByName("fighter");
    }
    else if ( classes[5].checked )
    {
        document.getElementById("monk").style.display = "block";
        skillBonus = document.getElementsByName("monk");
    }
    else if ( classes[6].checked )
    {
        document.getElementById("paladin").style.display = "block";
        skillBonus = document.getElementsByName("paladin");
    }
    else if ( classes[7].checked )
    {
        document.getElementById("ranger").style.display = "block";
        skillBonus = document.getElementsByName("ranger");
    }
    else if ( classes[8].checked )
    {
        document.getElementById("rogue").style.display = "block";
        skillBonus = document.getElementsByName("rogue");
    }
    else if ( classes[9].checked )
    {
        document.getElementById("sorcerer").style.display = "block";
        skillBonus = document.getElementsByName("sorcerer");
    }
    else if ( classes[10].checked )
    {
        document.getElementById("warlock").style.display = "block";
        skillBonus = document.getElementsByName("warlock");
    }
    else if ( classes[11].checked )
    {
        document.getElementById("wizard").style.display = "block";
        skillBonus = document.getElementsByName("wizard");
    }

    // Continue
    document.getElementById("classBonusInput").style.display = "none"
    document.getElementById("choice").style.display = "block";
}

skillsToAddProf = new Set();

var skillsChosen = 0;
var numberOfSkills;

function chooseSkillBonus()
{
    switch ( pclass )
    {
        case "Barbarian":

        numberOfSkills = 2;
        for(i = 0; i < 6; i++){
            if ( skillBonus[i].checked )
            {
                skillsChosen += 1;
                skillsToAddProf.add(skillBonus[i].value);
            }
        }
        break;

        case "Bard":

        numberOfSkills = 3;
        for(i = 0; i < 18; i++){
            if ( skillBonus[i].checked )
            {
                skillsChosen += 1;
                skillsToAddProf.add(skillBonus[i].value);
            }
        }
        break;

        case "Cleric":

        numberOfSkills = 2;
        for(i = 0; i < 5; i++){
            if ( skillBonus[i].checked )
            {
                skillsChosen += 1;
                skillsToAddProf.add(skillBonus[i].value);
            }
        }
        break;

        case "Druid":

        numberOfSkills = 2;
        for(i = 0; i < 8; i++){
            if ( skillBonus[i].checked )
            {
                skillsChosen += 1;
                skillsToAddProf.add(skillBonus[i].value);
            }
        }
        break;

        case "Fighter":

        numberOfSkills = 2;
        for(i = 0; i < 8; i++){
            if ( skillBonus[i].checked )
            {
                skillsChosen += 1;
                skillsToAddProf.add(skillBonus[i].value);
            }
        }
        break;

        case "Monk":

        numberOfSkills = 2;
        for(i = 0; i < 6; i++){
            if ( skillBonus[i].checked )
            {
                skillsChosen += 1;
                skillsToAddProf.add(skillBonus[i].value);
            }
        }
        break;

        case "Paladin":

        numberOfSkills = 2;
        for(i = 0; i < 6; i++){
            if ( skillBonus[i].checked )
            {
                skillsChosen += 1;
                skillsToAddProf.add(skillBonus[i].value);
            }
        }
        break;

        case "Ranger":

        numberOfSkills = 3;
        for(i = 0; i < 8; i++){
            if ( skillBonus[i].checked )
            {
                skillsChosen += 1;
                skillsToAddProf.add(skillBonus[i].value);
            }
        }
        break;

        case "Rogue":
        numberOfSkills = 4;
        for(i = 0; i < 9; i++){
            if ( skillBonus[i].checked )
            {
                skillsChosen += 1;
                skillsToAddProf.add(skillBonus[i].value);
            }
        }
        break;

        case "Sorcerer":

        numberOfSkills = 2;
        for(i = 0; i < 6; i++){
            if ( skillBonus[i].checked )
            {
                skillsChosen += 1;
                skillsToAddProf.add(skillBonus[i].value);
            }
        }
        break;

        case "Warlock":

        numberOfSkills = 2;
        for(i = 0; i < 7; i++){
            if ( skillBonus[i].checked )
            {
                skillsChosen += 1;
                skillsToAddProf.add(skillBonus[i].value);
            }
        }
        break;

        case "Wizard":

        numberOfSkills = 2;
        for(i = 0; i < 6; i++){
            if ( skillBonus[i].checked )
            {
                skillsChosen += 1;
                skillsToAddProf.add(skillBonus[i].value);
            }
        }
        break;
    }
}

function Finish()
{
    chooseSkillBonus();

    // Check if the user chose right amount of skills
    if ( skillsChosen != numberOfSkills )
    {
        alert("You must choose " + numberOfSkills + " skills!");
        skillsChosen = 0;

        for ( var i = 0; i < form.length; i++ )
        {
            if ( form[i].checked )
            {
                skillsToAddProf.delete(form[i].value);
            }
        }

        // Terminate the function if not
        return 0;
    }

    // Add proficiency to chosen skills
    for ( item of skillsToAddProf )
    {
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

    fillOutSheet();
    document.getElementById("sheet").style.display = "block";
    document.getElementById("choice").style.display = "none";

}


