static var first:Pokemon = null;
static var second:Pokemon = null;
static var third:Pokemon = null;
static var fourth:Pokemon = null;
static var fifth:Pokemon = null;
static var sixth:Pokemon = null;

private var firthB:boolean;
private var secondB:boolean;
private var thirdB:boolean;
private var fourthB:boolean;
private var fifthB:boolean;
private var sixthB:boolean;

private var openGui:boolean;
private var onClick:boolean = false;
var texture:Texture2D;
var pokeball:Texture2D;
var textureHacked:Texture2D;

function Update ()
{
	if (Input.GetKeyDown(KeyCode.Escape))
	{
		if (!openGui) openGui = true;
		else{ openGui = false; onClick = false; firthB = false; secondB = false; thirdB = false; fourthB = false; fifthB = false; sixthB = false;}
	}
}

function OnGUI ()
{
	if (openGui)
	{
		GUI.DrawTexture(Rect(Screen.width/2 - 220, Screen.height/2 - 97, pokeball.width, pokeball.height), pokeball);
		GUI.Box(Rect(-5,-5,Screen.width + 10,Screen.height + 10),"Menu");
		if (GUI.Button(Rect(Screen.width/2 - 200, Screen.height/2 - 100, 100, 25), "Pokémon"))
		{
			if (!onClick) onClick = true;
			else {onClick = false; firthB = false; secondB = false; thirdB = false; fourthB = false; fifthB = false; sixthB = false;}
		}
		
		if (GUI.Button(Rect(Screen.width/2 - 200, Screen.height/2 - 75, 100, 25), "Pokédex"));
		if (GUI.Button(Rect(Screen.width/2 - 200, Screen.height/2 - 50, 100, 25), "Sac"));
		if (GUI.Button(Rect(Screen.width/2 - 200, Screen.height/2 - 25, 100, 25), "Sauvegarder"));
		
		if (onClick)
		{
			if (first != null){
			GUI.DrawTexture(Rect(Screen.width/2 - 50, Screen.height/2 - 100, Resources.LoadAssetAtPath(first.espece.texturePath, Texture2D).width, Resources.LoadAssetAtPath(first.espece.texturePath, Texture2D).height), Resources.LoadAssetAtPath(first.espece.texturePath, Texture2D));
			if (GUI.Button(Rect(Screen.width/2 - 50, Screen.height/2 - 100, Resources.LoadAssetAtPath(first.espece.texturePath, Texture2D).width, Resources.LoadAssetAtPath(first.espece.texturePath, Texture2D).height), "")){ firthB = true; secondB = false; thirdB = false; fourthB = false; fifthB = false; sixthB = false;}
				if (first.isHacked) GUI.DrawTexture(Rect(Screen.width/2 - 50, Screen.height/2 - 100, Resources.LoadAssetAtPath(first.espece.texturePath, Texture2D).width, Resources.LoadAssetAtPath(first.espece.texturePath, Texture2D).height), textureHacked);
			}
			
			if (second != null){
			GUI.DrawTexture(Rect(Screen.width/2 - 20, Screen.height/2 - 100, Resources.LoadAssetAtPath(second.espece.texturePath, Texture2D).width, Resources.LoadAssetAtPath(second.espece.texturePath, Texture2D).height), Resources.LoadAssetAtPath(second.espece.texturePath, Texture2D));
			if (GUI.Button(Rect(Screen.width/2 - 20, Screen.height/2 - 100, Resources.LoadAssetAtPath(second.espece.texturePath, Texture2D).width, Resources.LoadAssetAtPath(second.espece.texturePath, Texture2D).height), "")){ firthB = false; secondB = true; thirdB = false; fourthB = false; fifthB = false; sixthB = false;};
				if (second.isHacked) GUI.DrawTexture(Rect(Screen.width/2 - 20, Screen.height/2 - 100, Resources.LoadAssetAtPath(second.espece.texturePath, Texture2D).width, Resources.LoadAssetAtPath(second.espece.texturePath, Texture2D).height), textureHacked);
			}
			
			if (third != null){
			GUI.DrawTexture(Rect(Screen.width/2 + 10, Screen.height/2 - 100, Resources.LoadAssetAtPath(third.espece.texturePath, Texture2D).width, Resources.LoadAssetAtPath(third.espece.texturePath, Texture2D).height), Resources.LoadAssetAtPath(third.espece.texturePath, Texture2D));
			if (GUI.Button(Rect(Screen.width/2 + 10, Screen.height/2 - 100, Resources.LoadAssetAtPath(third.espece.texturePath, Texture2D).width, Resources.LoadAssetAtPath(third.espece.texturePath, Texture2D).height), "")){ firthB = false; secondB = false; thirdB = true; fourthB = false; fifthB = false; sixthB = false;};
				if (third.isHacked) GUI.DrawTexture(Rect(Screen.width/2 + 10, Screen.height/2 - 100, Resources.LoadAssetAtPath(third.espece.texturePath, Texture2D).width, Resources.LoadAssetAtPath(third.espece.texturePath, Texture2D).height), textureHacked);
			}
			
			if (fourth != null){
			GUI.DrawTexture(Rect(Screen.width/2 + 40, Screen.height/2 - 100, Resources.LoadAssetAtPath(fourth.espece.texturePath, Texture2D).width, Resources.LoadAssetAtPath(fourth.espece.texturePath, Texture2D).height), Resources.LoadAssetAtPath(fourth.espece.texturePath, Texture2D));
			if (GUI.Button(Rect(Screen.width/2 + 40, Screen.height/2 - 100, Resources.LoadAssetAtPath(fourth.espece.texturePath, Texture2D).width, Resources.LoadAssetAtPath(fourth.espece.texturePath, Texture2D).height), "")){ firthB = false; secondB = false; thirdB = false; fourthB = true; fifthB = false; sixthB = false;};
				if (fourth.isHacked) GUI.DrawTexture(Rect(Screen.width/2 + 40, Screen.height/2 - 100, Resources.LoadAssetAtPath(fourth.espece.texturePath, Texture2D).width, Resources.LoadAssetAtPath(fourth.espece.texturePath, Texture2D).height), textureHacked);
			}
			
			if (fifth != null){
			GUI.DrawTexture(Rect(Screen.width/2 + 70, Screen.height/2 - 100, Resources.LoadAssetAtPath(fifth.espece.texturePath, Texture2D).width, Resources.LoadAssetAtPath(fifth.espece.texturePath, Texture2D).height), Resources.LoadAssetAtPath(fifth.espece.texturePath, Texture2D));
			if (GUI.Button(Rect(Screen.width/2 + 70, Screen.height/2 - 100, Resources.LoadAssetAtPath(fifth.espece.texturePath, Texture2D).width, Resources.LoadAssetAtPath(fifth.espece.texturePath, Texture2D).height), "")){ firthB = false; secondB = false; thirdB = false; fourthB = false; fifthB = true; sixthB = false;};
				if (fifth.isHacked) GUI.DrawTexture(Rect(Screen.width/2 + 70, Screen.height/2 - 100, Resources.LoadAssetAtPath(fifth.espece.texturePath, Texture2D).width, Resources.LoadAssetAtPath(fifth.espece.texturePath, Texture2D).height), textureHacked);
			}
			
			if (sixth != null){
			GUI.DrawTexture(Rect(Screen.width/2 + 100, Screen.height/2 - 100, Resources.LoadAssetAtPath(sixth.espece.texturePath, Texture2D).width, Resources.LoadAssetAtPath(sixth.espece.texturePath, Texture2D).height), Resources.LoadAssetAtPath(sixth.espece.texturePath, Texture2D));
			if (GUI.Button(Rect(Screen.width/2 + 100, Screen.height/2 - 100, Resources.LoadAssetAtPath(sixth.espece.texturePath, Texture2D).width, Resources.LoadAssetAtPath(sixth.espece.texturePath, Texture2D).height), "")){ firthB = false; secondB = false; thirdB = false; fourthB = false; fifthB = false; sixthB = true;};
				if (sixth.isHacked) GUI.DrawTexture(Rect(Screen.width/2 + 100, Screen.height/2 - 100, Resources.LoadAssetAtPath(sixth.espece.texturePath, Texture2D).width, Resources.LoadAssetAtPath(sixth.espece.texturePath, Texture2D).height), textureHacked);
			}
			
			if (firthB){ GUI.Label(Rect(Screen.width/2 + 350, Screen.height/2 - 200, 500, 500), first.surname + "\nPV:\nAtt:\nDef:\nAtt. Spe:\nDef. Spe:\nVit:"); GUI.Label(Rect(Screen.width/2 + 450, Screen.height/2 - 200, 500, 500), "lv. " + first.level + "\n" + first.PVU + "/" + first.PV + "\n" + first.Att + "\n" + first.Def + "\n" + first.AttS + "\n" + first.DefS + "\n" + first.Speed);}
			if (secondB){ GUI.Label(Rect(Screen.width/2 + 350, Screen.height/2 - 200, 500, 500), second.surname + "\nPV:\nAtt:\nDef:\nAtt. Spe:\nDef. Spe:\nVit:"); GUI.Label(Rect(Screen.width/2 + 450, Screen.height/2 - 200, 500, 500), "lv. " + second.level + "\n" + second.PVU + "/" + second.PV + "\n" + second.Att + "\n" + second.Def + "\n" + second.AttS + "\n" + second.DefS + "\n" + second.Speed);}
			if (thirdB){ GUI.Label(Rect(Screen.width/2 + 350, Screen.height/2 - 200, 500, 500), third.surname + "\nPV:\nAtt:\nDef:\nAtt. Spe:\nDef. Spe:\nVit:"); GUI.Label(Rect(Screen.width/2 + 450, Screen.height/2 - 200, 500, 500), "lv. " + third.level + "\n" + third.PVU + "/" + third.PV + "\n" + third.Att + "\n" + third.Def + "\n" + third.AttS + "\n" + third.DefS + "\n" + third.Speed);}
			if (fourthB){ GUI.Label(Rect(Screen.width/2 + 350, Screen.height/2 - 200, 500, 500), fourth.surname + "\nPV:\nAtt:\nDef:\nAtt. Spe:\nDef. Spe:\nVit:"); GUI.Label(Rect(Screen.width/2 + 450, Screen.height/2 - 200, 500, 500), "lv. " + fourth.level + "\n" + fourth.PVU + "/" + fourth.PV + "\n" + fourth.Att + "\n" + fourth.Def + "\n" + fourth.AttS + "\n" + fourth.DefS + "\n" + fourth.Speed);}
			if (fifthB){ GUI.Label(Rect(Screen.width/2 + 350, Screen.height/2 - 200, 500, 500), fifth.surname + "\nPV:\nAtt:\nDef:\nAtt. Spe:\nDef. Spe:\nVit:"); GUI.Label(Rect(Screen.width/2 + 450, Screen.height/2 - 200, 500, 500), "lv. " + fifth.level + "\n" + fifth.PVU + "/" + fifth.PV + "\n" + fifth.Att + "\n" + fifth.Def + "\n" + fifth.AttS + "\n" + fifth.DefS + "\n" + fifth.Speed);}
			if (sixthB){ GUI.Label(Rect(Screen.width/2 + 350, Screen.height/2 - 200, 500, 500), sixth.surname + "\nPV:\nAtt:\nDef:\nAtt. Spe:\nDef. Spe:\nVit:"); GUI.Label(Rect(Screen.width/2 + 450, Screen.height/2 - 200, 500, 500), "lv. " + sixth.level + "\n" + sixth.PVU + "/" + sixth.PV + "\n" + sixth.Att + "\n" + sixth.Def + "\n" + sixth.AttS + "\n" + sixth.DefS + "\n" + sixth.Speed);}
		}
	}
}

static function ReplacePokemonInInventory (pokemon:Pokemon, number:int)
{
	if (number == 0) first = pokemon;
	if (number == 1) second = pokemon;
	if (number == 2) third = pokemon;
	if (number == 3) fourth = pokemon;
	if (number == 4) fifth = pokemon;
	if (number == 5) sixth = pokemon;
}