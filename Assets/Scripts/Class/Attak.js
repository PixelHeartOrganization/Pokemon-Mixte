class Attak
{
	var nameOfAttak:String;
	var type:Type;
	var pss:int;
	var puissance:int;
	var precision:int;
	var pp:int;
	var ppU:int;
	
	public function Attak (nameOfAttak:String, type:Type, pss:int, puissance:int, precision:int, pp:int)
	{
		this.nameOfAttak = nameOfAttak;
		this.type = type;
		this.pss = pss;
		this.puissance = puissance;
		this.precision = precision;
		this.pp = pp;
		this.ppU = pp;
	}
	
	public function ToDamages (first:Pokemon, second:Pokemon, move:Attak):int
	{
		var damages:float;
		
		var att:int;
		var def:int;
		
		var modifier:float = 1;
		var rand:float = Random.Range(0.85, 1);
		
		if (move.type == first.espece.type1 || move.type == first.espece.type2) modifier *= 1.5;
		
		modifier *= rand;
		
		if (move.pss == 0){ att = first.Att; def = second.Def;}
		if (move.pss == 1){ att = first.AttS; def = second.DefS;}
		
		damages = (((2 * first.level + 10) / 250) * (att / def) * move.puissance + 2) * modifier;
		
		return damages;
	}
}