class Type
{
	var id:int;
	var nameOfType:String;
	
	//Faiblesses
	var firstFaiblesse:int;
	var secondFaiblesse:int;
	var thirdFaiblesse:int;
	var fourthFaiblesse:int;
	var fifthFaiblesse:int;
	
	//Resistance
	var firstResistance:int;
	var secondResistance:int;
	var thirdResistance:int;
	var fourthResistance:int;
	var fifthResistance:int;
	
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
<<<<<<< HEAD
	
}
=======
}
>>>>>>> origin/master
