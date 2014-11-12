class Type
{
	var id:int;
	var nameOfType:String;
	
	public function Type (id:int, nameOfType:String)
	{
		this.id = id;
		this.nameOfType = nameOfType;
	}
	
	public function AddFaiblesse (faiblesse:int, place:int)
	{
		if (place == 0) firstFaiblesse = faiblesse;
		if (place == 1) secondFaiblesse = faiblesse;
		if (place == 2) thirdFaiblesse = faiblesse;
		if (place == 3) fourthFaiblesse = faiblesse;
		if (place == 4) fifthFaiblesse = faiblesse;
	}
	
	public function RemoveFaiblesse (place:int)
	{
		if (place == 0) firstFaiblesse = null;
		if (place == 1) secondFaiblesse = null;
		if (place == 2) thirdFaiblesse = null;
		if (place == 3) fourthFaiblesse = null;
		if (place == 4) fifthFaiblesse = null;
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
		if (place == 0) firstResistance = null;
		if (place == 1) secondResistance = null;
		if (place == 2) thirdResistance = null;
		if (place == 3) fourthResistance = null;
		if (place == 4) fifthResistance = null;
	}
}