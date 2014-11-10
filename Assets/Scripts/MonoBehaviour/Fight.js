@script ExecuteInEditMode

var style1:GUIStyle;
var style2:GUIStyle;
static var first:Pokemon;
static var second:Pokemon;

var bar:Texture2D;
private var firstTexture:Texture2D;
private var secondTexture:Texture2D;

var PosOfFirstBar:Vector2;
var PosOfSecondBar:Vector2;

var SizeOfFirstBar:float;
var SizeOfSecondBar:float;

var PosOfFirstPokemon:Vector2;
var PosOfSecondPokemon:Vector2;

var SizeOfFirstPokemon:float;
var SizeOfSecondPokemon:float;

var PosOfLabels:Vector2;
var PosOfNameLabels:Vector2;
var PosOfLevelLabels:Vector2;

var pokemon:Pokemon;
var espece:Espece;

function Start()
{
	espece = Main.Bulbasar;
	pokemon = Pokemon(espece, Random.Range(0, 31), Random.Range(0, 31), Random.Range(0, 31), Random.Range(0, 31), Random.Range(0, 31), Random.Range(0, 31), 0, 0, 0, 0, 0, 0, Random.Range(1, 25), "Bulbasar", Nature(1, 1, 0, 0, 0));
}

function test()
{
	espece = Main.Bulbasar;
	pokemon = Pokemon(espece, Random.Range(0, 31), Random.Range(0, 31), Random.Range(0, 31), Random.Range(0, 31), Random.Range(0, 31), Random.Range(0, 31), 0, 0, 0, 0, 0, 0, Random.Range(1, 25), "Bulbasar", Nature(1, 1, 0, 0, 0));
}

function OnGUI ()
{
	firstTexture = Resources.LoadAssetAtPath("Assets/Textures/Espece/battle/Backward/" + first.espece.nameOfEspece + ".png", Texture2D);
	secondTexture = Resources.LoadAssetAtPath("Assets/Textures/Espece/battle/Forward/" + first.espece.nameOfEspece + ".png", Texture2D);
	
	GUI.DrawTexture(Rect(Screen.width/PosOfFirstBar.x, Screen.height/PosOfFirstBar.y, bar.width * SizeOfFirstBar, bar.height * SizeOfFirstBar), bar, ScaleMode.ScaleToFit);
	GUI.DrawTexture(Rect(Screen.width/PosOfSecondBar.x, Screen.height/PosOfSecondBar.y, bar.width * SizeOfSecondBar, bar.height * SizeOfSecondBar), bar, ScaleMode.ScaleToFit);
	
	GUI.DrawTexture(Rect(Screen.width/PosOfFirstPokemon.x, Screen.height/PosOfFirstPokemon.y, firstTexture.width * SizeOfFirstPokemon, firstTexture.height * SizeOfFirstPokemon), firstTexture, ScaleMode.ScaleToFit);
	GUI.DrawTexture(Rect(Screen.width/PosOfSecondPokemon.x, Screen.height/PosOfSecondPokemon.y, secondTexture.width * SizeOfSecondPokemon, secondTexture.height * SizeOfSecondPokemon), secondTexture, ScaleMode.ScaleToFit);

	GUI.Label(Rect(Screen.width/PosOfFirstBar.x + PosOfLabels.x, Screen.height/PosOfFirstBar.y + PosOfLabels.y, bar.width * SizeOfFirstBar, bar.height * SizeOfFirstBar), pokemon.PVU + "/" + pokemon.PV, style1);
	GUI.Label(Rect(Screen.width/PosOfSecondBar.x + PosOfLabels.x, Screen.height/PosOfSecondBar.y + PosOfLabels.y, bar.width * SizeOfSecondBar, bar.height * SizeOfSecondBar), first.PVU + "/" + first.PV, style1);
	
	GUI.Label(Rect(Screen.width/PosOfFirstBar.x + PosOfNameLabels.x, Screen.height/PosOfFirstBar.y + PosOfNameLabels.y, bar.width * SizeOfFirstBar, bar.height * SizeOfFirstBar), pokemon.surname, style2);
	GUI.Label(Rect(Screen.width/PosOfSecondBar.x + PosOfNameLabels.x, Screen.height/PosOfSecondBar.y + PosOfNameLabels.y, bar.width * SizeOfSecondBar, bar.height * SizeOfSecondBar), first.surname, style2);
	
	GUI.Label(Rect(Screen.width/PosOfFirstBar.x + PosOfLevelLabels.x, Screen.height/PosOfFirstBar.y + PosOfLevelLabels.y, bar.width * SizeOfFirstBar, bar.height * SizeOfFirstBar), "lv " + pokemon.level, style2);
	GUI.Label(Rect(Screen.width/PosOfSecondBar.x + PosOfLevelLabels.x, Screen.height/PosOfSecondBar.y + PosOfLevelLabels.y, bar.width * SizeOfSecondBar, bar.height * SizeOfSecondBar), "lv " + first.level, style2);
	
}