class Espece
{
	var type1:Type = Type(-100, "");
	var type2:Type = Type(-100, "");
	var nameOfEspece:String = "Missing";
	
	var texturePath:String = "Assets/Textures/Espece/min/Missing.png";
	var objectPath:String = "Assets/Models/Espece/Missing.png";
	
	var BPV:int;
	var BAtt:int;
	var BAttS:int;
	var BDef:int;
	var BDefS:int;
	var BSpeed:int;
	
	public function Espece (type1:Type, type2:Type, BPV:int, BAtt:int, BAttS:int, BDef:int, BDefS:int, BSpeed:int, nameOfEspece:String)
	{
		this.type1 = type1;
		this.type2 = type2;
		this.BPV = BPV;
		this.BAtt = BAtt;
		this.BAttS = BAttS;
		this.BDef = BDef;
		this.BDefS = BDefS;
		this.BSpeed = BSpeed;
		this.nameOfEspece = nameOfEspece;
		this.texturePath = "Assets/Textures/Espece/min/" + nameOfEspece + ".png";
		this.objectPath = "Assets/Models/Espece/" + nameOfEspece + ".png";
	}
	
	public function ToString():String
	{
		return ("(" + nameOfEspece + type1.nameOfType + type2.nameOfType + "[" + BPV + BAtt + BAttS + BDef + BDefS + BSpeed + "]" + ")");
	}
}