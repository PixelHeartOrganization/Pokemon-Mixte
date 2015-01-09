class Type
{
	var id:int = -100;
	var nameOfType:String = "";
	
	//Faiblesses
	var firstFaiblesse:int = -100;
	var secondFaiblesse:int = -100;
	var thirdFaiblesse:int = -100;
	var fourthFaiblesse:int = -100;
	var fifthFaiblesse:int = -100;
	
	//Resistance
	var firstResistance:int = -100;
	var secondResistance:int = -100;
	var thirdResistance:int = -100;
	var fourthResistance:int = -100;
	var fifthResistance:int = -100;
	
	public function Type (id:int, nameOfType:String)
	{
		this.id = id;
		this.nameOfType = nameOfType;
	}
	
	public function AddWeakness (faiblesse:int, place:int)
	{
		if (place == 0) firstFaiblesse = faiblesse;
		if (place == 1) secondFaiblesse = faiblesse;
		if (place == 2) thirdFaiblesse = faiblesse;
		if (place == 3) fourthFaiblesse = faiblesse;
		if (place == 4) fifthFaiblesse = faiblesse;
	}
	
	public function RemoveWeakness (place:int)
	{
		if (place == 0) firstFaiblesse = -1;
		if (place == 1) secondFaiblesse = -1;
		if (place == 2) thirdFaiblesse = -1;
		if (place == 3) fourthFaiblesse = -1;
		if (place == 4) fifthFaiblesse = -1;
	}
	
	public function AddResistance (resistance:int, place:int)
	{
		if (place == 0) firstResistance = resistance;
		if (place == 1) secondResistance = resistance;
		if (place == 2) thirdResistance = resistance;
		if (place == 3) fourthResistance = resistance;
		if (place == 4) fifthResistance = resistance;
	}
	
	public function RemoveResistance (place:int)
	{
		if (place == 0) firstResistance = -1;
		if (place == 1) secondResistance = -1;
		if (place == 2) thirdResistance = -1;
		if (place == 3) fourthResistance = -1;
		if (place == 4) fifthResistance = -1;
	}
	
}