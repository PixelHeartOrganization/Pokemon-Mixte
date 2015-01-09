class Attak
{
	var nameOfAttak:String = "";
	var type:Type = Type(0, "");
	var pss:int = 0;
	var puissance:int = 0;
	var precision:int = 0;
	var pp:int = 0;
	var ppU:int = 0;
	var damages:int = 0;
	
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