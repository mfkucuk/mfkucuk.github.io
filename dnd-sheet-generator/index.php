<!DOCTYPE html>
<html>
<head>
	<title>DnD Sheet Generator</title>

	<link rel="stylesheet" type="text/css" href="dndstyles.css">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Redressed&display=swap" rel="stylesheet">
</head>
<body style="background-color: #D2B48C">

	<script type="text/javascript" src="code/race.js"></script>
	<script type="text/javascript" src="code/background.js"></script>
	<script type="text/javascript" src="code/class.js"></script>


	<div id="welcomePage">
		<h1>DnD Sheet Generator</h1>
		<h2>v2.1</h2>
		<p>Choose your character's race, background, class etc. and let this program throw the dice and fill out the character sheet for you. ...Or randomly generate
		a character and a sheet.</p>

		<button type="button" onclick="start()">Create</button>
		<button type="button" onclick="startRandomly()">Generate</button>
		<br>
		<br>
		<br>
		<div id="update">
			<h3>Version 2.1 is out! What's New?</h3>
			<p>- Minor bug fixes.</p>
			<p>- Added a generate button which will randomize everything except the player name.</p>
		</div>

		<h3>Report bugs or anything here:</h3>
		<form action="process.php" method="get" target="_blank">
			E-mail: <input type="email" name="email">
			<br><br>
			Message: <textarea name="text"></textarea>
			<br><br>

			<input type="submit" name="submit">
		</form>
	</div>

	<!-- Random Start -->
	<div id="playerName" style="display: none;">
		<label for="playerName1">Player name: </label>
		<input type="text" name="playerName" id="playerName1"><br><br>

		<button type="button" onclick="askForPlayerName()">Continue</button>
	</div>

	<!-- Manual Start -->
	<!-- Input start -->
	<div id="input" style="display: none;">
		<p><b>Enter your name:</b></p>
		<form id="pname" class="input">
			<label for="pname1">Player name: </label>
			<input type="text" name="pname" id="pname1"><br><br>
		</form>

		<p><b>Enter your character's name:</b></p>
		<form id="cname" class="input">
			<label for="pname1">Character name: </label>
			<input type="text" name="cname" id="cname1" required><br><br>
		</form>

		<p><b>Select your character's sex:</b></p>
		<form class="input">
			<input type="radio" name="sex" id="sexchoice1" value="Male">
			<label for="sexchoice1">Male</label><br>
			<input type="radio" name="sex" id="sexchoice2" value="Female">
			<label for="sexchoice2">Female</label><br>
			<input type="radio" name="sex" id="sexchoice3" value="Other">
			<label for="sexchoice3">Other</label><br><br>
		</form>

		<p><b>Enter your character's age:</b></p>
		<form id="age">
			<label for="age1">Age:</label>
			<input type="text" name="age" id="age1" required><br><br>
		</form>

		<p><b>Assign your rolls to desired stats (Strength/Dexterity/etc.):</b></p>
		<form>
			<p id="d1"></p>
			<input type="radio" name="d1" value="strength">
			<label for="hebonus1">Strength</label>
			<input type="radio" name="d1" value="dexterity">
			<label for="hebonus1">Dexterity</label>
			<input type="radio" name="d1" value="constitution">
			<label for="hebonus1">Constitution</label>
			<input type="radio" name="d1" value="intelligence">
			<label for="hebonus1">Intelligence</label>
			<input type="radio" name="d1" value="wisdom">
			<label for="hebonus1">Wisdom</label>
			<input type="radio" name="d1" value="charisma">
			<label for="hebonus1">Charisma</label><br>
		</form>

		<form>
			<p id="d2"></p>
			<input type="radio" name="d2" value="strength">
			<label for="hebonus1">Strength</label>
			<input type="radio" name="d2" value="dexterity">
			<label for="hebonus1">Dexterity</label>
			<input type="radio" name="d2" value="constitution">
			<label for="hebonus1">Constitution</label>
			<input type="radio" name="d2" value="intelligence">
			<label for="hebonus1">Intelligence</label>
			<input type="radio" name="d2" value="wisdom">
			<label for="hebonus1">Wisdom</label>
			<input type="radio" name="d2" value="charisma">
			<label for="hebonus1">Charisma</label><br>
		</form>

		<form>
			<p id="d3"></p>
			<input type="radio" name="d3" value="strength">
			<label for="hebonus1">Strength</label>
			<input type="radio" name="d3" value="dexterity">
			<label for="hebonus1">Dexterity</label>
			<input type="radio" name="d3" value="constitution">
			<label for="hebonus1">Constitution</label>
			<input type="radio" name="d3" value="intelligence">
			<label for="hebonus1">Intelligence</label>
			<input type="radio" name="d3" value="wisdom">
			<label for="hebonus1">Wisdom</label>
			<input type="radio" name="d3" value="charisma">
			<label for="hebonus1">Charisma</label><br>
		</form>

		<form>
			<p id="d4"></p>
			<input type="radio" name="d4" value="strength">
			<label for="hebonus1">Strength</label>
			<input type="radio" name="d4" value="dexterity">
			<label for="hebonus1">Dexterity</label>
			<input type="radio" name="d4" value="constitution">
			<label for="hebonus1">Constitution</label>
			<input type="radio" name="d4" value="intelligence">
			<label for="hebonus1">Intelligence</label>
			<input type="radio" name="d4" value="wisdom">
			<label for="hebonus1">Wisdom</label>
			<input type="radio" name="d4" value="charisma">
			<label for="hebonus1">Charisma</label><br>
		</form>

		<form>
			<p id="d5"></p>
			<input type="radio" name="d5" value="strength">
			<label for="hebonus1">Strength</label>
			<input type="radio" name="d5" value="dexterity">
			<label for="hebonus1">Dexterity</label>
			<input type="radio" name="d5" value="constitution">
			<label for="hebonus1">Constitution</label>
			<input type="radio" name="d5" value="intelligence">
			<label for="hebonus1">Intelligence</label>
			<input type="radio" name="d5" value="wisdom">
			<label for="hebonus1">Wisdom</label>
			<input type="radio" name="d5" value="charisma">
			<label for="hebonus1">Charisma</label><br>
		</form>

		<form>
			<p id="d6"></p>
			<input type="radio" name="d6" value="strength">
			<label for="hebonus1">Strength</label>
			<input type="radio" name="d6" value="dexterity">
			<label for="hebonus1">Dexterity</label>
			<input type="radio" name="d6" value="constitution">
			<label for="hebonus1">Constitution</label>
			<input type="radio" name="d6" value="intelligence">
			<label for="hebonus1">Intelligence</label>
			<input type="radio" name="d6" value="wisdom">
			<label for="hebonus1">Wisdom</label>
			<input type="radio" name="d6" value="charisma">
			<label for="hebonus1">Charisma</label><br><br><br>
		</form>

		<p><b>Select your character's race:</b></p>
		<form class="input">
			<input type="radio" name="race" id="racechoice1" value="Dragonborn">
			<label for="racechoice1">Dragonborn</label><br>
			<input type="radio" name="race" id="racechoice2" value="Dwarf">
			<label for="racechoice2">Dwarf</label><br>
			<input type="radio" name="race" id="racechoice3" value="Gnome">
			<label for="racechoice3">Gnome</label><br>
			<input type="radio" name="race" id="racechoice4" value="Half-Elf">
			<label for="racechoice4">Half-Elf</label><br>
			<input type="radio" name="race" id="racechoice5" value="Half-Orc">
			<label for="racechoice5">Half-Orc</label><br>
			<input type="radio" name="race" id="racechoice6" value="Halfling">
			<label for="racechoice6">Halfling</label><br>
			<input type="radio" name="race" id="racechoice7" value="High-Elf">
			<label for="racechoice7">High-Elf</label><br>
			<input type="radio" name="race" id="racechoice8" value="Human">
			<label for="racechoice8">Human</label><br>
			<input type="radio" name="race" id="racechoice9" value="Thiefling">
			<label for="racechoice7">Thiefling</label><br>
			<input type="radio" name="race" id="racechoice10" value="Wood-Elf">
			<label for="racechoice8">Wood-Elf</label><br><br>
		</form>

		<p><b>Select your character's alignment:</b></p>
		<form class="input">
			<input type="radio" name="align" id="alignchoice1" value="Lawful Good">
			<label for="alignchoice1">Lawful Good</label><br>
			<input type="radio" name="align" id="alignchoice2" value="Neutral Good">
			<label for="alignchoice2">Neutral Good</label><br>
			<input type="radio" name="align" id="alignchoice3" value="Chatoic Good">
			<label for="alignchoice3">Chaotic Good</label><br>
			<input type="radio" name="align" id="alignchoice4" value="Lawful Neutral">
			<label for="alignchoice4">Lawful Neutral</label><br>
			<input type="radio" name="align" id="alignchoice5" value="True Neutral">
			<label for="alignchoice5">True Neutral</label><br>
			<input type="radio" name="align" id="alignchoice6" value="Chaotic Neutral">
			<label for="alignchoice6">Chaotic Neutral</label><br>
			<input type="radio" name="align" id="alignchoice7" value="Lawful Evil">
			<label for="alignchoice7">Lawful Evil</label><br>
			<input type="radio" name="align" id="alignchoice8" value="Neutral Evil">
			<label for="alignchoice8">Neutral Evil</label><br>
			<input type="radio" name="align" id="alignchoice9" value="Chaotic Evil">
			<label for="alignchoice7">Chaotic Evil</label><br><br>
		</form>

		<p><b>Select your character's background:</b></p>
		<form class="input">
			<input type="radio" name="background" id="bgchoice1" value="Acolyte">
			<label for="bgchoice1">Acolyte</label><br>
			<input type="radio" name="background" id="bgchoice2" value="City Watch">
			<label for="bgchoice2">City Watch</label><br>
			<input type="radio" name="background" id="bgchoice3" value="Criminal">
			<label for="bgchoice3">Criminal</label><br>
			<input type="radio" name="background" id="bgchoice4" value="Entertainer">
			<label for="bgchoice4">Entertainer</label><br>
			<input type="radio" name="background" id="bgchoice5" value="Secret Agency">
			<label for="bgchoice5">Secret Agency</label><br>
			<input type="radio" name="background" id="bgchoice6" value="Far Traveler">
			<label for="bgchoice6">Far Traveler</label><br>
			<input type="radio" name="background" id="bgchoice7" value="Folk Hero">
			<label for="bgchoice7">Folk Hero</label><br>
			<input type="radio" name="background" id="bgchoice8" value="Guild Artisan">
			<label for="bgchoice8">Guild Artisan</label><br>
			<input type="radio" name="background" id="bgchoice9" value="Hermit">
			<label for="bgchoice7">Hermit</label><br>
			<input type="radio" name="background" id="bgchoice10" value="Noble">
			<label for="bgchoice8">Noble</label><br>
			<input type="radio" name="background" id="bgchoice11" value="Outlander">
			<label for="bgchoice7">Outlander</label><br>
			<input type="radio" name="background" id="bgchoice12" value="Sailor">
			<label for="bgchoice8">Sailor</label><br>
			<input type="radio" name="background" id="bgchoice13" value="Soldier">
			<label for="bgchoice7">Soldier</label><br>
			<input type="radio" name="background" id="bgchoice14" value="Urban Bounty Hunter">
			<label for="bgchoice8">Urban Bounty Hunter</label><br><br>
		</form>

		<button type="button" onclick="Continue()">Continue</button><br>
	</div>

	<script type="text/javascript" src="code/input.js"></script>
	<script type="text/javascript" src="code/random.js"></script>

	<div id="halfElfBonus" style="display: none;">
		<form class="input">
			<p><b>Select two stats to increment (Half-Elf Bonus):</b></p>
			<input type="checkbox" id="hebonus1" name="hebonus" value="strength">
			<label for="hebonus1">Strength</label><br>
			<input type="checkbox" name="hebonus" value="dexterity">
			<label for="hebonus1">Dexterity</label><br>
			<input type="checkbox" name="hebonus" value="constitution">
			<label for="hebonus1">Constitution</label><br>
			<input type="checkbox" name="hebonus" value="intelligence">
			<label for="hebonus1">Intelligence</label><br>
			<input type="checkbox" name="hebonus" value="wisdom">
			<label for="hebonus1">Wisdom</label><br><br>
		</form>

		<button type="button" onclick="halfElfBonus()">Continue</button>
	</div>

	<div id="classBonusInput" style="display: none;">
		<p><b>Your stats are determined by highest 3 values of 4d6 </b></p>
		<p id="stats"></p>
		<br>


		<p><b>Select your character's class:</b></p>
		<form class="input">
			<input type="radio" name="pclass" id="classchoice1" value="Barbarian">
			<label for="classchoice1">Barbarian</label><br>
			<input type="radio" name="pclass" id="classchoice2" value="Bard">
			<label for="classchoice2">Bard</label><br>
			<input type="radio" name="pclass" id="classchoice3" value="Cleric">
			<label for="classchoice3">Cleric</label><br>
			<input type="radio" name="pclass" id="classchoice4" value="Druid">
			<label for="classchoice4">Druid</label><br>
			<input type="radio" name="pclass" id="classchoice5" value="Fighter">
			<label for="classchoice5">Fighter</label><br>
			<input type="radio" name="pclass" id="classchoice6" value="Monk">
			<label for="classchoice6">Monk</label><br>
			<input type="radio" name="pclass" id="classchoice7" value="Paladin">
			<label for="classchoice7">Paladin</label><br>
			<input type="radio" name="pclass" id="classchoice8" value="Ranger">
			<label for="classchoice8">Ranger</label><br>
			<input type="radio" name="pclass" id="classchoice9" value="Rogue">
			<label for="classchoice7">Rogue</label><br>
			<input type="radio" name="pclass" id="classchoice10" value="Sorcerer">
			<label for="classchoice8">Sorcerer</label><br>
			<input type="radio" name="pclass" id="classchoice11" value="Warlock">
			<label for="classchoice7">Warlock</label><br>
			<input type="radio" name="pclass" id="classchoice12" value="Wizard">
			<label for="classchoice8">Wizard</label><br><br>
		</form>

		<button type="button" onclick="classBonusInput()">Continue</button><br>
		<!-- Input end -->
	</div>

	<div id="choice" style="display: none;">

		<p><b>Select your class bonuses:</b></p>
		<form class="input" id="barbarian" style="display: none;">
			<input type="checkbox" name="barbarian" value="animalHandling">
			<label for="barbchoice1">Animal Handling</label><br>
			<input type="checkbox" name="barbarian" value="athletics">
			<label for="barbchoice2">Athletics</label><br>
			<input type="checkbox" name="barbarian" value="intimidation">
			<label for="barbchoice3">Intimidation</label><br>
			<input type="checkbox" name="barbarian" value="nature">
			<label for="barbchoice4">Nature</label><br>
			<input type="checkbox" name="barbarian" value="perception">
			<label for="barbchoice5">Perception</label><br>
			<input type="checkbox" name="barbarian" value="survival">
			<label for="barbchoice6">Survival</label><br><br>
		</form>

		<form class="input" id="bard" style="display: none;">
			<input type="checkbox" name="bard" value="acrobatics">
			<label for="bardchoice1">Acrobatics</label><br>
			<input type="checkbox" name="bard" value="animalHandling">
			<label for="bardchoice2">Animal Handling</label><br>
			<input type="checkbox" name="bard" value="arcana">
			<label for="bardchoice3">Arcana</label><br>
			<input type="checkbox" name="bard" value="athletics">
			<label for="bardchoice4">Athletics</label><br>
			<input type="checkbox" name="bard" value="deception">
			<label for="barbchoice5">Deception</label><br>
			<input type="checkbox" name="bard" value="history">
			<label for="barbchoice6">History</label><br>
			<input type="checkbox" name="bard" value="insight">
			<label for="barbchoice7">Insight</label><br>
			<input type="checkbox" name="bard" value="intimidation">
			<label for="bardchoice8">Intimidation</label><br>
			<input type="checkbox" name="bard" value="investigation">
			<label for="barbchoice9">Investigation</label><br>
			<input type="checkbox" name="bard" value="medicine">
			<label for="barbchoice10">Medicine</label><br>
			<input type="checkbox" name="bard" value="nature">
			<label for="bardchoice11">Nature</label><br>
			<input type="checkbox" name="bard" value="perception">
			<label for="bardchoice12">Perception</label><br>
			<input type="checkbox" name="bard" value="performance">
			<label for="barbchoice13">Performance</label><br>
			<input type="checkbox" name="bard" value="persuasion">
			<label for="barbchoice14">Persuasion</label><br>
			<input type="checkbox" name="bard" value="religion">
			<label for="barbchoice15">Religion</label><br>
			<input type="checkbox" name="bard" value="sleightOfHand">
			<label for="barbchoice16">Sleight of Hand</label><br>
			<input type="checkbox" name="bard" value="stealth">
			<label for="barbchoice17">Stealth</label><br>
			<input type="checkbox" name="bard" value="survival">
			<label for="barbchoice18">Survival</label><br><br>
		</form>

		<form class="input" id="cleric" style="display: none;">
			<input type="checkbox" name="cleric" value="history">
			<label for="barbchoice6">History</label><br>
			<input type="checkbox" name="cleric" value="insight">
			<label for="barbchoice7">Insight</label><br>
			<input type="checkbox" name="cleric" value="medicine">
			<label for="barbchoice10">Medicine</label><br>
			<input type="checkbox" name="cleric" value="persuasion">
			<label for="barbchoice14">Persuasion</label><br>
			<input type="checkbox" name="cleric" value="religion">
			<label for="barbchoice15">Religion</label><br><br>
		</form>

		<form class="input" id="druid" style="display: none;">
			<input type="checkbox" name="druid" value="animalHandling">
			<label for="bardchoice2">Animal Handling</label><br>
			<input type="checkbox" name="druid" value="arcana">
			<label for="bardchoice3">Arcana</label><br>
			<input type="checkbox" name="druid" value="insight">
			<label for="barbchoice7">Insight</label><br>
			<input type="checkbox" name="druid" value="medicine">
			<label for="barbchoice10">Medicine</label><br>
			<input type="checkbox" name="druid" value="nature">
			<label for="bardchoice11">Nature</label><br>
			<input type="checkbox" name="druid" value="perception">
			<label for="bardchoice12">Perception</label><br>
			<input type="checkbox" name="druid" value="religion">
			<label for="barbchoice15">Religion</label><br>
			<input type="checkbox" name="druid" id="barbchoice18" value="survival">
			<label for="barbchoice18">Survival</label><br><br>
		</form>

		<form class="input" id="fighter" style="display: none;">
			<input type="checkbox" name="fighter" value="acrobatics">
			<label for="bardchoice1">Acrobatics</label><br>
			<input type="checkbox" name="fighter" value="animalHandling">
			<label for="bardchoice2">Animal Handling</label><br>
			<input type="checkbox" name="fighter" value="athletics">
			<label for="bardchoice4">Athletics</label><br>
			<input type="checkbox" name="fighter" value="history">
			<label for="barbchoice6">History</label><br>
			<input type="checkbox" name="fighter" value="insight">
			<label for="barbchoice7">Insight</label><br>
			<input type="checkbox" name="fighter" value="intimidation">
			<label for="bardchoice8">Intimidation</label><br>
			<input type="checkbox" name="fighter" value="perception">
			<label for="bardchoice12">Perception</label><br>
			<input type="checkbox" name="fighter" value="survival">
			<label for="barbchoice18">Survival</label><br><br>
		</form>

		<form class="input" id="monk" style="display: none;">
			<input type="checkbox" name="monk" value="acrobatics">
			<label for="bardchoice1">Acrobatics</label><br>
			<input type="checkbox" name="monk" value="athletics">
			<label for="bardchoice4">Athletics</label><br>
			<input type="checkbox" name="monk" value="history">
			<label for="barbchoice6">History</label><br>
			<input type="checkbox" name="monk" value="insight">
			<label for="barbchoice7">Insight</label><br>
			<input type="checkbox" name="monk" id="bardchoice15" value="religion">
			<label for="barbchoice15">Religion</label><br>
			<input type="checkbox" name="monk" id="bardchoice17" value="stealth">
			<label for="barbchoice17">Stealth</label><br><br>
		</form>

		<form class="input" id="paladin" style="display: none;">
			<input type="checkbox" name="paladin" value="athletics">
			<label for="bardchoice4">Athletics</label><br>
			<input type="checkbox" name="paladin" value="insight">
			<label for="barbchoice7">Insight</label><br>
			<input type="checkbox" name="paladin" value="intimidation">
			<label for="bardchoice8">Intimidation</label><br>
			<input type="checkbox" name="paladin" value="medicine">
			<label for="barbchoice10">Medicine</label><br>
			<input type="checkbox" name="paladin" value="persuasion">
			<label for="barbchoice14">Persuasion</label><br>
			<input type="checkbox" name="paladin" value="religion">
			<label for="barbchoice15">Religion</label><br><br>
		</form>

		<form class="input" id="ranger" style="display: none;">
			<input type="checkbox" name="ranger" value="animalHandling">
			<label for="bardchoice2">Animal Handling</label><br>
			<input type="checkbox" name="ranger" value="athletics">
			<label for="bardchoice4">Athletics</label><br>
			<input type="checkbox" name="ranger" value="insight">
			<label for="barbchoice7">Insight</label><br>
			<input type="checkbox" name="ranger" value="investigation">
			<label for="bardchoice8">Investigation</label><br>
			<input type="checkbox" name="ranger" value="nature">
			<label for="bardchoice11">Nature</label><br>
			<input type="checkbox" name="ranger" value="perception">
			<label for="bardchoice12">Perception</label><br>
			<input type="checkbox" name="ranger" value="stealth">
			<label for="barbchoice17">Stealth</label><br>
			<input type="checkbox" name="ranger" value="survival">
			<label for="barbchoice18">Survival</label><br><br>
		</form>

		<form class="input" id="rogue" style="display: none;">
			<input type="checkbox" name="rogue" value="acrobatics">
			<label for="bardchoice1">Acrobatics</label><br>
			<input type="checkbox" name="rogue" value="athletics">
			<label for="bardchoice4">Athletics</label><br>
			<input type="checkbox" name="rogue" value="deception">
			<label for="barbchoice5">Deception</label><br>
			<input type="checkbox" name="rogue" value="insight">
			<label for="barbchoice7">Insight</label><br>
			<input type="checkbox" name="rogue" value="intimidation">
			<label for="bardchoice8">Intimidation</label><br>
			<input type="checkbox" name="rogue" value="perception">
			<label for="bardchoice12">Perception</label><br>
			<input type="checkbox" name="rogue" value="persuasion">
			<label for="barbchoice14">Persuasion</label><br>
			<input type="checkbox" name="rogue" value="sleightOfHand">
			<label for="barbchoice16">Sleight of Hand</label><br>
			<input type="checkbox" name="rogue" value="stealth">
			<label for="barbchoice17">Stealth</label><br><br>
		</form>

		<form class="input" id="sorcerer" style="display: none;">
			<input type="checkbox" name="sorcerer" value="arcana">
			<label for="bardchoice3">Arcana</label><br>
			<input type="checkbox" name="sorcerer" value="deception">
			<label for="barbchoice5">Deception</label><br>
			<input type="checkbox" name="sorcerer" value="insight">
			<label for="barbchoice7">Insight</label><br>
			<input type="checkbox" name="sorcerer" value="intimidation">
			<label for="bardchoice8">Intimidation</label><br>
			<input type="checkbox" name="sorcerer" value="persuasion">
			<label for="barbchoice14">Persuasion</label><br>
			<input type="checkbox" name="sorcerer" value="religion">
			<label for="barbchoice15">Religion</label><br><br>
		</form>

		<form class="input" id="warlock" style="display: none;">
			<input type="checkbox" name="warlock" value="arcana">
			<label for="bardchoice3">Arcana</label><br>
			<input type="checkbox" name="warlock" value="deception">
			<label for="barbchoice5">Deception</label><br>
			<input type="checkbox" name="warlock" value="history">
			<label for="barbchoice6">History</label><br>
			<input type="checkbox" name="warlock" value="intimidation">
			<label for="bardchoice8">Intimidation</label><br>
			<input type="checkbox" name="warlock" value="investigation">
			<label for="barbchoice9">Investigation</label><br>
			<input type="checkbox" name="warlock" value="nature">
			<label for="bardchoice11">Nature</label><br>
			<input type="checkbox" name="warlock" value="religion">
			<label for="barbchoice15">Religion</label><br><br>
		</form>

		<form class="input" id="wizard" style="display: none;">
			<input type="checkbox" name="wizard" value="arcana">
			<label for="bardchoice3">Arcana</label><br>
			<input type="checkbox" name="wizard" value="history">
			<label for="barbchoice6">History</label><br>
			<input type="checkbox" name="wizard" value="insight">
			<label for="barbchoice7">Insight</label><br>
			<input type="checkbox" name="wizard" value="investigation">
			<label for="barbchoice9">Investigation</label><br>
			<input type="checkbox" name="wizard" value="medicine">
			<label for="barbchoice10">Medicine</label><br>
			<input type="checkbox" name="wizard" value="religion">
			<label for="barbchoice15">Religion</label><br><br>
		</form>
	
		<button type="button" onclick="Finish()">Finish</button>
	</div>

	<div id="sheet" style="display: none;">
		<canvas id="myCanvas" height="1024" width="900" style="border:1px solid #000;"></canvas>
		<br><br><br><br>
		<button type="button" onclick="print()">Print It</button>
	</div>

	<script type="text/javascript" src="code/setup.js"></script>
	
</body>
</html>