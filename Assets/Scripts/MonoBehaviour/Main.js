static var boolTest:boolean;

public static var Bulbasar:Espece;
var Ivysaur:Espece;
var Venusar:Espece;
public static var Charmander:Espece;
var Charmeleon:Espece;
var Charizard:Espece;
public static var Erunix:Espece;

var texture:Texture2D;

static var MyPocketMonster:Pokemon;
static var MyPocketMonster2:Pokemon;

var Null:Type;
var Grass:Type;
var Fire:Type;
var Water:Type;
var Normal:Type;
var Electric:Type;
var Dragon:Type;
var Fairy:Type;
var Flying:Type;
var Rock:Type;
var Dark:Type;
var Ghost:Type;
var Ground:Type;
var Unknow:Type;
var Steel:Type;
var Bug:Type;
var Fighting:Type;
var Poison:Type;
var Ice:Type;
var Psychic:Type;
var Plasma:Type;

var Bold:Nature;
var Quirky:Nature;
var Brave:Nature;
var Calm:Nature;
var Quiet:Nature;
var Docile:Nature;
var Mild:Nature;
var Rash:Nature;
var Gentle:Nature;
var Hardy:Nature;
var Jolly:Nature;
var Lax:Nature;

var Fissure:Attak;

function Start ()
{
	boolTest = true;
	InitType();
	InitAttak();
	InitNature();
	InitEspece();
	InitPokemon();
	
	PRINT();
}

function PRINT ()
{
	if (MyPocketMonster.isHacked)
	print("One of your Pokemon is hacked, if you would like dehacked your Pokemon for the tournament, remove EVs or IVs. Thank you.");
	
	else
	print("Surname:" + MyPocketMonster.surname + " PV:" + MyPocketMonster.PV + " Att:" + MyPocketMonster.Att + " Def:" +  MyPocketMonster.Def + " AttS:" + MyPocketMonster.AttS + " DefS:" + MyPocketMonster.DefS + " Speed:" + MyPocketMonster.Speed);
	
	//print("Damage: " + MyPocketMonster.firstAttak.ToDamages(MyPocketMonster, MyPocketMonster2, MyPocketMonster.firstAttak));
}

function Update ()
{
	if (Input.GetKeyDown(KeyCode.K))print("Surname:" + MyPocketMonster.surname + " PV:" + MyPocketMonster.PV + " Att:" + MyPocketMonster.Att + " Def:" +  MyPocketMonster.Def + " AttS:" + MyPocketMonster.AttS + " DefS:" + MyPocketMonster.DefS + " Speed:" + MyPocketMonster.Speed);
}

function InitEspece ()
{
	Bulbasar = Espece(Grass, Poison, 45, 45, 65, 49, 65, 45, "Bulbasar");
	Ivysaur = Espece(Grass, Poison, 60, 62, 80, 63, 80, 60, "Ivysaur");
	Venusar = Espece(Grass, Poison, 80, 82, 100, 83, 100, 80, "Venusar");
	Charmander = Espece(Fire, Null, 39, 52, 60, 43, 50, 65, "Charmander");
	Charmeleon = Espece(Fire, Null, 58, 64, 80, 58, 65, 80, "Charmeleon");
	Charizard = Espece(Fire, Flying, 78, 84, 109, 78, 85, 100, "Charizard");
	Erunix = Espece(Fire, Flying, 35, 67, 49, 52, 35, 37, "Erunix");
}

function InitPokemon ()
{
	MyPocketMonster = Pokemon(Erunix, 0, 252, 0, 4, 0, 252, 31, 31, 31, 31, 31, 31, 50, "Lucas", Jolly);
	MyPocketMonster.AddAttak(Fissure, 50000);
	
	MyPocketMonster2 = Pokemon(Erunix, 0, 252, 0, 4, 0, 252, 31, 31, 31, 31, 31, 31, 50, "Lucas", Jolly);
	MyPocketMonster2.AddAttak(Fissure, 50000);
	
	Fight.first1 = MyPocketMonster;
	Fight.second2 = MyPocketMonster2;
	
	MyPocketMonster.PVU = MyPocketMonster.PV/2;
	
	Inventory.AddPokemonInInventory(MyPocketMonster, 0);
}

function InitType ()
{
	Null = Type(-1, null);
	Grass = Type(0, "Grass");
	Fire = Type(1, "Fire");
	Water = Type(2, "Water");
	Normal = Type(3, "Normal");
	Electric = Type(4, "Electric");
	Dragon = Type(5, "Dragon");
	Fairy = Type(6, "Fairy");
	Flying = Type(7, "Flying");
	Rock = Type(8, "Rock");
	Dark = Type(9, "Dark");
	Ghost = Type(10, "Ghost");
	Ground = Type(11, "Ground");
	Unknow = Type(12, "Unknow");
	Steel = Type(13, "Steel");
	Bug = Type(14, "Bug");
	Fighting = Type(15, "Fighting");
	Poison = Type(16, "Poison");
	Ice = Type(17, "Ice");
	Psychic = Type(18, "Psychic");
	Plasma = Type(19, "Plasma");
}

function InitNature ()
{
	Bold = Nature(-1, 1, 0, 0, 0);
	Quirky = Nature(0, 0, 0, 0, 0);
	Brave = Nature(1, 0, 0, 0, -1);
	Calm = Nature(-1, 0, 0, 1, 0);
	Quiet = Nature(0, 1, 0, 0, -1);
	Docile = Nature(0, 0, 0, 0, 0);
	Mild = Nature(0, 1, -1, 1, 0);
	Rash = Nature(0, 1, 0, -1, 0);
	Gentle = Nature(0, -1, 0, 1, 0);
	Hardy = Nature(0, 0, 0, 0, 0);
	Jolly = Nature(0, -1, 0, 0, 1);
	Lax = Nature(0, 0, 1, -1, 0);
}

function InitAttak ()
{
	Fissure = Attak("Fissure", Ground, 0, 55555, 30, 5);
}

function OnGUI ()
{
	if (boolTest)
	{
	texture = Resources.LoadAssetAtPath("Assets/Textures/Espece/min/" + MyPocketMonster.espece.nameOfEspece + ".png", Texture2D);
	//texture = Resources.LoadAssetAtPath("Assets/Textures/Espece/battle/Forward/" + MyPocketMonster.espece.nameOfEspece + ".png", Texture2D);
	GUI.DrawTexture(Rect(10, 10, texture.width * 2, texture.height * 2),  texture);
	GUI.Label(Rect(75, 50, 1000, 1000), MyPocketMonster.PVU + "/" + MyPocketMonster.PV);
	}
}