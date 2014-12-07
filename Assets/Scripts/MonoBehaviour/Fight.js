var style1:GUIStyle;
var style2:GUIStyle;
static var first1:Pokemon;
static var second2:Pokemon;

var bar:Texture2D;
var healtBar:Texture2D;
private var firstTexture:Texture2D;
private var secondTexture:Texture2D;

var PosOfFirstBar:Vector2;
var PosOfSecondBar:Vector2;
var PosOfHealtBar:Vector2;

var SizeOfFirstBar:float;
var SizeOfSecondBar:float;
var SizeOfHealtBar:Vector2;

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
	//pokemon = Pokemon(espece, Random.Range(0, 31), Random.Range(0, 31), Random.Range(0, 31), Random.Range(0, 31), Random.Range(0, 31), Random.Range(0, 31), 0, 0, 0, 0, 0, 0, Random.Range(1, 25), "Bulbasar", Nature(1, 1, 0, 0, 0));
	//first = Main.MyPocketMonster;
	yield WaitForSeconds(0.1);
	DamgeFunction();
}

function ToDamages (first:Pokemon, second:Pokemon):int
{
	var damages:float;
	var modifier:float = 1.0f;
	var att:int = 0;
	var def:int = 0;
	var rand:float = Random.Range(0.85f, 1.0f);
	
	if (first.firstAttak != null)
	{
	if (first.firstAttak.type.id == first.espece.type1.id || first.firstAttak.type.id == first.espece.type2.id)
		modifier *= 1.5f;
	
	if (first.firstAttak.type.id == second.espece.type1.firstFaiblesse)
		modifier *= 2.0f;
	
	if (first.firstAttak.type.id == second.espece.type1.secondFaiblesse)
		modifier *= 2.0f;
	
	if (first.firstAttak.type.id == second.espece.type1.thirdFaiblesse)
		modifier *= 2.0f;
	
	if (first.firstAttak.type.id == second.espece.type1.fourthFaiblesse)
		modifier *= 2.0f;
	
	if (first.firstAttak.type.id == second.espece.type1.fifthFaiblesse)
		modifier *= 2.0f;
	
///////////////////////////////////////////////////////////////////////////////////////
	
	if (first.firstAttak.type.id == second.espece.type2.firstFaiblesse)
		modifier *= 2.0f;
	
	if (first.firstAttak.type.id == second.espece.type2.secondFaiblesse)
		modifier *= 2.0f;
	
	if (first.firstAttak.type.id == second.espece.type2.thirdFaiblesse)
		modifier *= 2.0f;
	
	if (first.firstAttak.type.id == second.espece.type2.fourthFaiblesse)
		modifier *= 2.0f;
	
	if (first.firstAttak.type.id == second.espece.type2.fifthFaiblesse)
		modifier *= 2.0f;
	
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

	if (first.firstAttak.type.id == second.espece.type1.firstResistance)
		modifier /= 2.0f;
	
	if (first.firstAttak.type.id == second.espece.type1.secondResistance)
		modifier /= 2.0f;
	
	if (first.firstAttak.type.id == second.espece.type1.thirdResistance)
		modifier /= 2.0f;
	
	if (first.firstAttak.type.id == second.espece.type1.fourthResistance)
		modifier /= 2.0f;
	
	if (first.firstAttak.type.id == second.espece.type1.fifthResistance)
		modifier /= 2.0f;
		
//////////////////////////////////////////////////////////////////////////////////////
		
	if (first.firstAttak.type.id == second.espece.type2.firstResistance)
		modifier /= 2.0f;
	
	if (first.firstAttak.type.id == second.espece.type2.secondResistance)
		modifier /= 2.0f;
	
	if (first.firstAttak.type.id == second.espece.type2.thirdResistance)
		modifier /= 2.0f;
	
	if (first.firstAttak.type.id == second.espece.type2.fourthResistance)
		modifier /= 2.0f;
	
	if (first.firstAttak.type.id == second.espece.type2.fifthResistance)
		modifier /= 2.0f;
	}
		
	if (first.firstAttak.pss == 0){ att = first.Att; def = second.Def;}
	if (first.firstAttak.pss == 1){ att = first.AttS; def = second.DefS;}
	
	damages = (((2 * first.level + 10) / 250) * (att / def) * first.firstAttak.puissance + 2) * modifier * rand;
	
	return damages;
}
	
/*function ToDamages (first:Pokemon, second:Pokemon):int
{
	/*var damages:float;
	
	var att:int;
	var def:int;
	
	var modifier:float = 1.0f;
	var rand:float = Random.Range(0.85f, 1.0f);
	
	if (first.firstAttak.type == first.espece.type1 || first.firstAttak.type == first.espece.type2)/* modifier *= 1.5;
	
	if (first.firstAttak.type.id == second.espece.type1.firstFaiblesse) modifier *= 2f;
	if (first.firstAttak.type.id == second.espece.type1.secondFaiblesse) modifier *= 2f;
	if (first.firstAttak.type.id == second.espece.type1.thirdFaiblesse) modifier *= 2f;
	if (first.firstAttak.type.id == second.espece.type1.fourthFaiblesse) modifier *= 2f;
	if (first.firstAttak.type.id == second.espece.type1.fifthFaiblesse) modifier *= 2f;
	
	if (first.firstAttak.type.id == second.espece.type2.firstFaiblesse) modifier *= 2f;
	if (first.firstAttak.type.id == second.espece.type2.secondFaiblesse) modifier *= 2f;
	if (first.firstAttak.type.id == second.espece.type2.thirdFaiblesse) modifier *= 2f;
	if (first.firstAttak.type.id == second.espece.type2.fourthFaiblesse) modifier *= 2f;
	if (first.firstAttak.type.id == second.espece.type2.fifthFaiblesse) modifier *= 2f;
	
	if (first.firstAttak.type.id == second.espece.type1.firstResistance) modifier /= 2f;
	if (first.firstAttak.type.id == second.espece.type1.secondResistance) modifier /= 2f;
	if (first.firstAttak.type.id == second.espece.type1.thirdResistance) modifier /= 2f;
	if (first.firstAttak.type.id == second.espece.type1.fourthResistance) modifier /= 2f;
	if (first.firstAttak.type.id == second.espece.type1.fifthResistancee) modifier /= 2f;
	
	if (first.firstAttak.type.id == second.espece.type2.firstResistance) modifier /= 2f;
	if (first.firstAttak.type.id == second.espece.type2.secondResistance) modifier /= 2f;
	if (first.firstAttak.type.id == second.espece.type2.thirdResistance) modifier /= 2f;
	if (first.firstAttak.type.id == second.espece.type2.fourthResistance) modifier /= 2f;
	if (first.firstAttak.type.id == second.espece.type2.fifthResistance) modifier /= 2f;
	
	modifier *= rand;
	
	if (first.firstAttak.pss == 0){ att = first.Att; def = second.Def;}
	if (first.firstAttak.pss == 1){ att = first.AttS; def = second.DefS;}
	
	damages = (((2 * first.level + 10) / 250) * (att / def) * first.firstAttak.puissance + 2) * modifier;
	
	return damages;
}*/

function test()
{
	espece = Main.Bulbasar;
	pokemon = Pokemon(espece, Random.Range(0, 31), Random.Range(0, 31), Random.Range(0, 31), Random.Range(0, 31), Random.Range(0, 31), Random.Range(0, 31), 0, 0, 0, 0, 0, 0, Random.Range(1, 25), "Bulbasar", Nature(1, 1, 0, 0, 0));
}

function DamgeFunction ()
{
	//first.firstAttak.ToDamages(first, first);
	yield WaitForSeconds(1);
	var testfe:int = ToDamages(first1, second2);
	print("Damage: " + ToDamages(first1, second2));
	RemovePV(10 + ToDamages(first1, second2), 0.000000001);
}

function OnGUI ()
{
	
	firstTexture = Resources.LoadAssetAtPath("Assets/Textures/Espece/battle/Backward/" + first1.espece.nameOfEspece + ".png", Texture2D);
	secondTexture = Resources.LoadAssetAtPath("Assets/Textures/Espece/battle/Forward/" + first1.espece.nameOfEspece + ".png", Texture2D);
	
	GUI.DrawTexture(Rect(Screen.width/PosOfFirstBar.x, Screen.height/PosOfFirstBar.y, bar.width * SizeOfFirstBar, bar.height * SizeOfFirstBar), bar, ScaleMode.ScaleToFit);
	GUI.DrawTexture(Rect(Screen.width/PosOfSecondBar.x, Screen.height/PosOfSecondBar.y, bar.width * SizeOfSecondBar, bar.height * SizeOfSecondBar), bar, ScaleMode.ScaleToFit);
	
	GUI.DrawTexture(Rect(Screen.width/PosOfFirstBar.x + PosOfHealtBar.x, Screen.height/PosOfFirstBar.y + PosOfHealtBar.y, first1.PVU * 122 / first1.PV, SizeOfHealtBar.y), healtBar, ScaleMode.ScaleAndCrop);
	GUI.DrawTexture(Rect(Screen.width/PosOfSecondBar.x + PosOfHealtBar.x, Screen.height/PosOfSecondBar.y + PosOfHealtBar.y, first1.PVU * 122 / first1.PV, SizeOfHealtBar.y), healtBar, ScaleMode.ScaleAndCrop);
	
	GUI.DrawTexture(Rect(Screen.width/PosOfFirstPokemon.x, Screen.height/PosOfFirstPokemon.y, firstTexture.width * SizeOfFirstPokemon, firstTexture.height * SizeOfFirstPokemon), firstTexture, ScaleMode.ScaleToFit);
	GUI.DrawTexture(Rect(Screen.width/PosOfSecondPokemon.x, Screen.height/PosOfSecondPokemon.y, secondTexture.width * SizeOfSecondPokemon, secondTexture.height * SizeOfSecondPokemon), secondTexture, ScaleMode.ScaleToFit);

	GUI.Label(Rect(Screen.width/PosOfFirstBar.x + PosOfLabels.x, Screen.height/PosOfFirstBar.y + PosOfLabels.y, bar.width * SizeOfFirstBar, bar.height * SizeOfFirstBar), pokemon.PVU + "/" + pokemon.PV, style1);
	GUI.Label(Rect(Screen.width/PosOfSecondBar.x + PosOfLabels.x, Screen.height/PosOfSecondBar.y + PosOfLabels.y, bar.width * SizeOfSecondBar, bar.height * SizeOfSecondBar), first1.PVU + "/" + first1.PV, style1);
	
	GUI.Label(Rect(Screen.width/PosOfFirstBar.x + PosOfNameLabels.x, Screen.height/PosOfFirstBar.y + PosOfNameLabels.y, bar.width * SizeOfFirstBar, bar.height * SizeOfFirstBar), pokemon.surname, style2);
	GUI.Label(Rect(Screen.width/PosOfSecondBar.x + PosOfNameLabels.x, Screen.height/PosOfSecondBar.y + PosOfNameLabels.y, bar.width * SizeOfSecondBar, bar.height * SizeOfSecondBar), first1.surname, style2);
	
	GUI.Label(Rect(Screen.width/PosOfFirstBar.x + PosOfLevelLabels.x, Screen.height/PosOfFirstBar.y + PosOfLevelLabels.y, bar.width * SizeOfFirstBar, bar.height * SizeOfFirstBar), "lv " + pokemon.level, style2);
	GUI.Label(Rect(Screen.width/PosOfSecondBar.x + PosOfLevelLabels.x, Screen.height/PosOfSecondBar.y + PosOfLevelLabels.y, bar.width * SizeOfSecondBar, bar.height * SizeOfSecondBar), "lv " + first1.level, style2);
	
}

function RemovePV (test1:int, temp:float)
{
	/*while (first.PVU >= test1 && first.PVU > 0)
	{
		yield WaitForSeconds(temp);
		first.PVU --;
	}*/
	
	var PVR = first1.PVU;
	
	while (first1.PVU > (PVR - test1) && first1.PVU > 0)
	{
		yield WaitForSeconds(temp);
		first1.PVU --;
	}
}

function AddPV (test1:int, temp:float)
{
	while (first1.PVU < test1 && first1.PVU < first1.PV)
	{
		yield WaitForSeconds(temp);
		first1.PVU ++;
	}
}