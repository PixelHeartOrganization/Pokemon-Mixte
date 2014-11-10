class Nature
{
	var atti:float;
	var attsi:float;
	var defi:float;
	var defsi:float;
	var speedi:float;
	
	public function Nature (att:int, atts:int, def:int, defs:int, speed:int)
	{
		if (att == 1) this.atti = 1.1;
		if (att == 0) this.atti = 1;
		if (att == -1) this.atti = 0.9;
		
		if (def == 1) this.defi = 1.1;
		if (def == 0) this.defi = 1;
		if (def == -1) this.defi = 0.9;
		
		if (defs == 1) this.defsi = 1.1;
		if (defs == 0) this.defsi = 1;
		if (defs == -1) this.defsi = 0.9;
		
		if (atts == 1) this.attsi = 1.1;
		if (atts == 0) this.attsi = 1;
		if (atts == -1) this.attsi = 0.9;
		
		if (speed == 1) this.speedi = 1.1;
		if (speed == 0) this.speedi = 1;
		if (speed == -1) this.speedi = 0.9;
	}
}