var position:Vector3;
var player:GameObject;
var loadScene:boolean;
var level:int;

function OnTriggerEnter (other:Collider)
{
	if (!loadScene)
	{
		Player.Vector = position;
		Player.bool = true;
		yield WaitForSeconds(0.5);
		Player.bool = false;
	}
	
	else
	{
		Application.LoadLevel(level);
		yield WaitForSeconds(0.5);
		Player.Vector = position;
		Player.bool = true;
		yield WaitForSeconds(0.5);
		Player.bool = false;
	}
}