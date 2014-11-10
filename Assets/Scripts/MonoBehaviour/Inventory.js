var first:Pokemon;
var second:Pokemon;
var third:Pokemon;
var fourth:Pokemon;
var fifth:Pokemon;
var sixth:Pokemon;

var number:int;

var item:Item;

function AddPokemonInInvetory (pokemon:Pokemon)
{
	if (number == 0) first = pokemon;
	if (number == 1) second = pokemon;
	if (number == 2) third = pokemon;
	if (number == 3) fourth = pokemon;
	if (number == 4) fifth = pokemon;
	if (number == 5) sixth = pokemon;
	if (number > 5) print("This Pokémon is transfered to the PC");
}