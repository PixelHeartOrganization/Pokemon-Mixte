//Especes Of Pokemon
static var Bulbasar:Espece = Espece(Grass, Poison, 45, 45, 65, 49, 65, 45, "Bulbasar");
static var Ivysaur:Espece = Espece(Grass, Poison, 60, 62, 80, 63, 80, 60, "Ivysaur");
static var Venusar:Espece = Espece(Grass, Poison, 80, 82, 100, 83, 100, 80, "Venusar");
static var Charmander:Espece = Espece(Fire, Null, 39, 52, 60, 43, 50, 65, "Charmander");
static var Charmeleon:Espece = Espece(Fire, Null, 58, 64, 80, 58, 65, 80, "Charmeleon");
static var Charizard:Espece = Espece(Fire, Flying, 78, 84, 109, 78, 85, 100, "Charizard");
static var Squirtle:Espece = Espece(Water, Null, 44, 48, 50, 65, 64, 43, "Squirtle");
static var Wartortle:Espece = Espece(Water, Null, 59, 63, 65, 80, 80, 58, "Wartotle");
static var Blastoise:Espece = Espece(Water, Null, 79, 83, 85, 100, 105, 78, "Blastoise");
static var Erunix:Espece = Espece(Fire, Flying, 35, 67, 49, 52, 35, 37, "Erunix");
static var Elenix:Espece = Espece(Fire, Flying, 54, 80, 61, 58, 50, 60, "Elenix");
static var Emotix:Espece = Espece(Fire, Flying, 74, 100, 94, 68, 60, 101, "Emotix");

//Types
static var Null:Type = Type(-1, "");
static var Grass:Type = Type(0, "Grass");
static var Fire:Type = Type(1, "Fire");
static var Water:Type = Type(2, "Water");
static var Normal:Type = Type(3, "Normal");
static var Electric:Type = Type(4, "Electric");
static var Dragon:Type = Type(5, "Dragon");
static var Fairy:Type = Type(6, "Fairy");
static var Flying:Type = Type(7, "Flying");
static var Rock:Type = Type(8, "Rock");
static var Dark:Type = Type(9, "Dark");
static var Ghost:Type = Type(10, "Ghost");
static var Ground:Type = Type(11, "Ground");
static var Unknow:Type = Type(12, "Unknow");
static var Steel:Type = Type(13, "Steel");
static var Bug:Type = Type(14, "Bug");
static var Fighting:Type = Type(15, "Fighting");
static var Poison:Type = Type(16, "Poison");
static var Ice:Type = Type(17, "Ice");
static var Psychic:Type = Type(18, "Psychic");
static var Plasma:Type = Type(19, "Plasma");

//Natures
static var Bold:Nature = Nature(-1, 1, 0, 0, 0);
static var Quirky:Nature = Nature(0, 0, 0, 0, 0);
static var Brave:Nature = Nature(1, 0, 0, 0, -1);
static var Calm:Nature = Nature(-1, 0, 0, 1, 0);
static var Quiet:Nature = Nature(0, 1, 0, 0, -1);
static var Docile:Nature = Nature(0, 0, 0, 0, 0);
static var Mild:Nature = Nature(0, 1, -1, 1, 0);
static var Rash:Nature = Nature(0, 1, 0, -1, 0);
static var Gentle:Nature = Nature(0, -1, 0, 1, 0);
static var Hardy:Nature = Nature(0, 0, 0, 0, 0);
static var Jolly:Nature = Nature(0, -1, 0, 0, 1);
static var Lax:Nature = Nature(0, -1, 1, 0, 0);
static var Impish:Nature = Nature(0, 0, 1, -1, 0);
static var Sassy:Nature = Nature(0, 0, 0, 1, -1);
static var Naughty:Nature = Nature(1, 0, 0, -1, 0);
static var Modest:Nature = Nature(-1, 1, 0, 0, 0);
static var Naive:Nature = Nature(0, 0, 0, -1, 1);
static var Hasty:Nature = Nature(0, 0, -1, 0, 1);
static var Careful:Nature = Nature(0, -1, 0, 1, 0);
static var Bashful:Nature = Nature(0, 0, 0, 0, 0);
static var Relaxed:Nature = Nature(0, 0, 1, 0, -1);
static var Adamant:Nature = Nature(1, -1, 0, 0, 0);
static var Serious:Nature = Nature(0, 0, 0, 0, 0);
static var Lonely:Nature = Nature(1, 0, -1, 0, 0);
static var Timid:Nature = Nature(-1, 0, 0, 0, 1);

//Attaks
static var Fissure:Attak = Attak("Fissure", Ground, 0, 55555, 30, 5);

function Start()
{
	Utility.Dialog("Prof. Onorimi", Color.red, "Bienvenue dans Pokemon Mixte ! Tu peux commencer a jouer :DD");
	
	Inventory.ReplacePokemonInInventory(Pokemon(Venusar, 0, 252, 0, 5, 0, 252, 31, 31, 31, 31, 31, 31, 101, "Floflo", Jolly), 0);
	Inventory.ReplacePokemonInInventory(Pokemon(Charizard, 0, 252, 0, 0, 6, 252, 31, 31, 0, 31, 31, 31, 100, "Lucas", Jolly), 1);
	Inventory.ReplacePokemonInInventory(Pokemon(Blastoise, 0, 252, 0, 6, 0, 252, 31, 31, 31, 31, 31, 31, 100, "Test", Jolly), 2);
	Inventory.ReplacePokemonInInventory(Pokemon(Erunix, 0, 252, 0, 6, 0, 252, 31, 31, 31, 31, 31, 31, 100, "Test", Jolly), 3);
	Inventory.ReplacePokemonInInventory(Pokemon(Bulbasar, 0, 252, 0, 6, 0, 252, 31, 31, 31, 31, 31, 31, 100, "Test", Jolly), 4);
	Inventory.ReplacePokemonInInventory(Pokemon(Emotix, 6, 252, 0, 0, 0, 252, 31, 31, 31, 31, 31, 31, 1000000, "Test", Jolly), 5);
	
	Inventory.first.PVU = Inventory.first.PV/2;
	
	//Weakness
	//Grass
	Grass.AddWeakness(1, 0);
	Grass.AddWeakness(7, 1);
	Grass.AddWeakness(14, 2);
	Grass.AddWeakness(16, 3);
	Grass.AddWeakness(17, 4);
	//Fire
	Fire.AddWeakness(2, 0);
	Fire.AddWeakness(8, 1);
	Fire.AddWeakness(11, 2);
	//Water
	Water.AddWeakness(0, 0);
	Water.AddWeakness(4, 1);
	//Normal
	Normal.AddWeakness(15, 0);
	//Electric
	Electric.AddWeakness(11, 0);
	//Dragon
	Dragon.AddWeakness(5, 0);
	Dragon.AddWeakness(6, 1);
	Dragon.AddWeakness(17, 2);
	//Fairy
	Fairy.AddWeakness(13, 0);
	Fairy.AddWeakness(16, 1);
	//Flying
	Flying.AddWeakness(4, 0);
	Flying.AddWeakness(8, 1);
	Flying.AddWeakness(17, 2);
	//Rock
	Rock.AddWeakness(0, 0);
	Rock.AddWeakness(2, 1);
	Rock.AddWeakness(11, 2);
	Rock.AddWeakness(13, 3);
	Rock.AddWeakness(15, 4);
	//Dark
	Dark.AddWeakness(6, 0);
	Dark.AddWeakness(14, 1);
	Dark.AddWeakness(15, 2);
	//Ghost
	Ghost.AddWeakness(9, 0);
	Ghost.AddWeakness(10, 1);
	//Ground
	Ground.AddWeakness(2, 0);
	Ground.AddWeakness(17, 1);
	//Steel
	Steel.AddWeakness(1, 0);
	Steel.AddWeakness(11, 1);
	Steel.AddWeakness(15, 2);
	//Bug
	Bug.AddWeakness(1, 0);
	Bug.AddWeakness(7, 1);
	Bug.AddWeakness(8, 2);
	//Fighting
	Fighting.AddWeakness(6, 0);
	Fighting.AddWeakness(7, 1);
	Fighting.AddWeakness(18, 2);
	//Poison
	Poison.AddWeakness(11, 0);
	Poison.AddWeakness(18, 1);
	//Ice
	Ice.AddWeakness(1, 0);
	Ice.AddWeakness(8, 1);
	Ice.AddWeakness(13, 2);
	Ice.AddWeakness(15, 3);
	//Psychic
	Psychic.AddWeakness(9, 0);
	Psychic.AddWeakness(10, 1);
	Psychic.AddWeakness(14, 2);
	//Plasma
	Plasma.AddWeakness(11, 0);
	
	//Resistances
	//Grass
	Grass.AddResistance(0, 0);
	Grass.AddResistance(2, 1);
	Grass.AddResistance(4, 2);
	Grass.AddResistance(11, 3);
	//Fire
	Fire.AddResistance(0, 0);
	Fire.AddResistance(1, 1);
	Fire.AddResistance(6, 2);
	Fire.AddResistance(13, 3);
	Fire.AddResistance(14, 4);
	Fire.AddResistance(17, 5);
	//Water
	Water.AddResistance(1, 0);
	Water.AddResistance(2, 1);
	Water.AddResistance(13, 2);
	Water.AddResistance(17, 3);
	//Normal
	//Electric
	Electric.AddResistance(4, 0);
	Electric.AddResistance(7, 1);
	Electric.AddResistance(13, 2);
	
	Rock.AddResistance(19, 0);
}