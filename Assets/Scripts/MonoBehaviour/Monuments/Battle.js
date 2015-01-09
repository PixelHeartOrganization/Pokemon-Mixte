@script ExecuteInEditMode

var healthBar:Texture2D;
var composantBar:Texture2D;

var posOfHealthBar:Vector2;
var posOfComposantBar:Vector2;
var posOfEnnemiComposantBar:Vector2;
var posOfLabel:Vector2;

var sizeOfHealthBar:Vector2;
var sizeOfComposantBar:float;

var style1:GUIStyle;

function OnGUI()
{
	GUI.DrawTexture(Rect(posOfComposantBar.x, posOfComposantBar.y, sizeOfComposantBar * composantBar.width, sizeOfComposantBar * composantBar.height), composantBar, ScaleMode.ScaleAndCrop);
	GUI.DrawTexture(Rect(posOfComposantBar.x + posOfHealthBar.x, posOfComposantBar.y + posOfHealthBar.y, Inventory.first.PVU/Inventory.first.PV * sizeOfHealthBar.x, sizeOfHealthBar.y), healthBar, ScaleMode.StretchToFill);
	GUI.Label(Rect(posOfComposantBar.x + posOfHealthBar.x + posOfLabel.x, posOfComposantBar.y + posOfHealthBar.y + posOfLabel.y, 500, 500), Inventory.first.PVU + "/" + Inventory.first.PV, style1);
	
	GUI.DrawTexture(Rect(posOfEnnemiComposantBar.x, posOfEnnemiComposantBar.y, sizeOfComposantBar * composantBar.width, sizeOfComposantBar * composantBar.height), composantBar, ScaleMode.ScaleAndCrop);
	GUI.DrawTexture(Rect(posOfEnnemiComposantBar.x + posOfHealthBar.x, posOfEnnemiComposantBar.y + posOfHealthBar.y, sizeOfHealthBar.x, sizeOfHealthBar.y), healthBar, ScaleMode.StretchToFill);
	
}