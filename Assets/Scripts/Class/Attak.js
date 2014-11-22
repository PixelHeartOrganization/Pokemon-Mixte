class Attak
{
	var nameOfAttak:String;
	var type:Type;
	var pss:int;
	var puissance:int;
	var precision:int;
	var pp:int;
	var ppU:int;
	var damages:int;
	
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
}
