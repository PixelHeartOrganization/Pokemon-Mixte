class MegaItem
{
	var nameOfItem:String;
	var Getable:boolean;
	var espece:Espece;
	
	function Item (nameOfItem:String, Getable:boolean)
	{
		this.nameOfItem = nameOfItem;
		this.Getable = Getable;
	}
	
	function Item (espece:Espece)
	{
		this.espece = espece;
	}
}