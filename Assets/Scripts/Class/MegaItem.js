class MegaItem extends Item
{
	var espece:Espece = Espece(Type(-100, ""), Type(-100, ""), 0, 0, 0, 0, 0, 0, "Missing");
	
	function MegaItem (nameOfItem:String, espece:Espece)
	{
		super(nameOfItem, true);
		this.espece = espece;
	}
}