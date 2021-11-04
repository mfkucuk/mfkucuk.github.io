canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

// Functions
function checkDigit(value, x, y)
{
	if ( value >= 10 )
	{
		ctx.fillText(value, x, y);
	}
	else
	{
		ctx.fillText(value, x + 5, y);
	}
}

function checkSign(value, x, y)
{
	if ( value > 0 )
	{
		ctx.fillText( "+" + value, x - 2, y);
	}
	else if ( value < 0 )
	{
		ctx.fillText(value, x, y);
	}
	else
	{
		ctx.fillText(value, x + 4, y);
	}
}

function isProf( value, mod)
{
	if ( value != mod )
	{
		ctx.fill();
	}
}

function print()
{
    window.print();
}

// Layout of the character sheet
// Character information
function fillOutSheet()
{
	ctx.font = "24px Arial";
	ctx.fillText("Character Name", 10, 20);
	ctx.fillText(cname, 10, 50);

	ctx.font = "12px Arial";
	ctx.fillText("Class & Level: " + pclass + "/1", 300,20);
	ctx.fillText("Race: " + race, 300, 40);
	ctx.fillText("Background: " + background, 470, 20);
	ctx.fillText("Alignment: " + alignment, 470, 40);
	ctx.fillText("Player Name: " + pname, 700, 20);
	ctx.fillText("Experience Points: ", 700, 40);




	// Stats & modifiers
	ctx.font = "20px Arial"

	// Strength
	ctx.fillText("Strength", 10, 105);
	ctx.beginPath();
	ctx.arc(50, 150, 40, 0, 2 * Math.PI);
	checkSign(modStr, 40, 150);
	ctx.rect(20, 190, 60, 30);
	checkDigit(str, 40, 213);
	ctx.stroke();

	// Dexterity
	ctx.fillText("Dexterity", 10, 255);
	ctx.beginPath();
	ctx.arc(50, 300, 40, 0, 2 * Math.PI);
	checkSign(modDex, 40, 300);
	ctx.rect(20, 340, 60, 30);
	checkDigit(dex, 40, 363);
	ctx.stroke();

	// Constitution
	ctx.fillText("Constitution", 10, 405);
	ctx.beginPath();
	ctx.arc(50, 450, 40, 0, 2 * Math.PI);
	checkSign(modCon, 40, 450);
	ctx.rect(20, 490, 60, 30);
	checkDigit(con, 40, 513);
	ctx.stroke();

	// Intelligence
	ctx.fillText("Intelligence", 10, 555);
	ctx.beginPath();
	ctx.arc(50, 600, 40, 0, 2 * Math.PI);
	checkSign(modInt, 40, 600);
	ctx.rect(20, 640, 60, 30);
	checkDigit(int, 40, 663);
	ctx.stroke();

	// Wisdom
	ctx.fillText("Wisdom", 10, 705);
	ctx.beginPath();
	ctx.arc(50, 750, 40, 0, 2 * Math.PI);
	checkSign(modWis, 40, 750);
	ctx.rect(20, 790, 60, 30);
	checkDigit(wis, 40, 813);
	ctx.stroke();

	// Charisma
	ctx.fillText("Charisma", 10, 855);
	ctx.beginPath();
	ctx.arc(50, 900, 40, 0, 2 * Math.PI);
	checkSign(modCha, 40, 900);
	ctx.rect(20, 940, 60, 30);
	checkDigit(cha, 40, 963);
	ctx.stroke();


	ctx.font = "12px Arial"

	// Saving throws
	ctx.fillText("Saving Throws", 205, 305);
	ctx.beginPath();
	ctx.rect(150, 110, 200, 200);
	ctx.stroke();

	// Strength saving throw
	ctx.fillText("Strength", 250, 145);
	checkSign(stStr, 210, 145);
	ctx.beginPath();
	ctx.arc(175, 140, 4, 0, 2 * Math.PI);
	isProf(stStr, modStr);
	ctx.stroke();

	// Dexterity saving throw
	ctx.fillText("Dexterity", 250, 165);
	checkSign(stDex, 210, 165);
	ctx.beginPath();
	ctx.arc(175, 160, 4, 0, 2 * Math.PI);
	isProf(stDex, modDex);
	ctx.stroke();

	// Constitution saving throw
	ctx.fillText("Constitution", 250, 185);
	checkSign(stCon, 210, 185);
	ctx.beginPath();
	ctx.arc(175, 180, 4, 0, 2 * Math.PI);
	isProf(stCon, modCon);
	ctx.stroke();

	// Intelligence saving throw
	ctx.fillText("Intelligence", 250, 205);
	checkSign(stInt, 210, 205);
	ctx.beginPath();
	ctx.arc(175, 200, 4, 0, 2 * Math.PI);
	isProf(stInt, modInt);
	ctx.stroke();

	// Wisdom saving throw
	ctx.fillText("Wisdom", 250, 225);
	checkSign(stWis, 210, 225);
	ctx.beginPath();
	ctx.arc(175, 220, 4, 0, 2 * Math.PI);
	isProf(stWis, modWis);
	ctx.stroke();

	// Charisma saving throw
	ctx.fillText("Charisma", 250, 245);
	checkSign(stCha, 210, 245);
	ctx.beginPath();
	ctx.arc(175, 240, 4, 0, 2 * Math.PI);
	isProf(stCha, modCha);
	ctx.stroke();





	// Skills
	ctx.fillText("Skills", 230, 755);
	ctx.beginPath();
	ctx.rect(150, 360, 200, 400);
	ctx.stroke();

	// Acrobatics
	ctx.fillText("Acrobatics", 250, 395);
	checkSign(skills[0], 210, 395);
	ctx.beginPath();
	ctx.arc(175, 390, 4, 0, 2 * Math.PI);
	isProf(skills[0], modDex);
	ctx.stroke();

	// Animal Handling
	ctx.fillText("Animal Handling", 250, 415);
	checkSign(skills[1], 210, 415);
	ctx.beginPath();
	ctx.arc(175, 410, 4, 0, 2 * Math.PI);
	isProf(skills[1], modWis);
	ctx.stroke();

	// Arcana
	ctx.fillText("Arcana", 250, 435);
	checkSign(skills[2], 210, 435);
	ctx.beginPath();
	ctx.arc(175, 430, 4, 0, 2 * Math.PI);
	isProf(skills[2], modInt);
	ctx.stroke();

	// Athletics
	ctx.fillText("Athletics", 250, 455);
	checkSign(skills[3], 210, 455);
	ctx.beginPath();
	ctx.arc(175, 450, 4, 0, 2 * Math.PI);
	isProf(skills[3], modStr);
	ctx.stroke();

	// Deception
	ctx.fillText("Deception", 250, 475);
	checkSign(skills[4], 210, 475);
	ctx.beginPath();
	ctx.arc(175, 470, 4, 0, 2 * Math.PI);
	isProf(skills[4], modCha);
	ctx.stroke();

	// History
	ctx.fillText("History", 250, 495);
	checkSign(skills[5], 210, 495);
	ctx.beginPath();
	ctx.arc(175, 490, 4, 0, 2 * Math.PI);
	isProf(skills[5], modInt);
	ctx.stroke();

	// Insight
	ctx.fillText("Insight", 250, 515);
	checkSign(skills[6], 210, 515);
	ctx.beginPath();
	ctx.arc(175, 510, 4, 0, 2 * Math.PI);
	isProf(skills[6], modWis);
	ctx.stroke();

	// Intimidation
	ctx.fillText("Intimidation", 250, 535);
	checkSign(skills[7], 210, 535);
	ctx.beginPath();
	ctx.arc(175, 530, 4, 0, 2 * Math.PI);
	isProf(skills[7], modCha);
	ctx.stroke();

	// Investigation
	ctx.fillText("Investigation", 250, 555);
	checkSign(skills[8], 210, 555);
	ctx.beginPath();
	ctx.arc(175, 550, 4, 0, 2 * Math.PI);
	isProf(skills[8], modInt);
	ctx.stroke();

	// Medicine
	ctx.fillText("Medicine", 250, 575);
	checkSign(skills[9], 210, 575);
	ctx.beginPath();
	ctx.arc(175, 570, 4, 0, 2 * Math.PI);
	isProf(skills[9], modWis);
	ctx.stroke();

	// Nature
	ctx.fillText("Nature", 250, 595);
	checkSign(skills[10], 210, 595);
	ctx.beginPath();
	ctx.arc(175, 590, 4, 0, 2 * Math.PI);
	isProf(skills[10], modInt);
	ctx.stroke();

	// Perception
	ctx.fillText("Perception", 250, 615);
	checkSign(skills[11], 210, 615);
	ctx.beginPath();
	ctx.arc(175, 610, 4, 0, 2 * Math.PI);
	isProf(skills[11], modWis);
	ctx.stroke();

	// Performance
	ctx.fillText("Performance", 250, 635);
	checkSign(skills[12], 210, 635);
	ctx.beginPath();
	ctx.arc(175, 630, 4, 0, 2 * Math.PI);
	isProf(skills[12], modCha);
	ctx.stroke();

	// Persuasion
	ctx.fillText("Persuasion", 250, 655);
	checkSign(skills[13], 210, 655);
	ctx.beginPath();
	ctx.arc(175, 650, 4, 0, 2 * Math.PI);
	isProf(skills[13], modCha);
	ctx.stroke();

	// Religion
	ctx.fillText("Religion", 250, 675);
	checkSign(skills[14], 210, 675);
	ctx.beginPath();
	ctx.arc(175, 670, 4, 0, 2 * Math.PI);
	isProf(skills[14], modInt);
	ctx.stroke();

	// Sleight of Hand
	ctx.fillText("Sleight of Hand", 250, 695);
	checkSign(skills[15], 210, 695);
	ctx.beginPath();
	ctx.arc(175, 690, 4, 0, 2 * Math.PI);
	isProf(skills[15], modDex);
	ctx.stroke();

	// Stealth
	ctx.fillText("Stealth", 250, 715);
	checkSign(skills[16], 210, 715);
	ctx.beginPath();
	ctx.arc(175, 710, 4, 0, 2 * Math.PI);
	isProf(skills[16], modDex);
	ctx.stroke();

	// Survival
	ctx.fillText("Survival", 250, 735);
	checkSign(skills[17], 210, 735);
	ctx.beginPath();
	ctx.arc(175, 730, 4, 0, 2 * Math.PI);
	isProf(skills[17], modWis);
	ctx.stroke();




	// Perception
	ctx.fillText("Passive Wisdom (Perception)", 152, 800);
	ctx.beginPath();
	ctx.rect(150, 780, 200, 30);
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(330, 795, 15, 0, 2 * Math.PI);
	checkDigit((10 + skills[11]), 323, 798);
	ctx.stroke();



	// Languages
	var y = 850;
	ctx.fillText("Languages", 220, 973);
	ctx.beginPath();
	ctx.rect(150, 830, 200, 150);
	for ( lang of languages )
	{
		ctx.fillText( lang, 160, y);
		y += 20;
	}
	ctx.stroke();


	// Initative, hp & armor
	ctx.font = "20px Arial";

	// Initative
	ctx.fillText("Initative", 385, 105);
	checkSign(modDex, 410, 150);
	ctx.beginPath();
	ctx.arc(420, 150, 40, 0, 2 * Math.PI);
	ctx.stroke();

	// HP
	ctx.fillText("HP", 505, 105);
	checkDigit(health, 510, 150);
	ctx.beginPath();
	ctx.arc(520, 150, 40, 0, 2 * Math.PI);
	ctx.stroke();

	// Armor
	ctx.fillText("Armor", 595, 105);
	ctx.beginPath();
	ctx.arc(620, 150, 40, 0, 2 * Math.PI);
	ctx.stroke();





	// Proficiency & Inspiration
	ctx.font = "18px Arial";
	ctx.fillText("Inspiration", 750, 125);
	ctx.fillText("Proficiency Bonus", 722, 175);

	ctx.font = "24px Arial";

	// Inspiration
	ctx.beginPath();
	ctx.rect(680, 100, 40, 40);
	ctx.rect(720, 110, 150, 20);
	ctx.stroke();

	// Proficiency
	ctx.beginPath();
	ctx.rect(680, 150, 40, 40);
	ctx.fillText(PROF, 693, 178);
	ctx.rect(720, 160, 150, 20);
	ctx.stroke();


	ctx.font = "12px Arial"

	// Personal Traits
	ctx.fillText("Features & Traits", 710, 970);
	ctx.beginPath();
	ctx.rect(610, 200, 280, 780);
	ctx.stroke();


	// Hitpoints & Death throws
	ctx.beginPath();
	ctx.fillText("Hit Dice", 395, 490);
	ctx.fillText("Death Saves", 505, 490);
	ctx.rect(360, 200, 240, 300);
	ctx.fillText("Current Hit Points", 427, 300);
	ctx.fillText("Hit Point Maximum:", 370, 220);
	ctx.rect(365, 205, 230, 100);
	ctx.fillText("Temporary Hit Points", 422, 405);
	ctx.rect(365, 310, 230, 100);
	ctx.rect(365, 415, 110, 80);
	ctx.fillText("Total:", 370, 435);
	ctx.rect(480, 415, 115, 80);
	ctx.stroke();

	ctx.fillText("Success", 482, 438);
	ctx.beginPath();
	ctx.arc(535, 435, 4, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(555, 435, 4, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(575, 435, 4, 0, 2 * Math.PI);
	ctx.stroke();

	ctx.fillText("Failure", 490, 458);
	ctx.beginPath();
	ctx.arc(535, 455, 4, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(555, 455, 4, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(575, 455, 4, 0, 2 * Math.PI);
	ctx.stroke();


	// Artifacts & Spellcasting
	ctx.fillText("Artifacts & Spellcasting", 420, 735);
	ctx.beginPath();
	ctx.rect(360, 510, 240, 230);
	ctx.fillText("Name", 365, 525);
	ctx.fillText("Atk", 465, 525);
	ctx.fillText("Damage/Type", 500, 525);
	ctx.rect(365, 530, 95, 30);
	ctx.rect(465, 530, 30, 30);
	ctx.rect(500, 530, 95, 30);

	ctx.rect(365, 565, 95, 30);
	ctx.rect(465, 565, 30, 30);
	ctx.rect(500, 565, 95, 30);

	ctx.rect(365, 600, 95, 30);
	ctx.rect(465, 600, 30, 30);
	ctx.rect(500, 600, 95, 30);
	ctx.stroke();


	// Equipment
	ctx.fillText("Equipment", 450, 975);
	ctx.beginPath();
	ctx.rect(360, 750, 240, 230);
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(390, 780, 15, 0, 2 * Math.PI);
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(390, 815, 15, 0, 2 * Math.PI);
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(390, 850, 15, 0, 2 * Math.PI);
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(390, 885, 15, 0, 2 * Math.PI);
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(390, 920, 15, 0, 2 * Math.PI);
	ctx.stroke();

	ctx.globalCompositeOperation = 'destination-over'
	// Now draw!
	ctx.fillStyle = "#D2B48C";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}	