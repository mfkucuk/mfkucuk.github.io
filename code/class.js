class Class 
{
	// Constructor
	constructor( val)
	{
		this.val = val;
	}

	// Methods
	classBonus( val)
	{
		switch ( val )
		{
			case "Barbarian":
			stStr += PROF;
			stCon += PROF;

	      	for( var i = 0; i < 2; i++ )
	      	{
	        	gold = Math.floor(Math.random * 4 + 1) * 10;
	      	}

	      	health = 12 + modCon;
	      	break;

			case "Bard":
			stDex += PROF;
			stCha += PROF;

	      	for( var i = 0; i < 5; i++ )
	      	{
	        	gold = Math.floor(Math.random * 4 + 1) * 10;
	      	}

	      	health = 8 + modCon;
			break;

			case "Cleric":
			stWis += PROF;
			stCha += PROF;

	      	for( var i = 0; i < 5; i++ )
	      	{
	        	gold = Math.floor(Math.random * 4 + 1) * 10;
	      	}

	      	health = 8 + modCon;
			break;

			case "Druid":
			stInt += PROF;
			stWis += PROF;

	      	for( var i = 0; i < 2; i++ )
	      	{
	        	gold = Math.floor(Math.random * 4 + 1) * 10;
	      	}

	      	health = 8 + modCon;
	      	languages.add("Druidic");
			break;

			case "Fighter":
			stStr += PROF;
			stCon += PROF;

	      	for( var i = 0; i < 5; i++ )
	      	{
	        	gold = Math.floor(Math.random * 4 + 1) * 10;
	      	}

	      	health = 10 + modCon;
			break;

			case "Monk":
			stStr += PROF;
			stDex += PROF;

	      	for( var i = 0; i < 5; i++ )
	      	{
	        	gold = Math.floor(Math.random * 4 + 1);
	      	}

	      	health = 8 + modCon;
			break;

			case "Paladin":
			stWis += PROF;
			stCha += PROF;

	      	for( var i = 0; i < 5; i++ )
	      	{
	        	gold = Math.floor(Math.random * 4 + 1) * 10;
	      	}

	      	health = 10 + modCon;
			break;

			case "Ranger":
			stStr += PROF;
			stDex += PROF;
	      	for( var i = 0; i < 5; i++ )
	      	{
	        	gold = Math.floor(Math.random * 4 + 1) * 10;
	      	}

	      	health = 10 + modCon;
			break;

			case "Rogue":
			stInt += PROF;
			stDex += PROF;
	      	for( var i = 0; i < 4; i++)
	      	{
	        	gold = Math.floor(Math.random * 4 + 1) * 10;
	      	}

	      	health = 8 + modCon;
			break;

			case "Sorcerer":
			stCha += PROF;
			stCon += PROF;
	      	for( var i = 0; i < 3; i++)
	      	{
	        	gold = Math.floor(Math.random * 4 + 1) * 10;
	      	}

	      	health = 6 + modCon;
			break;

			case "Warlock":
			stCha += PROF;
			stWis += PROF;
	      	for( var i = 0; i < 4; i++)
	      	{
	        	gold = Math.floor(Math.random * 4 + 1) * 10;
	      	}

	      	health = 8 + modCon;
			break;

			case "Wizard":
			stInt += PROF;
			stWis += PROF;
	      	for( var i = 0; i < 4; i++)
	      	{
	        	gold = Math.floor(Math.random * 4 + 1) * 10;
	      	}

	      	health = 6 + modCon;
			break;
		}

	}

	// Setters
	setClass(c) 
	{
		this.val = c;
	}

	// Getters
	getClass()
	{
		return this.val;
	}

}