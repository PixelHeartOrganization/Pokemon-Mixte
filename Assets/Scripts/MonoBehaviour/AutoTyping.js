public var chateautext:GUIText;
public var pauseLetter:float;
public var message:String;
public var canSay:boolean;

function Update()
{
	if (canSay) { AutoType(); canSay = false; }
}

function Start()
{
	canSay = true;
	chateautext.pixelOffset = new Vector2(-Screen.width/2, -Screen.height/3);
}

function AutoType()
{
	for (var letter in message.ToCharArray())
	{
		chateautext.guiText.text += letter;
		
		yield WaitForSeconds(pauseLetter);
		
	}
}
/*
private var label:GUIText;

var text:String;
var speed:float;

function AutoType(text)*/