static var X:int;
static var Z:int;

private var Xo:int;
private var Zo:int;

function OnTriggerEnter(other:Collider)
{
	print("You are in the case " + Xo + ":" + Zo);
}

function Start ()
{
	Xo = transform.position.x;
	Zo = transform.position.z;
	
	X = Xo;
	Z = Zo;
}