static var first:Pokemon;
static var second:Pokemon;
static var third:Pokemon;
static var fourth:Pokemon;
static var fifth:Pokemon;
static var sixth:Pokemon;

private var openGui:boolean;
private var onClick:boolean = false;
var texture:Texture2D;

function Update ()
{
	if (Input.GetKeyDown(KeyCode.Escape))
	{
		if (!openGui) openGui = true;
		else openGui = false;
	}
}

function OnGUI ()
{
	if (openGui)
	{
		GUI.Box(Rect(-5,-5,Screen.width + 10,Screen.height + 10),"Menu");
		if (GUI.Button(Rect(Screen.width/2 - 200, Screen.height/2 - 100, 100, 25), "Pokémon"))
		{
			if (!onClick) onClick = true;
			else onClick = false;
		}
		
		if (GUI.Button(Rect(Screen.width/2 - 200, Screen.height/2 - 75, 100, 25), "Pokédex"));
		if (GUI.Button(Rect(Screen.width/2 - 200, Screen.height/2 - 50, 100, 25), "Sac"));
		if (GUI.Button(Rect(Screen.width/2 - 200, Screen.height/2 - 25, 100, 25), "Sauvegarder"));
		
		if (onClick)
		{
			if (first != null)
			GUI.DrawTexture(Rect(Screen.width/2 - 50, Screen.height/2 - 100, Resources.LoadAssetAtPath(first.espece.texturePath, Texture2D).width, Resources.LoadAssetAtPath(first.espece.texturePath, Texture2D).height), Resources.LoadAssetAtPath(first.espece.texturePath, Texture2D));
			
			if (second != null)
			print(second.espece.nameOfEspece);
			
			if (third != null)
			GUI.Button(Rect(Screen.width/2 + 200, Screen.height/2 - 100, 25, 25), third.espece.nameOfEspece);
			
			if (fourth != null)
			GUI.Button(Rect(Screen.width/2 + 200, Screen.height/2 - 100, 25, 25), fourth.espece.nameOfEspece);
			
			if (fifth != null)
			GUI.Button(Rect(Screen.width/2 + 200, Screen.height/2 - 100, 25, 25), fifth.espece.nameOfEspece);
			
			if (sixth != null)
			GUI.Button(Rect(Screen.width/2 + 200, Screen.height/2 - 100, 25, 25), sixth.espece.nameOfEspece);
		}
	}
}

static function AddPokemonInInventory (pokemon:Pokemon, number:int)
{
	if (number == 0) first = pokemon;
	if (number == 1) second = pokemon;
	if (number == 2) third = pokemon;
	if (number == 3) fourth = pokemon;
	if (number == 4) fifth = pokemon;
	if (number == 5) sixth = pokemon;
}