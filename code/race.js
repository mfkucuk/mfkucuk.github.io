var languages = new Set();
languages.add("Common");

class Race
{
	// Properties

	// Constructor
	constructor( val)
	{
		this.val = val
	}


	// Methods
	raceBonus( val)
	{
		switch ( val )
		{
			case "Dragonborn":
			str += 2;
			cha += 1;
			languages.add("Draconic");
			break;

			case "Dwarf":
			con += 2;
			wis += 1;
			languages.add("Dwarvish");
			break;

			case "Gnome":
			int += 2;
			dex += 1;
			languages.add("Gnomish");
			break;

			case "Half-Elf":
			cha += 2;
			languages.add("Elvish");
			break;

			case "Half-Orc":
			str += 2;
			con += 1;
			languages.add("Orcish");
			break;

			case "Halfling":
			dex += 2;
			cha += 1;
			languages.add("Halfling");
			break;

			case "High-Elf":
			dex += 2;
			int += 1;
			languages.add("Elvish");
			break;

			case "Human":
			str += 1;
			dex += 1;
			con += 1;
			int += 1;
			wis += 1;
			cha += 1;
			break;

			case "Thiefling":
			cha += 2;
			int += 1;
			break;

			case "Wood-Elf":
			dex += 2;
			wis += 1;
			languages.add("Elvish");
		}
	}

	// Setters

	// Getters
}