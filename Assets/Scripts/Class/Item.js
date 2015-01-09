class Item
{
	var nameOfItem:String = "";
	var Getable:boolean = true;
	
	function Item (nameOfItem:String, Getable:boolean)
	{
		this.nameOfItem = nameOfItem;
		this.Getable = Getable;
	}
	
	function Item (nameOfItem:String)
	{
		this.nameOfItem = nameOfItem;
		this.Getable = false;
	}
}