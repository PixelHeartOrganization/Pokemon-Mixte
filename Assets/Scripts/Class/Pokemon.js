class Pokemon
{
	var isHacked:boolean;
	
	var surname:String;
	var level:int;
	var exp:int;
	var nature:Nature;
	var espece:Espece;
	
	//Attaques
	var firstAttak:Attak;
	var secondAttak:Attak;
	var thirdAttak:Attak;
	var fourthAttak:Attak;
	
	//IVs
	var IPV:int;
	var IAtt:int;
	var IAttS:int;
	var IDef:int;
	var IDefS:int;
	var ISpeed:int;
	
	//EVs
	var EPV:int;
	var EAtt:int;
	var EAttS:int;
	var EDef:int;
	var EDefS:int;
	var ESpeed:int;
	
	//Stats
	var PV:int;
	var PVU:int = PV;
	var Att:int;
	var AttS:int;
	var Def:int;
	var DefS:int;
	var Speed:int;
	
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
		
		this.PV = ToStats(level, EPV, IPV, espece.BPV, true, 0);
		this.Att = ToStats(level, EAtt, IAtt, espece.BAtt, false, nature.atti);
		this.AttS = ToStats(level, EAttS, IAttS, espece.BAttS, false, nature.attsi);
		this.Def = ToStats(level, EDef, IDef, espece.BDef, false, nature.defi);
		this.DefS = ToStats(level, EDefS, IDefS, espece.BDefS, false, nature.defsi);
		this.Speed = ToStats(level, ESpeed, ISpeed, espece.BSpeed, false, nature.speedi);
		
		PVU = PV;
		
		VerifyHacked();
	}

	public function ToStats(lvl:int, EV:int, IV:int, BS:int, isPV:boolean, naturev:float):int
	{
		var state:float;
		
		if (isPV) state = ((IV + (2 * BS) + EV/4 + 100) * lvl)/100 + 10;
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
		if (place == 0) firstAttak = null;
		if (place == 1) secondAttak = null;
		if (place == 2) thirdAttak = null;
		if (place == 3) fourthAttak = null;
	}
	
	public function VerifyHacked ()
	{
		if (EPV > 255 || EAtt > 255 || EAttS > 255 || EDef > 255 || EDefS > 255 || ESpeed > 255) isHacked = true;
		else isHacked = false;
		
		if (IPV > 31 || IAtt > 31 || IAttS > 31 || IDef > 31 || IDefS > 31 || ISpeed > 31) isHacked = true;
		else isHacked = false;
		
		if ((EPV + EAtt + EAttS + EDef + EDefS + ESpeed) > 510) isHacked = true;
		else isHacked = false;
		
		if (level > 101 || level < 1) isHacked = true;
		else isHacked = false;
	}
}