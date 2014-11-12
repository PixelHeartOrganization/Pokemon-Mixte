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
		
		if (move.type.id == second.espece.type1.firstFaiblesse) modifier *= 2;
		if (move.type.id == second.espece.type1.secondFaiblesse) modifier *= 2;
		if (move.type.id == second.espece.type1.thirdFaiblesse) modifier *= 2;
		if (move.type.id == second.espece.type1.fourthFaiblesse) modifier *= 2;
		if (move.type.id == second.espece.type1.fifthFaiblesse) modifier *= 2;
		
		if (move.type.id == second.espece.type2.firstFaiblesse) modifier *= 2;
		if (move.type.id == second.espece.type2.secondFaiblesse) modifier *= 2;
		if (move.type.id == second.espece.type2.thirdFaiblesse) modifier *= 2;
		if (move.type.id == second.espece.type2.fourthFaiblesse) modifier *= 2;
		if (move.type.id == second.espece.type2.fifthFaiblesse) modifier *= 2;
		
		if (move.type.id == second.espece.type1.firstResistance) modifier /= 2;
		if (move.type.id == second.espece.type1.secondResistance) modifier /= 2;
		if (move.type.id == second.espece.type1.thirdResistance) modifier /= 2;
		if (move.type.id == second.espece.type1.fourthResistance) modifier /= 2;
		if (move.type.id == second.espece.type1.fifthResistancee) modifier /= 2;
		
		if (move.type.id == second.espece.type2.firstResistance) modifier /= 2;
		if (move.type.id == second.espece.type2.secondResistance) modifier /= 2;
		if (move.type.id == second.espece.type2.thirdResistance) modifier /= 2;
		if (move.type.id == second.espece.type2.fourthResistance) modifier /= 2;
		if (move.type.id == second.espece.type2.fifthResistance) modifier /= 2;
		
		modifier *= rand;
		
		if (move.pss == 0){ att = first.Att; def = second.Def;}
		if (move.pss == 1){ att = first.AttS; def = second.DefS;}
		
		damages = (((2 * first.level + 10) / 250) * (att / def) * move.puissance + 2) * modifier;
		
		return damages;
	}
}
