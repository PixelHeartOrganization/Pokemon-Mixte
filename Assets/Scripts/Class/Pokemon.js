class Pokemon
{
	var isHacked:boolean = true;
	
	var surname:String = "";
	var level:int = 0;
	var exp:int = 0;
	var nature:Nature = Nature(0, 0, 0, 0, 0);
	var espece:Espece = Espece(Type(-100, ""), Type(-100, ""), 0, 0, 0, 0, 0, 0, "Missing");
	
	//Attaques
	var firstAttak:Attak = Attak("", Type(-100, ""), 0, 0, 0, 0);
	var secondAttak:Attak = Attak("", Type(-100, ""), 0, 0, 0, 0);
	var thirdAttak:Attak = Attak("", Type(-100, ""), 0, 0, 0, 0);
	var fourthAttak:Attak = Attak("", Type(-100, ""), 0, 0, 0, 0);
	
	//IVs
	var IPV:int = 0;
	var IAtt:int = 0;
	var IAttS:int = 0;
	var IDef:int = 0;
	var IDefS:int = 0;
	var ISpeed:int = 0;
	
	//EVs
	var EPV:int = 0;
	var EAtt:int = 0;
	var EAttS:int = 0;
	var EDef:int = 0;
	var EDefS:int = 0;
	var ESpeed:int = 0;
	
	//Stats
	var PV:int = 0;
	var PVU:int = 0;
	var Att:int = 0;
	var AttS:int = 0;
	var Def:int = 0;
	var DefS:int = 0;
	var Speed:int = 0;
	
	//Stats Contest
	var cool:int = 0;
	var beauty:int = 0;
	var cute:int = 0;
	var smart:int = 0;
	var tought:int = 0;
	
	public function Pokemon (espece:Espece, EPV:int, EAtt:int, EAttS:int, EDef:int, EDefS:int, ESpeed:int, IPV:int, IAtt:int, IAttS:int, IDef:int, IDefS:int, ISpeed:int, level:int, surname:String, nature:Nature)
	{
		this.espece = espece;
		
		this.surname = surname;
		this.level = level;
		this.nature = nature;
		
		this.EPV = EPV;
		this.EAtt = EAtt;
		this.EAttS = EAttS;
		this.EDef = EDef;
		this.EDefS = EDefS;
		this.ESpeed = ESpeed;
		
		this.IPV = IPV;
		this.IAtt = IAtt;
		this.IAttS = IAttS;
		this.IDef = IDef;
		this.IDefS = IDefS;
		this.ISpeed = ISpeed;
		
		Normalize();
		VerifyHacked();
	}
	
	public function Normalize ()
	{
		PV = ToStats(level, EPV, IPV, espece.BPV, true, 0);
		Att = ToStats(level, EAtt, IAtt, espece.BAtt, false, nature.atti);
		AttS = ToStats(level, EAttS, IAttS, espece.BAttS, false, nature.attsi);
		Def = ToStats(level, EDef, IDef, espece.BDef, false, nature.defi);
		DefS = ToStats(level, EDefS, IDefS, espece.BDefS, false, nature.defsi);
		Speed = ToStats(level, ESpeed, ISpeed, espece.BSpeed, false, nature.speedi);
		PVU = PV;
	}

	public function ToStats (lvl:int, EV:int, IV:int, BS:int, isPV:boolean, naturev:float):int
	{
		var state:float = 0;
		
		if (isPV) state = ((IV + (2 * BS) + EV/4 + 100) * lvl)/100;
		else state = (((IV + (2 * BS) + EV/4) * lvl)/100 + 5) * naturev;
		
		return state;
	}
	
	public function AddAttak (attak:Attak, place:int)
	{
		if (place == 0) firstAttak = attak;
		if (place == 1) secondAttak = attak;
		if (place == 2) thirdAttak = attak;
		if (place == 3) fourthAttak = attak;
	}
	
	public function RemoveAttak (place:int)
	{
		if (place == 0) firstAttak = Attak("", Type(-100, ""), 0, 0, 0, 0);
		if (place == 1) secondAttak = Attak("", Type(-100, ""), 0, 0, 0, 0);
		if (place == 2) thirdAttak = Attak("", Type(-100, ""), 0, 0, 0, 0);
		if (place == 3) fourthAttak = Attak("", Type(-100, ""), 0, 0, 0, 0);
	}
	
	public function setContestStats (cool:int, beauty:int, cute:int, smart:int, tought:int)
	{
		this.cool = cool;
		this.beauty = beauty;
		this.cute = cute;
		this.smart = smart;
		this.tought = tought;
	}
	
	public function VerifyHacked ()
	{
		if (EPV > 255 || EAtt > 255 || EAttS > 255 || EDef > 255 || EDefS > 255 || ESpeed > 255 || IPV > 31 || IAtt > 31 || IAttS > 31 || IDef > 31 || IDefS > 31 || ISpeed > 31 || (EPV + EAtt + EAttS + EDef + EDefS + ESpeed) > 510 || cool > 200 || smart > 200 || beauty > 200 || tought > 200 || cute > 200 || level > 100 || level < 1) isHacked = true;
		else isHacked = false;
	}
	
	public function EVToString ():String
	{
		return ("[" + EPV + EAtt + EAttS + EDef + EDefS + ESpeed + "]");
	}
	
	public function IVToString ():String
	{
		return ("[" + IPV + IAtt + IAttS + IDef + IDefS + ISpeed + "]");
	}
	
	public function ToString ():String
	{
		return ("(" + surname + "lv + xp: " + level + " " + exp + "EV: " + EVToString + "IV: " + IVToString + espece.ToString + ")");
	}
}