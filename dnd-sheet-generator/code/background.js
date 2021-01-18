class Background 
{
	// Constructor
	constructor( val)
	{
		this.val = val;
	}

	// Methods
	backgroundBonus( val) 
	{
		switch ( val ) {
  
			case "Acolyte":
			skillsToAddProf.add("insight");
			skillsToAddProf.add("religion");
			break;
		  
			case "City Watch":
			skillsToAddProf.add("athletics");
			skillsToAddProf.add("insight");
			break;

			case "Criminal":
			skillsToAddProf.add("deception");
			skillsToAddProf.add("stealth");
			break;

			case "Entertainer":
			skillsToAddProf.add("acrobatics");
			skillsToAddProf.add("performance");
			break;

			case "Secret Agency":
			skillsToAddProf.add("insight");
			skillsToAddProf.add("persuasion");	
			break;

			case "Far Traveler":		
			skillsToAddProf.add("insight");
			skillsToAddProf.add("perception");
			break;

		  	case "Folk Hero":
			skillsToAddProf.add("perception");
			skillsToAddProf.add("survival");
			break;

		  	case "Guild Artisan":
			skillsToAddProf.add("insight");
			skillsToAddProf.add("persuasion");
			break;

		  	case "Hermit":
			skillsToAddProf.add("medicine");
			skillsToAddProf.add("religion");
			break;

		  	case "Noble":
			skillsToAddProf.add("history");
			skillsToAddProf.add("persuasion");
			break;

		  	case "Outlander":
			skillsToAddProf.add("athletics");
			skillsToAddProf.add("survival");
			break;

		  	case "Sailor":
			skillsToAddProf.add("athletics");
			skillsToAddProf.add("perception");
			break;

		  	case "Soldier":
			skillsToAddProf.add("athletics");
			skillsToAddProf.add("intimidation");
			break;

		  	case "Urban Bounty Hunter":
			skillsToAddProf.add("insight");
			skillsToAddProf.add("stealth");
			break;
		}
	}
}