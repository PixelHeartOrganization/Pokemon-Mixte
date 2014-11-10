var espece:int;

function OnMouseEnter ()
{
	if (Input.GetMouseButtonDown(0)) {
	
		if (espece == 0)
		{
			Main.MyPocketMonster = Pokemon(Main.Bulbasar, 0, 0, 0, 0, 0, 0, Random.Range(0, 31), Random.Range(0, 31),Random.Range(0, 31),Random.Range(0, 31),Random.Range(0, 31),Random.Range(0, 31), 5, "", Nature(1, 1, 0, 0, 0));
			Application.LoadLevel(0);
		}
		
		if (espece == 1)
		{
			Main.MyPocketMonster = Pokemon(Main.Charmander, 0, 0, 0, 0, 0, 0, Random.Range(0, 31), Random.Range(0, 31),Random.Range(0, 31),Random.Range(0, 31),Random.Range(0, 31),Random.Range(0, 31), 5, "", Nature(1, 1, 0, 0, 0));
			Application.LoadLevel(0);
		}
		
		if (espece == 2)
		{
			Main.MyPocketMonster = Pokemon(Main.Erunix, 0, 0, 0, 0, 0, 0, Random.Range(0, 31), Random.Range(0, 31),Random.Range(0, 31),Random.Range(0, 31),Random.Range(0, 31),Random.Range(0, 31), 5, "", Nature(1, 1, 0, 0, 0));
		}
	}
}