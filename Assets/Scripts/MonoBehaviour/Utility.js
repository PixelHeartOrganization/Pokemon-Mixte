@script ExecuteInEditMode

static var message:String;
static var persoName:String;
static var isUse:boolean = true;

var posY:float;
var textOfDialog:Texture2D;
var style:GUIStyle;
var style2:GUIStyle;
static var color:Color;

static function Dialog(message:String, flo:float)
{
	this.message = message;
	isUse = true;
	yield WaitForSeconds(flo);
	isUse = false;
}

static function OpenDialog ()
{
	isUse = true;
}

static function CloseDialog ()
{
	isUse = false;
}

static function Dialog(persoName:String, color:Color, message:String)
{
	this.persoName = persoName;
	this.color = color;
	this.message = message;
}

function OnGUI ()
{
	style2.normal.textColor = color;
	style2.fontSize = Screen.height/11;
	style.fontSize = Screen.height/11;
	if (isUse)
	{
		GUI.DrawTexture(Rect(Screen.width/6, Screen.height/posY, Screen.width/1.5, Screen.height/5), textOfDialog);
		GUI.Label(Rect(Screen.width/5, Screen.height/posY + 10, Screen.width/1.5, 1), message, style);
		GUI.Label(Rect(Screen.width/5, Screen.height/(posY+0.1), Screen.width/1.3, 1), persoName, style2);
	}
}