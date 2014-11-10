private var IsEnter:boolean = true;
private var lastPosition = Player.moveDirection;

var minChance:int;
var maxChance:int;

function OnTriggerEnter (other:Collider)
{
	if (IsEnter)
	{
		var chance = Random.Range(minChance, maxChance);
		
		if (chance == 1){/*yield WaitForSeconds (1); Main.boolTest = false;*/ Application.LoadLevel(1);}
		
		IsEnter = false;
	}
}

function OnTriggerExit (other:Collider)
{
	if (!IsEnter) {/*Enter("lalalal");*/ yield WaitForSeconds (0.2); IsEnter = true;}
}

function Enter (str:String)
{
	print("xD: " + str);
}